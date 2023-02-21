import { Layout } from '@/components/LayOut/Layout'
import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'
import { Particle } from '@/components/LayOut/Particle'
import { AnimatePresence } from 'framer-motion'

export default function App ({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute='class'>
      <Particle />
      <Layout>
        <AnimatePresence mode='wait' initial={false}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}
