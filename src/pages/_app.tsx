import { getCookie } from 'cookies-next'
import type { AppContext, AppProps } from 'next/app'
import App from 'next/app'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import Decimal from 'decimal.js'

import i18n from '../i18n'
import { isClient } from '../utils/common'
import '@/components/Toast/toast.css'
import '@/components/LandingPage/components/tvl.css'
import '@/components/LandingPage/liquidity.css'
import 'react-day-picker/dist/style.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import { OnboardingDialog } from '@/components/Dialogs/OnboardingDialog'
import { DialogManager } from '@/components/DialogManager'

const DynamicProviders = dynamic(() => import('@/provider').then((mod) => mod.Providers))
const DynamicContent = dynamic(() => import('@/components/Content'))
const DynamicAppNavLayout = dynamic(() => import('@/components/AppLayout/AppNavLayout'), { ssr: false })

const CONTENT_ONLY_PATH = ['/', '404', '/moonpay']
const OVERFLOW_HIDDEN_PATH = ['/liquidity-pools']

Decimal.set({ precision: 1e3 })

const MyApp = ({ Component, pageProps, ...props }: AppProps) => {
  const { pathname } = useRouter()

  const [onlyContent, overflowHidden] = useMemo(
    () => [CONTENT_ONLY_PATH.includes(pathname), OVERFLOW_HIDDEN_PATH.includes(pathname)],
    [pathname]
  )

  return (
    <>
      <GoogleAnalytics gaId="G-DR3V6FTKE3" />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@staccattac" />
        <meta name="twitter:creator" content="@staccattac" />
        <meta name="twitter:title" content="staccattac.fun" />
        <meta name="twitter:description" content="An on-chain order book AMM powering the evolution of DeFi " />
        <meta property="og:description" content="An on-chain order book AMM powering the evolution of DeFi " />
        <meta property="og:url" content="https://staccattac.fun/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:alt" content="staccattac.fun" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="staccattac.fun" />
        <meta property="og:title" content="Swap | staccattac.fun" />
        <title>{pageProps?.title ? `${pageProps.title} staccattac.fun` : 'staccattac.fun'}</title>
      </Head>
      <DynamicProviders>
        <DynamicContent {...props}>
          {onlyContent ? (
            <Component {...pageProps} />
          ) : (
            <DynamicAppNavLayout overflowHidden={overflowHidden}>
              <Component {...pageProps} />
            </DynamicAppNavLayout>
          )}
        </DynamicContent>
        <DialogManager />
        <OnboardingDialog />
      </DynamicProviders>
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  if (isClient()) return {}
  try {
    const ctx = await App.getInitialProps(appContext)
    let lng = getCookie('i18nextLng', { req: appContext.ctx.req, res: appContext.ctx.res }) as string
    lng = lng || 'en'
    i18n.changeLanguage(lng)

    return ctx
  } catch (err) {
    return {}
  }
}

export default MyApp
