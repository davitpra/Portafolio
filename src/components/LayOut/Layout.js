import Head from 'next/head'
import { Header } from './Header'
import { TabBar } from './TabBar'
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
        <main className={`md:mt-0 flex-grow mb-[76px] md:mb-0 ${montserrat.className}`}>
          {children}
        </main>
        {/* MODAL */}
        <div id='modal-root' />
        <TabBar />
      </div>
    </>
  )
}
