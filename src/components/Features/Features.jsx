import React from 'react'
import './Features.css'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { HiShieldCheck, HiDatabase } from "react-icons/hi"
import { MdCancel, MdAnalytics, MdPhoneInTalk, MdScreenRotation } from "react-icons/md"

const Features = () => {
  return (
    <section className='f-wrap' id='features'>
      <motion.div className="flex inner-width padding flex-column flex-center features-container"
        initial={{y:'5rem', opacity:0}}
        whileInView={{ y:'0', opacity: 1 }}
        transition={{
            duration: 2,
            type: 'ease-in'
        }}
      >
        <div className="figure-big"></div>
        <div className="figure-small"></div>
        <div className="flex flex-row-space-between inner-width">
            <div className="features-left flex flex-column-center">
                <div className="image-content">
                    <img src="./img/—Pngtree—vector cartoon black computer_4566499.png" alt="" className="image" />
                    <div className="image-container">
                        <img src="./img/image-from-rawpixel-id-7524261-jpeg.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="features-right flex flex-column-center">
                <div className="flex flex-column flex-start">
                    <span className='pink-text'>Newest</span>
                    <span className='primary-text'>Features</span>
                </div>
                <div className="flex flex-column-center">
                    <div className="secondary-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos incidunt repudiandae voluptatem maxime iusto magnam aspernatur minima. Alias, provident aperiam!</div>
                </div>
                <div className="flex flex-column-center">
                    <div className="secondary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A aspernatur quia eius sequi!</div>
                </div>
                <div className="flex flex-column-center">
                    <ul>
                        <li>Instant data analysis</li>
                        <li>Manage company finances</li>
                        <li>Collaborate on large projects</li>
                        <li>Get feedback from your customers</li>
                    </ul>
                    
                </div>
                <div className="flex flex-center">
                    <a href='#' className="btn primary">Try Demo For Free</a>
                </div>
            </div>
        </div>
        <div className="flex flex-row-center stats">
                <div className="flex flex-column flex-center stat">
                    <span>
                        <CountUp start={8800} end={9000} duration={4}/>
                        <span>+</span>
                    </span>
                    <span className='secondary-text'>Premium Products</span>
                </div>
                <div className="flex flex-column flex-center stat">
                    <span>
                        <CountUp start={1950} end={2000} duration={4}/>
                        <span>+</span>
                    </span>
                    <span className='secondary-text'>Happy Customers</span>
                </div>
                <div className="flex flex-column flex-center stat">
                    <span>
                        <CountUp end={20}/>
                        <span>+</span>
                    </span>
                    <span className='secondary-text'>Awards</span>
                </div>
            </div>
            <div className="cards-container flex flex-column flex-center inner-width">
                <div className="flex flex-center">
                    <div className="pink-text">Why Choose Us</div>
                </div>
                <div className="cards flex flex-row-space-between">
                    <div className="card flex flex-column">
                        <div className="blur-card"></div>
                        <div className="flex flex-center card-image"><HiShieldCheck/></div>
                        <div className="text flex flex-column">
                            <div className="primary-text">Safety and Security</div>
                            <div className="secondary-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, ipsa inventore.</div>
                        </div>
                    </div>
                    <div className="card flex flex-column">
                    <div className="blur-card"></div>
                        <div className="flex flex-center card-image"><MdCancel/></div>
                        <div className="text flex flex-column">
                            <div className="primary-text">Prevent unstable prices</div>
                            <div className="secondary-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, ipsa inventore.</div>
                        </div>
                    </div>
                    <div className="card flex flex-column">
                    <div className="blur-card"></div>
                        <div className="flex flex-center card-image"><MdAnalytics/></div>
                        <div className="text flex flex-column">
                            <div className="primary-text">Best price on the market</div>
                            <div className="secondary-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, ipsa inventore.</div>
                        </div>
                    </div>
                </div>
                <div className="cards flex flex-row-space-between">
                <div className="card flex flex-column">
                <div className="blur-card"></div>
                        <div className="flex flex-center card-image"><MdPhoneInTalk/></div>
                        <div className="text flex flex-column">
                            <div className="primary-text">Support 24/7</div>
                            <div className="secondary-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, ipsa inventore.</div>
                        </div>
                    </div>
                    <div className="card flex flex-column">
                    <div className="blur-card"></div>
                        <div className="flex flex-center card-image"><HiDatabase/></div>
                        <div className="text flex flex-column">
                            <div className="primary-text">Collaborate on large projects</div>
                            <div className="secondary-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, ipsa inventore.</div>
                        </div>
                    </div>
                    <div className="card flex flex-column">
                    <div className="blur-card"></div>
                        <div className="flex flex-center card-image"><MdScreenRotation/></div>
                        <div className="text flex flex-column">
                            <div className="primary-text">High perfomance even on slow devices</div>
                            <div className="secondary-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, ipsa inventore.</div>
                        </div>
                    </div>
                </div>
            </div>
      </motion.div>
    </section>
  )
}

export default Features
