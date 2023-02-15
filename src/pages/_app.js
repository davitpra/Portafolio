import { Layout } from '@/components/LayOut/Layout'
import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'
import { Particle } from '@/components/LayOut/Particle'

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
