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
        {/* Añades la propiedad mode wait para que anime cuando la anterior haya terminado */}
        <AnimatePresence mode='wait'>
          {/* añades key router.asPath para que lea las animaciones de salida de sus elementos hijos */}
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}
