import React from 'react'
import './Companies.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { sliderSettings } from '../../utils/common'
import data from '../../utils/slider.json'
import { motion } from 'framer-motion'

const Companies = () => {
  return (
    <section className='c-wrap' id='companies'>
      <motion.div className="padding inner-width flex c-container"
        initial={{x:'5rem', opacity:0}}
        whileInView={{x:'0', opacity:1}}
            transition={{
                duration: 2,
                type: 'spring'
            }}
      >
        <Swiper {...sliderSettings}>
        {
                data.map((card, i) => (
                    <SwiperSlide key={i}>
                        <div className="comp-card flex flex-column flex-start">
                            <img src={card.image} alt="" />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
      </motion.div>
    </section>
  )
}

export default Companies
