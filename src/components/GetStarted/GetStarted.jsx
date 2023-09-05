import React from 'react'
import './GetStarted.css'
import { motion } from 'framer-motion'

const GetStarted = () => {
  return (
    <section className='g-wrap' id='get-started'>
      <motion.div className="flex flex-column flex-center inner-width padding g-container"
        initial={{x:'5rem', opacity:0}}
        whileInView={{ x:'0', opacity: 1 }}
        transition={{
            duration: 2,
            type: 'ease-in'
        }}
      >
        <span className='primary-text'>Get Started with Logisoft</span>
        <span className='secondary-text'>Find your perfect application. <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, beatae.</span>
        <button className="btn primary">Get Started</button>
      </motion.div>
    </section>
  )
}

export default GetStarted
