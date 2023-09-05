import React from 'react'
import './Footer.css'
import { MdEmail, MdPhone, MdLocationPin } from "react-icons/md"

const Footer = () => {
  return (
    <section className='f-wrap'>
    <div className="blur-card"></div>
      <div className="flex flex-row-space-between inner-width padding f-container">
        <div className="flex flex-center f-left">
            <div className="logo"><div className="figure"></div><span>Logisoft</span></div>
        </div>
        <div className="flex flex-column f-right">
            <div className="flex flex-column flex-start">
                <div className='primary-text'>Information</div>
                <div className='secondary-text flex flex-center'><MdLocationPin/><span>Lorem Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat</span></div>
                <div className='secondary-text flex flex-center'><MdEmail/><span>logisoftemail@gmail.com</span></div>
                <div className='secondary-text flex flex-center'><MdPhone/><span>021 123 456 78</span></div>
            </div>
            <div className="flex">
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#blog">Blog</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
