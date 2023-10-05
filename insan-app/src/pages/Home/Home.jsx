import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Address from '../../components/Address/Address'
import Transaction from '../../components/Transaction/Transaction'
import Start from '../../components/Start/Start'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
            <Navbar/>
            <Hero/>
            <About/>
            <Address/>
            <Transaction/>
            <Start/>
            <Footer/>
     </div>
  )
}

export default Home
