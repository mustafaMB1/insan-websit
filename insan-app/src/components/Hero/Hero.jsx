import React , {useEffect} from 'react'
import './Hero.css'
import logo from '../../images/insan.jpg'
import {AiFillCaretRight} from 'react-icons/ai'
import insancard from   '../../images/Insan_card_header.png'
import startplan from '../../images/star_plan.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {motion} from 'framer-motion'
const Hero = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='Hero' id='Hero'> 
      <div className="hero-l">
      <div className="blur hero-blur"></div>
        <div className="text" data-aos="fade-up">
          <span><span>Insan  </span>#INSAN Network</span>
          <span>Welcome To INSAN</span>
          <span>#Insan_Verse_Academy</span>
          <span><img src={logo} alt="" /></span>
          <span>#Insan_Verse_Freelance</span>
          <span>
          With Us, You Will Always Be Profitable Because We
          Take Insan Financial Technology To Build Real Projects
          In The Fields Of Education, Work, Investment,
          Agriculture And Industry
          </span>
          <span><img src={startplan} alt="" /></span>
        </div>
        <motion.div animate={{scale : 1}} initial={{scale:0}} transition={{delay:1,type:'tween'}} className="buttons">
         <button>Register For Ico & Airdrop</button>
         <span className='insanplay'><AiFillCaretRight/></span>
         <span>Our Youtube</span>
        </motion.div>
      </div>
      <div className="hero-r" data-aos="fade-up">
        <div className="image">
        <img src={insancard} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
