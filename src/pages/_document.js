import { Html, Head, Main, NextScript } from 'next/document'
export default function Document () {
  return (
    <Html lang='en'>
      <Head />
      <body id='particles-js'>
        <Main />
        <NextScript />
      </body>
      <script src='particles.js' />
    </Html>
  )
}
