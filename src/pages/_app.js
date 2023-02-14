import { Layout } from '@/components/Layout'
import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'
import { Particle } from '@/components/Particle'

export default function App ({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Particle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
