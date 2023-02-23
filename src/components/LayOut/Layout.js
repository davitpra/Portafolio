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
      <div className='mt-[110px] md:mt-0 relative min-h-screen flex flex-col'>
        <Header />
        <main className={`mt-[112px] md:mt-0 flex-grow h-screen ${montserrat.className}`}>
          {children}
        </main>
      </div>
    </>
  )
}
