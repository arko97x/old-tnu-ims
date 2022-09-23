import Head from 'next/head'
import Navbar from './components/navbar'
import AnimatedTextWord from './components/animatedTextWord'
import { motion } from 'framer-motion'

export default function Home() {
  const heroImg = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 32,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 10,
      y: 20,
      transition: {
        type: "spring",
        damping: 32,
        stiffness: 40,
      },
    },
  }

  return (
    <div>
      <Head>
        <title>Oh, my E!</title>
        <meta name="description" content="Don't be a trashy human. Trash your E. Responsibly." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-screen'>
        {/* Navbar */}
        <Navbar />

        <div className='pt-20 sm:pt-28 p-8 w-full h-screen flex items-center justify-center bg-[#FFF7AB]'>
          <div className='flex flex-col items-center justify-center'>
            {/* Hero image */}
            <motion.div
              variants={heroImg}
              initial="hidden"
              animate="visible"
            >
              <img className='h-24 sm:h-48 w-auto' src='/heroImg1.png' />
            </motion.div>

            {/* Tagline */}
            <div className='text-2xl sm:text-5xl font-light flex flex-col'>
              <AnimatedTextWord text="Don't be a trashy human." delay={0.24} />
              <AnimatedTextWord text='Trash your E! Responsibly.' delay={0.84} />
            </div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  )
}
