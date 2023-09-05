import React, { useState } from 'react'
import './Header.css'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 1050 && !menuOpened){
      return {right: '-100%'}
    }
  }
  return (
    <section className='h-wrap'>
      <div className="h-container flex padding inner-width">
        <div className="logo"><div className="figure"></div><span>Logisoft</span></div>
        <OutsideClickHandler
          onOutsideClick={() => {
          setMenuOpened(false);
        }}>
          <div className="h-menu flex flex-row-space-between" style={getMenuStyles(menuOpened)}>
            <div className="blur-card"></div>
              <div className="flex">
                  <a href="#features">Features</a>
                  <a href="#pricing">Pricing</a>
                  <a href="#blog">Blog</a>
              </div>
              <div className="flex">
                  <a href="#get-started">Get Started</a>
                  <a href='#contact-us' className='btn primary'>
                      Contact Us
                  </a>
              </div>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon flex flex-column flex-end" onClick={() => setMenuOpened(!menuOpened)} >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default Header
