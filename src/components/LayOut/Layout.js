import Head from 'next/head'
import { Header } from './Header'
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
        <meta name='description' content='David Prado Portafolio' />
      </Head>
      <div className='relative min-h-screen flex flex-col'>
        <Header />
        <main className={`mt-[112px] md:mt-0 flex-grow mb-4 ${montserrat.className}`}>
          {children}
        </main>
      </div>
    </>
  )
}
