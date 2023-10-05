import React, {useEffect} from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'
import download from '../../images/download.png'
import insta from '../../images/insta.png'
import facebook from '../../images/facebook.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Signup = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='Signup'>
      <div className="overlay"></div>
      <div className="sign-l" data-aos="fade-up">
         <h1>Al-Salam INSAN</h1>
         <span>If You Already Have An Account Please Sign In</span>
         <button><Link to='/' style={{zIndex:2 , color:'white'}}>Back To Home</Link></button>
      </div>
      <div className="sign-r" data-aos="fade-right">
        <h1>Create INSAN Account</h1>
        <div className="social">
          <img src={insta} alt="" />
          <img src={facebook} alt="" />
          <img src={download} alt="" />
        </div>
        <span>Al-Salam INSAN Create A Free #INSAN Account</span>
        <form action="">
          <input type="text" placeholder='Your Phone Number'/>
          <input type="email" placeholder='Your E-mail'/>
          <input type="password" placeholder='Your Password'/>
          <input type="text" placeholder='Your Wallet'/>
          <input type="submit" value={"sign up insan"}/>
        </form>
      </div>
    </div>
  )
}

export default Signup
