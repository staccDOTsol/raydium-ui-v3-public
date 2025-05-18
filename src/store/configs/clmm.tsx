import { Trans } from 'react-i18next'
import { Text } from '@chakra-ui/react'
import i18n from '@/i18n'
import { colors } from '@/theme/cssVariables/colors'

export const CLMM_FEE_CONFIGS = {
  '5w8pYAfXYopcaar6aBrLeBjnTZj1GZXnEbCrPmjc5rwE': {
    id: '5w8pYAfXYopcaar6aBrLeBjnTZj1GZXnEbCrPmjc5rwE',
    index: 1,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 60,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5],
    description: '10% Fee - Medium Volatility (Tick Spacing: 60)'
  },
  'bBUk5ri157iwAB5UjJ9fqkejuD66B8SYXQ1rTJErQGJ': {
    id: 'bBUk5ri157iwAB5UjJ9fqkejuD66B8SYXQ1rTJErQGJ',
    index: 3,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 120,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5],
    description: '10% Fee - High Volatility (Tick Spacing: 120)'
  },
  'FP3skckLWKv3D7hE21hE9vDpxGEMaMj1ScoipbtSBCfU': {
    id: 'FP3skckLWKv3D7hE21hE9vDpxGEMaMj1ScoipbtSBCfU',
    index: 4,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 1,
    fundFeeRate: 40000,
    defaultRange: 0.001,
    defaultRangePoint: [0.001, 0.003, 0.005, 0.008, 0.01],
    description: '10% Fee - Very Stable Pairs (Tick Spacing: 1)'
  },
  'HvyLKTeTEE2EhQZV7eup5hoUnuMYgmAbHbQwY59kmzoV': {
    id: 'HvyLKTeTEE2EhQZV7eup5hoUnuMYgmAbHbQwY59kmzoV',
    index: 5,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 1,
    fundFeeRate: 40000,
    defaultRange: 0.001,
    defaultRangePoint: [0.001, 0.003, 0.005, 0.008, 0.01],
    description: '10% Fee - Very Stable Pairs (Tick Spacing: 1)'
  },
  '2Kom3mdEzhEirsoTjELc6YrvVvyxNXBoUDXsndFntsAM': {
    id: '2Kom3mdEzhEirsoTjELc6YrvVvyxNXBoUDXsndFntsAM',
    index: 6,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 1,
    fundFeeRate: 40000,
    defaultRange: 0.001,
    defaultRangePoint: [0.001, 0.003, 0.005, 0.008, 0.01],
    description: '10% Fee - Very Stable Pairs (Tick Spacing: 1)'
  },
  'CGEth6GwqS8QW4VEpGKEh9y3KBLPxTUwWYDUKuwEDnFh': {
    id: 'CGEth6GwqS8QW4VEpGKEh9y3KBLPxTUwWYDUKuwEDnFh',
    index: 7,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 1,
    fundFeeRate: 40000,
    defaultRange: 0.001,
    defaultRangePoint: [0.001, 0.003, 0.005, 0.008, 0.01],
    description: '10% Fee - Very Stable Pairs (Tick Spacing: 1)'
  },
  'Arnsv96rQ1Te9i5t1v2je8w3nyyUSGUKewih48p8Dwm4': {
    id: 'Arnsv96rQ1Te9i5t1v2je8w3nyyUSGUKewih48p8Dwm4',
    index: 8,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 1,
    fundFeeRate: 40000,
    defaultRange: 0.001,
    defaultRangePoint: [0.001, 0.003, 0.005, 0.008, 0.01],
    description: '10% Fee - Very Stable Pairs (Tick Spacing: 1)'
  },
  'BL7XhFgMK2vB187d1VsSAVRfg9HRrMkx4HN5vdR5z39a': {
    id: 'BL7XhFgMK2vB187d1VsSAVRfg9HRrMkx4HN5vdR5z39a',
    index: 9,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 120,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5],
    description: '10% Fee - High Volatility (Tick Spacing: 120)'
  },
  '2S5vWt8Nj9jDhC1LPRvCXxLSJVhnXZtzZtCn3gsHpLzE': {
    id: '2S5vWt8Nj9jDhC1LPRvCXxLSJVhnXZtzZtCn3gsHpLzE',
    index: 10,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 10,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5],
    description: '10% Fee - Stable Pairs (Tick Spacing: 10)'
  },
  'HQmPod2ihyiK9ZUTgXxKAZkKNvxWpog3pnwwpLPdqRpz': {
    id: 'HQmPod2ihyiK9ZUTgXxKAZkKNvxWpog3pnwwpLPdqRpz',
    index: 11,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 10,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5],
    description: '10% Fee - Stable Pairs (Tick Spacing: 10)'
  },
  'GjrXnyJ4ftQY5knhPmHXs8WF2N6nRCAhGoeSdzpeqtJX': {
    id: 'GjrXnyJ4ftQY5knhPmHXs8WF2N6nRCAhGoeSdzpeqtJX',
    index: 12,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 10,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5],
    description: '10% Fee - Stable Pairs (Tick Spacing: 10)'
  },
  'ENFmGbWNxrjhGe1yQjuayexbkNxv7GQoVft4ccjJ8cgY': {
    id: 'ENFmGbWNxrjhGe1yQjuayexbkNxv7GQoVft4ccjJ8cgY',
    index: 13,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 10,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5],
    description: '10% Fee - Stable Pairs (Tick Spacing: 10)'
  },
  'AuWTKDqbS3iyi88oj4XdbhaLJ73Rg8rLw1evBYKgbrxS': {
    id: 'AuWTKDqbS3iyi88oj4XdbhaLJ73Rg8rLw1evBYKgbrxS',
    index: 14,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 10,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5],
    description: '10% Fee - Stable Pairs (Tick Spacing: 10)'
  },
  'FksnzuFrrScjoSAEj815gbDyQfMbF55unski9kiKDYDv': {
    id: 'FksnzuFrrScjoSAEj815gbDyQfMbF55unski9kiKDYDv',
    index: 15,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 60,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5],
    description: '10% Fee - Medium Volatility (Tick Spacing: 60)'
  },
  '8KpoaAsiMQTkB4z6BDycGwRu8wARpRNSShcoQRDyGdP3': {
    id: '8KpoaAsiMQTkB4z6BDycGwRu8wARpRNSShcoQRDyGdP3',
    index: 16,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 60,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5],
    description: '10% Fee - Medium Volatility (Tick Spacing: 60)'
  },
  'GnUutk9k4Eczdp8TbZ376JqkfQ3svTJmDJtBMXGBNDQ': {
    id: 'GnUutk9k4Eczdp8TbZ376JqkfQ3svTJmDJtBMXGBNDQ',
    index: 17,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 60,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5],
    description: '10% Fee - Medium Volatility (Tick Spacing: 60)'
  },
  'Er8Fzd7hRE8mBUCKYsLjRQ5JR4iouz6FfkNJKutWM2jV': {
    id: 'Er8Fzd7hRE8mBUCKYsLjRQ5JR4iouz6FfkNJKutWM2jV',
    index: 18,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 120,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5],
    description: '10% Fee - High Volatility (Tick Spacing: 120)'
  },
  'DPHSuHkMzr5HWsvXE6hnt9h9dUUahjB4b5eCvPPrHoef': {
    id: 'DPHSuHkMzr5HWsvXE6hnt9h9dUUahjB4b5eCvPPrHoef',
    index: 19,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 120,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5],
    description: '10% Fee - High Volatility (Tick Spacing: 120)'
  },
  'BgWaK79bGxGGv5BTUaSEGfxyW4riiJEeqRjrYA8xTeNq': {
    id: 'BgWaK79bGxGGv5BTUaSEGfxyW4riiJEeqRjrYA8xTeNq',
    index: 20,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 1,
    fundFeeRate: 40000,
    defaultRange: 0.001,
    defaultRangePoint: [0.001, 0.003, 0.005, 0.008, 0.01],
    description: '10% Fee - Very Stable Pairs (Tick Spacing: 1)'
  },
  '5QB7MwvhXXBB6frUrd61mK2bxCpW6mVTyxPny832osw8': {
    id: '5QB7MwvhXXBB6frUrd61mK2bxCpW6mVTyxPny832osw8',
    index: 21,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 1,
    fundFeeRate: 40000,
    defaultRange: 0.001,
    defaultRangePoint: [0.001, 0.003, 0.005, 0.008, 0.01],
    description: '10% Fee - Very Stable Pairs (Tick Spacing: 1)'
  },
  'BnqFggnxUBsaSMy4B6z4Sdkmb8GFcq9hx8xpTbvictK7': {
    id: 'BnqFggnxUBsaSMy4B6z4Sdkmb8GFcq9hx8xpTbvictK7',
    index: 22,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 10,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5],
    description: '10% Fee - Stable Pairs (Tick Spacing: 10)'
  },
  '4NUeBVzrU8pd9PZwN5he86wgDb3XJe8Eb8DuqPorpezP': {
    id: '4NUeBVzrU8pd9PZwN5he86wgDb3XJe8Eb8DuqPorpezP',
    index: 23,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 10,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5],
    description: '10% Fee - Stable Pairs (Tick Spacing: 10)'
  },
  '2cAbW3PeT3US7V1irLDAgqib1D87mLePziBTGQD6pkwU': {
    id: '2cAbW3PeT3US7V1irLDAgqib1D87mLePziBTGQD6pkwU',
    index: 24,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 60,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5],
    description: '10% Fee - Medium Volatility (Tick Spacing: 60)'
  },
  'DHQtpoUNLSSsDBEqzemZmrCSf4nU3zWkvynQGnFRWqkB': {
    id: 'DHQtpoUNLSSsDBEqzemZmrCSf4nU3zWkvynQGnFRWqkB',
    index: 25,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 60,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5],
    description: '10% Fee - Medium Volatility (Tick Spacing: 60)'
  },
  '8XHE4P1LjY7p3NnCkAnsxn2pmr4reVFr7AvcEYBM13ku': {
    id: '8XHE4P1LjY7p3NnCkAnsxn2pmr4reVFr7AvcEYBM13ku',
    index: 26,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 120,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5],
    description: '10% Fee - High Volatility (Tick Spacing: 120)'
  },
  'SsYCbRbtSyzhcvuVhZXR1GRnQRSnv6aCZtE8hH6w34y': {
    id: 'SsYCbRbtSyzhcvuVhZXR1GRnQRSnv6aCZtE8hH6w34y',
    index: 27,
    protocolFeeRate: 120000,
    tradeFeeRate: 100000,
    tickSpacing: 120,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5],
    description: '10% Fee - High Volatility (Tick Spacing: 120)'
  }
}

