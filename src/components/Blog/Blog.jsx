import React from 'react'
import './Blog.css'
import { HiThumbUp, HiEye } from "react-icons/hi"
import data from '../../utils/blog.json'
import { motion } from 'framer-motion'

const Blog = () => {
  return (
    <section className='b-wrap' id='blog'>
      <motion.div className="flex flex-column flex-center inner-width padding b-container"
        initial={{x:'-5rem', opacity:0}}
        whileInView={{x:'0', opacity:1}}
            transition={{
                duration: 2,
                type: 'spring'
            }}
      >
        <div className="flex flex-column flex-center">
            <div className="pink-text">Our Blog</div>
            <div className="primary-text">What's New?</div>
        </div>
        <div className="blog">
            {
                data.map((card, i) => (
                    <motion.a href='#' className="blog-item flex flex-column flex-center" key={i}
                        initial={{scale:0.7, opacity:0}}
                        whileInView={{scale:1, opacity:1}}
                            transition={{
                                duration: 0.5,
                                ease: 'linear'
                            }}
                    >
                        <div className="image-blog">
                            <img src={card.image} alt={card.title} />
                            <div className="details flex flex-row-space-between">
                            <div className="views flex flex-center"><span><HiEye/></span><span>{card.views}</span></div>
                                <div className="likes flex flex-center"><span><HiThumbUp/></span><span>{card.likes}</span></div>
                            </div>
                        </div>
                        <div className="flex flex-column flex-center">
                            <div className="primary-text">{card.title}</div>
                            <div className="desc secondary-text">{card.desc}</div>
                        </div>
                    </motion.a>
                ))
            }
        </div>
        <div className="flex flex-end inner-width"><a href="#" className="btn secondary">Read more</a></div>
      </motion.div>
    </section>
  )
}

export default Blog
