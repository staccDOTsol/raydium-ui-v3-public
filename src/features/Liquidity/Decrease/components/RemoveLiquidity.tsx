import { Box, Flex, Text } from '@chakra-ui/react'
import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import Button from '@/components/Button'
import AmountSlider from '@/components/AmountSlider'
import TokenAvatarPair from '@/components/TokenAvatarPair'
import { FormattedPoolInfoStandardItem, FormattedPoolInfoStandardItemCpmm } from '@/hooks/pool/type'
import { useAppStore, useTokenAccountStore } from '@/store'
import IntervalCircle, { IntervalCircleHandler } from '@/components/IntervalCircle'
import { SlippageAdjuster } from '@/components/SlippageAdjuster'
import { formatCurrency } from '@/utils/numberish/formatter'
import { useLiquidityStore } from '@/store/useLiquidityStore'
import useTokenPrice from '@/hooks/token/useTokenPrice'
import { colors } from '@/theme/cssVariables'
import Decimal from 'decimal.js'
import { useEvent } from '@/hooks/useEvent'
import useRefreshEpochInfo from '@/hooks/useRefreshEpochInfo'
import { getTransferAmountFeeV2 } from 'stacc-sdk-v2'
import BN from 'bn.js'

const BN_ZERO = new BN(0)

