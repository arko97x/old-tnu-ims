import Head from 'next/head'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Oh, my E!</title>
        <meta name="description" content="Don't be a trashy human. Trash your E. But responsibly." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-screen'>
        <Navbar />
      </main>

      <footer></footer>
    </div>
  )
}
