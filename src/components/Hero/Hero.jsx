import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className='hero-wrap'>
    <div className="padding inner-width flex flex-row-center hero-container">
      <motion.div className="hero-left flex flex-column-center"
        initial={{y:'2rem', x:'-10rem', opacity:0}}
        whileInView={{y:'0', x:'0', opacity:1}}
        transition={{
            duration: 2,
            type: 'ease-in'
        }}
      >
        <div className="hero-title">
            <h1>Discover <br /> Most Effective <br /> Software</h1>
        </div>
        <div className="hero-desc flex flex-column flex-start">
            <span className='secondary-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
            <span className='secondary-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus veniam rem.</span>
        </div>
        <div className="flex btns">
            <a href="#features" className="btn secondary">Learn more</a>
            <a href="#get-started" className="btn primary">Get Started</a>
        </div>
        </motion.div>
        <div className="hero-right">
            <div className="flex flex-row-center">
                <motion.div className="image-content"
                initial={{y:'2rem', x:'5rem', opacity:0}}
                whileInView={{y:'0', x:'0', opacity:1}}
                    transition={{
                        duration: 2,
                        type: 'spring'
                    }}
                    >
                    <img src="./img/image-from-rawpixel-id-3237511-original.png" alt="" className='image'/>
                    <div className="image-container">
                        <img src="./img/image-from-rawpixel-id-7524261-jpeg.jpg" alt="" />
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Hero
