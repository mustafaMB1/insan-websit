import React, {useEffect} from 'react'
import './Address.css'
import astronaut_witch_02 from '../../images/astronaut_witch_02.png'
import cost_icon from '../../images/cost_icon.svg'
import security_icon from '../../images/security_icon.svg'
import service_icon from '../../images/service_icon.svg'
import star_plan from '../../images/star_plan.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Address = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='Address' id='Address'>
      <div className="blur address-blur"></div>
      <div className="address-image" data-aos="fade-up">
        <img src={astronaut_witch_02} alt="" />
      </div>
      <div className="address-content" data-aos="fade-up">
        <div className="header">
            <h1>INSAN Contract Address</h1>
            <span>1 Billion (INSAN) Total And Max Supply</span>
        </div>
        <span>0x4C8d41c52C9B60e8a2be40bB6a21cb5Fe4d059Be</span>
        <div className="address-box">
            <div className="box">
                <img src={cost_icon} alt="" />
               <div className="box-text">
               <h1>Killer $USD, IUSD Start Price</h1>
                <span>$2.7</span>
               </div>
            </div>
            {/* ======== */}
            <div className="box">
                <img src={security_icon} alt="" />
                <div className="box-text">
                <h1>Guaranteed Security</h1>
                <span>Data Security To Protect Your Coin</span>
                </div>
            </div>
            {/* =========== */}
            <div className="box">
                <img src={service_icon} alt="" />
                <div className="box-text">
                <h1>24/7 Service</h1>
                <span>We Are Ready To Service You Anytime</span>
                </div>
            </div>
        </div>
        <img src={star_plan} alt="" />
      </div>
    </div>
  )
}

export default Address