export default function UnStakeLiquidity({
  poolInfo,
  rpcPoolData,
  onRefresh
}: {
  poolInfo?: FormattedPoolInfoStandardItem | FormattedPoolInfoStandardItemCpmm
  rpcPoolData?: {
    baseReserve: BN
    quoteReserve: BN
    baseDecimals: number
    quoteDecimals: number
    lpSupply: BN
    lpDecimals: number
  }
  onRefresh: () => void
}) {
  const { t } = useTranslation()
  const isMobile = useAppStore((s) => s.isMobile)
  const featureDisabled = useAppStore((s) => s.featureDisabled.removeStandardPosition)
  const epochInfo = useRefreshEpochInfo()
  const removeLiquidityAct = useLiquidityStore((s) => s.removeLiquidityAct)
  const removeCpmmLiquidityAct = useLiquidityStore((s) => s.removeCpmmLiquidityAct)
  const { data: tokenPrice } = useTokenPrice({ mintList: [poolInfo?.mintA.address, poolInfo?.mintB.address] })
  const [removePercent, setRemovePercent] = useState(0)
  const getTokenBalanceUiAmount = useTokenAccountStore((s) => s.getTokenBalanceUiAmount)
  const liquidity = getTokenBalanceUiAmount({ mint: poolInfo?.lpMint.address || '', decimals: poolInfo?.lpMint.decimals }).amount
  const [isTxSending, setIsTxSending] = useState(false)
  const circleRef = useRef<IntervalCircleHandler>(null)
  const amountA = rpcPoolData
    ? new Decimal(rpcPoolData.baseReserve.toString()).div(10 ** rpcPoolData.baseDecimals)
    : new Decimal(poolInfo?.mintAmountA || 0)
  const amountB = rpcPoolData
    ? new Decimal(rpcPoolData.quoteReserve.toString()).div(10 ** rpcPoolData.quoteDecimals)
    : new Decimal(poolInfo?.mintAmountB || 0)
  const lpAmount = rpcPoolData
    ? new Decimal(rpcPoolData.lpSupply.toString()).div(10 ** rpcPoolData.lpDecimals)
    : new Decimal(poolInfo?.lpAmount || 1)

  console.log("Pool Info:", poolInfo)
  console.log("RPC Pool Data:", rpcPoolData)
  
  const baseRatio = amountA.div(lpAmount)
  const quoteRatio = amountB.div(lpAmount)
  
  console.log("Base Ratio:", baseRatio.toString())
  console.log("Quote Ratio:", quoteRatio.toString())

  const removeAmount = new Decimal(liquidity).mul(removePercent).div(100)
  console.log("Liquidity:", liquidity.toString())
  console.log("Remove Percent:", removePercent)
  console.log("Remove Amount:", removeAmount.toString())

  const [withdrawAmountA, withdrawAmountB] = [
    removeAmount.mul(baseRatio).mul(10 ** (poolInfo?.mintA.decimals || 0)),
    removeAmount.mul(quoteRatio).mul(10 ** (poolInfo?.mintB.decimals || 0))
  ]
  
  console.log("Withdraw Amount A (raw):", withdrawAmountA.toString())
  console.log("Withdraw Amount B (raw):", withdrawAmountB.toString())

  const [withdrawAmountAFee, withdrawAmountBFee] = [
    withdrawAmountA.toString(),
    withdrawAmountB.toString()
  ]
  
  console.log("Withdraw Amount A (with fee):", withdrawAmountAFee)
  console.log("Withdraw Amount B (with fee):", withdrawAmountBFee)

  const handleRemove = () => {
    if (!poolInfo) return
    setIsTxSending(true)
    console.log("Starting liquidity removal process")

    const callBacks = {
      onSent: () => {
        console.log("Transaction sent successfully")
        setRemovePercent(0)
      },
      onFinally: () => {
        console.log("Transaction process completed")
        setIsTxSending(false)
      }
    }

    const isCpmm = useAppStore.getState().programIdConfig.CREATE_CPMM_POOL_PROGRAM.toBase58() === poolInfo.programId
    console.log("Is CPMM pool:", isCpmm)
    console.log("Pool Program ID:", poolInfo.programId)
    
    if (isCpmm) {
      console.log("Removing CPMM liquidity with params:", {
        poolInfo: poolInfo.id,
        lpAmount: removeAmount.mul(10 ** poolInfo.lpMint.decimals).toFixed(0),
        amountA: withdrawAmountAFee,
        amountB: withdrawAmountBFee
      })
      
      removeCpmmLiquidityAct({
        poolInfo: poolInfo as FormattedPoolInfoStandardItemCpmm,
        lpAmount: removeAmount.mul(10 ** poolInfo.lpMint.decimals).toFixed(0),
        amountA: withdrawAmountAFee,
        amountB: withdrawAmountBFee,
        ...callBacks
      })
      return
    }
    
    console.log("Removing standard liquidity with params:", {
      poolInfo: poolInfo.id,
      lpAmount: removeAmount.mul(10 ** poolInfo.lpMint.decimals).toFixed(0),
      amountA: withdrawAmountA.toString(),
      amountB: withdrawAmountB.toString()
    })
    
    removeLiquidityAct({
      poolInfo: poolInfo as FormattedPoolInfoStandardItem,
      lpAmount: removeAmount.mul(10 ** poolInfo.lpMint.decimals).toFixed(0),
      amountA: withdrawAmountA.toString(),
      amountB: withdrawAmountB.toString(),
      ...callBacks
    })
  }

  const handleEnd = useEvent(() => {
    console.log("Refresh cycle ended, restarting")
    circleRef.current?.restart()
    onRefresh()
  })
  
  const removeValue = new Decimal(withdrawAmountAFee)
    .mul(tokenPrice[poolInfo?.mintA.address || '']?.value || 0)
    .add(new Decimal(withdrawAmountBFee).mul(tokenPrice[poolInfo?.mintB.address || '']?.value || 0))
  
  console.log("Token A price:", tokenPrice[poolInfo?.mintA.address || '']?.value)
  console.log("Token B price:", tokenPrice[poolInfo?.mintB.address || '']?.value)
  console.log("Total remove value in USD:", removeValue.toString())

  return (
    <Flex borderRadius="24px" direction="column" w="full" px="24px" py="32px" bg={colors.backgroundLight}>
      <Flex justifyContent="space-between" align="center" py="6" px="4" bg={colors.backgroundDark} borderRadius="12px">
        <Flex gap="2" alignItems="center">
          <TokenAvatarPair token1={poolInfo?.mintA} token2={poolInfo?.mintB} />
          <Text variant="title" fontSize={['sm', 'xl']} color={colors.textSecondary}>
            {poolInfo?.poolName.replace(' - ', '/')}
          </Text>
        </Flex>
        <Box textAlign="right">
          <Text fontSize={['sm', '28px']}>{formatCurrency(removeValue.toString(), { symbol: '$', maximumDecimalTrailingZeroes: 2 })}</Text>
          <Text variant="label">
            {formatCurrency(removeAmount.toString(), { decimalPlaces: isMobile ? 6 : poolInfo?.lpMint.decimals })} LP
          </Text>
        </Box>
      </Flex>
      <AmountSlider isDisabled={featureDisabled || liquidity.isZero()} percent={removePercent} onChange={setRemovePercent} mt={4} />
      <Flex align="center" gap={3} justifyContent="flex-end" mb="2">
        <SlippageAdjuster variant="liquidity" />
        <IntervalCircle
          componentRef={circleRef}
          svgWidth={18}
          strokeWidth={2}
          trackStrokeColor={colors.secondary}
          trackStrokeOpacity={0.5}
          filledTrackStrokeColor={colors.secondary}
          onClick={handleEnd}
          onEnd={onRefresh}
        />
      </Flex>
      <Box bg={colors.backgroundDark} borderRadius="12px" py={3} px={6}>
        <Text fontSize="md" fontWeight="medium" mb="2" color={colors.textSecondary}>
          {t('liquidity.assets_to_received')}:
        </Text>
        <Flex alignItems="center" gap="1" fontSize="sm">
          <TokenAvatarPair mr="1" token1={poolInfo?.mintA} token2={poolInfo?.mintB} />
          {formatCurrency(withdrawAmountAFee, {
            decimalPlaces: isMobile ? 3 : poolInfo?.mintA.decimals
          })}{' '}
          <Text fontSize="sm" variant="label">
            {poolInfo?.mintA.symbol}
          </Text>
          <Box>/</Box>
          {formatCurrency(withdrawAmountBFee, { decimalPlaces: isMobile ? 3 : poolInfo?.mintB.decimals })}{' '}
          <Text fontSize="sm" variant="label">
            {poolInfo?.mintB.symbol}
          </Text>
        </Flex>
      </Box>
      <Button mt={10} isLoading={isTxSending} isDisabled={featureDisabled || !poolInfo || removeAmount.isZero()} onClick={handleRemove}>
        {featureDisabled ? t('common.disabled') : t('liquidity.remove_liquidity')}
      </Button>
    </Flex>
  )
}
