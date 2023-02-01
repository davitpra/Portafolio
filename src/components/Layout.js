import Head from 'next/head'
import { Footer } from '@/sections/Footer'
import { Header } from '@/sections/Header'

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>David Prado Portafolio</title>
        <meta name='description' content='David Prado Portafolio in next and tailwind' />
      </Head>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-grow'>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
