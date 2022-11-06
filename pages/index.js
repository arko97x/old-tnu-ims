import Head from 'next/head'
import Navbar from './components/navbar'
import Footer from './components/footer'
import AnimatedTextWord from './components/animatedTextWord'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

export default function Home() {
  // var barBg = '#04AA6D';
  const [barBg, setBarBg] = useState('#04AA6D');

  function myFunction() {
    if (typeof window !== 'undefined') {
      var parent = document.getElementById('ss');
      var winScroll = parent.scrollTop;
      var height = parent.scrollHeight - parent.clientHeight;
      var scrolled = 100 - ((winScroll / height) * 100);
      if (scrolled < 75 && scrolled >= 45) {
        setBarBg('#FAA92F');
      } else if (scrolled < 45) {
        setBarBg('#D4483B');
      } else {
        setBarBg('#04AA6D');
      }
      document.getElementById("myBar").style.width = scrolled + "%";
    }
  }

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

        <div className='pt-20 sm:pt-28 p-8 w-full flex flex-col justify-center bg-[#DFDFDE]'>
          <div className='h-[70vh] flex flex-col items-center justify-center'>
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

          <div className='p-2 sm:p-8 flex flex-col space-y-6 bg-[#CCCCCC] rounded-xl'>
            <div className='w-full flex flex-col sm:flex-row justify-between items-center'>
              <div className='flex flex-col space-y-0'>
                <div className='text-2xl sm:text-5xl font-semibold'>How are we affecting Rishi?</div>
                <div className='text-xl font-semibold'>By disposing of our e-waste carelessly.</div>
              </div>
              <div className='w-[80%] sm:w-[18%] md:w-[16%] p-2 flex flex-row items-center'>
                <div className='w-1/3'>
                  <img src='/avatar1.png' className='object-cover rounded-full h-14 w-14' />
                </div>
                <div className='progress-container w-2/3 h-2 bg-[#DFDFDE] rounded-full'>
                  <div className='progress-bar h-2 rounded-full' style={{ width: "100%", backgroundColor: barBg }} id='myBar'></div>
                </div>
              </div>
            </div>

            <div className='h-[60vh] overflow-y-scroll' id='ss' onScroll={myFunction}>
              a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />
              a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />
              a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>

      <footer></footer>
    </div>
  )
}
