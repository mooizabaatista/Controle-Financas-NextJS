import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Controle de Finanças - NextJS</title>
      </Head>
      <Navbar/>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  )
}
