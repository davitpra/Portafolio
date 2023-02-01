import Head from 'next/head'
import { Footer } from '@/sections/Footer'
import { Header } from '@/sections/Header'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat(
  {
    subsets: ['latin'],
    weight: '400'
  }
)
export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>David Prado Portafolio</title>
        <meta name='description' content='David Prado Portafolio in next and tailwind' />
      </Head>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className={`flex-grow ${montserrat.className}`}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