export const CREATE_POS_DEVIATION = 0.985 // ask Rudy for detail

const CLMM_TX_MSG = {
  harvest: {
    title: 'transaction_history.harvest_rewards',
    desc: 'transaction_history.harvest_clmm_reward_desc',
    txHistoryTitle: 'transaction_history.harvest_rewards',
    txHistoryDesc: 'transaction_history.harvest_clmm_reward_desc',
    components: { sub: <Text as="span" color={colors.textSecondary} fontWeight="700" /> }
  },
  openPosition: {
    title: 'transaction_history.name_add_liquidity',
    desc: 'transaction_history.add_liquidity_desc',
    txHistoryTitle: 'transaction_history.name_add_liquidity',
    txHistoryDesc: 'transaction_history.add_liquidity_desc',
    components: { sub: <Text as="span" color={colors.textSecondary} fontWeight="700" /> }
  },
  closePosition: {
    title: 'clmm.position_closed',
    desc: 'clmm.close_mint_position',
    txHistoryTitle: 'clmm.position_closed',
    txHistoryDesc: 'clmm.close_mint_position',
    components: {}
  },
  increaseLiquidity: {
    title: 'transaction_history.name_add_liquidity',
    desc: 'transaction_history.add_liquidity_desc',
    txHistoryTitle: 'transaction_history.name_add_liquidity',
    txHistoryDesc: 'transaction_history.add_liquidity_desc',
    components: { sub: <Text as="span" color={colors.textSecondary} fontWeight="700" /> }
  },
  removeLiquidity: {
    title: 'transaction_history.name_remove_liquidity',
    desc: 'transaction_history.remove_liquidity_desc',
    txHistoryTitle: 'transaction_history.name_remove_liquidity',
    txHistoryDesc: 'transaction_history.remove_liquidity_desc',
    components: { sub: <Text as="span" color={colors.textSecondary} fontWeight="700" /> }
  },
  updateRewards: {
    title: 'transaction_history.update_reward_title',
    desc: 'transaction_history.update_reward_desc',
    txHistoryTitle: 'transaction_history.update_reward_title',
    txHistoryDesc: 'transaction_history.update_reward_desc',
    components: { sub: <Text as="span" color={colors.textSecondary} fontWeight="700" /> }
  },
  createPool: {
    title: 'transaction_history.create_pool',
    desc: 'transaction_history.create_clmm_pool',
    txHistoryTitle: 'transaction_history.create_pool',
    txHistoryDesc: 'transaction_history.create_clmm_pool',
    components: {}
  },
  createFarm: {
    title: 'transaction_history.create_farm',
    desc: 'transaction_history.create_clmm_farm_desc',
    txHistoryTitle: 'transaction_history.create_farm',
    txHistoryDesc: 'transaction_history.create_clmm_farm_desc',
    components: {}
  },
  harvestAll: {
    title: 'transaction_history.harvest_rewards',
    desc: 'transaction_history.harvest_rewards_desc',
    txHistoryTitle: 'transaction_history.harvest_rewards',
    txHistoryDesc: 'transaction_history.harvest_rewards_desc',
    components: { sub: <Text as="span" color={colors.textSecondary} fontWeight="700" /> }
  },
  lockPosition: {
    title: 'transaction_history.lock_position',
    desc: 'transaction_history.position_locked',
    txHistoryTitle: 'transaction_history.lock_position',
    txHistoryDesc: 'transaction_history.position_locked',
    components: { sub: <Text as="span" color={colors.textSecondary} fontWeight="700" /> }
  }
}

export const getTxMeta = ({ action, values }: { action: keyof typeof CLMM_TX_MSG; values: Record<string, unknown> }) => {
  const meta = CLMM_TX_MSG[action]
  return {
    title: i18n.t(meta.title, values),
    description: <Trans i18nKey={meta.desc} values={values} components={meta.components} />,
    txHistoryTitle: meta.txHistoryTitle || meta.title,
    txHistoryDesc: meta.txHistoryDesc || meta.desc,
    txValues: values
  }
}
