import React from 'react'
import './Pricing.css'
import { motion } from 'framer-motion'

const Pricing = () => {
  return (
    <section className='p-wrap' id='pricing'>
        <motion.div className="flex flex-column flex-center inner-width padding p-container"
          initial={{y:'5rem', opacity:0}}
          whileInView={{y:'0', opacity:1}}
          transition={{
              duration: 2,
              type: 'spring'
          }}
        >
          <div className="flex flex-column flex-center">
            <div className="pink-text">Pricing</div>
            <div className="primary-text">Choose Your Plan</div>
          </div>
          <div className="flex flex-row-space-between cards inner-width">
            <div className="card flex flex-column flex-center standart">
              <div className="blur-card"></div>
              <div className="title-card primary-text">Standart</div>
              <div className="price-container flex flex-column flex-center"><div className="price flex flex-center"><span>$</span><span>25</span></div>
              <div className="month secondary-text">for month</div>
              </div>
              <ul>
                <li>15 Users</li>
                <li>Regular Updates</li>
                <li>15 GB Cloud Storage</li>
                <li>Interface Customization</li>
                <li>eCommerce Integration</li>
                <li>24/7 Support</li>
              </ul>
              <button className="btn secondary">Choose Plan</button>
            </div>
            <div className="card flex flex-column flex-center business">
              <div className="blur-card"></div>
              <div className="title-card primary-text">Business</div>
              <div className="price-container flex flex-column flex-center"><div className="price flex flex-center"><span>$</span><span>50</span></div>
              <div className="month secondary-text">for month</div>
              </div>
              <ul>
                <li>15 Users</li>
                <li>Regular Updates</li>
                <li>15 GB Cloud Storage</li>
                <li>Interface Customization</li>
                <li>eCommerce Integration</li>
                <li>24/7 Support</li>
              </ul>
              <button className="btn primary">Choose Plan</button>
            </div>
            <div className="card flex flex-column flex-center premium">
              <div className="blur-card"></div>
              <div className="title-card primary-text">Premium</div>
              <div className="price-container flex flex-column flex-center"><div className="price flex flex-center"><span>$</span><span>75</span></div>
              <div className="month secondary-text">for month</div>
              </div>
              <ul>
                <li>15 Users</li>
                <li>Regular Updates</li>
                <li>15 GB Cloud Storage</li>
                <li>Interface Customization</li>
                <li>eCommerce Integration</li>
                <li>24/7 Support</li>
              </ul>
              <button className="btn secondary">Choose Plan</button>
            </div>
          </div>
        </motion.div>
    </section>
  )
}

export default Pricing
