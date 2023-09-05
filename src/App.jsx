import { useState } from 'react';
import './App.css';
import Blog from './components/Blog/Blog';
import Companies from './components/Companies/Companies';
import ContactUs from './components/ContactUs/ContactUs';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Pricing from './components/Pricing/Pricing';
import { MdOutlineArrowDropUp } from 'react-icons/md'

function App() {

  const [toUp, setToUp] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100){
      setToUp(true)
    } 
    else if (scrolled <= 100){
      setToUp(false)
    }
  };
  const getToUpBtn = (toUp) => {
    if(!toUp){
      return {bottom: '-8%'}
    }
  }
  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="App">
      <div className="blur"></div>
      <div className="blur"></div>
      <div className="blur"></div>
      <Header/>
      <Hero/>
      <Companies/>
      <Features/>
      <Pricing/>
      <Blog/>
      <GetStarted/>
      <ContactUs/>
      <Footer/>
      <div className="to-up-btn flex flex-center" style={getToUpBtn(toUp)} onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}>
        <MdOutlineArrowDropUp/>
      </div>
    </div>
  );
}

export default App;
