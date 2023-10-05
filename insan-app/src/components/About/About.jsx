import React, {useEffect} from 'react'
import './About.css'
import star_plan from '../../images/star_plan.svg'
import checklist_vector from '../../images/checklist_vector.svg'
import moon_vector from '../../images/moon_vector.svg'
import saturn_vector from '../../images/saturn_vector.svg'
import star_vector from '../../images/star_vector.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {Link} from 'react-router-dom'
const About = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='About' id='About'>
      <div className="blur about-blur"></div>
      <div className="blur about-blur-2"></div>
      <div className="about-header">
        <h1>INSAN Ico</h1>
        <span>We Provide 3 Insan #INSAN Ico Plans</span>
        <span><img src={star_plan} alt="" /></span>
      </div>
      <div className="about-box" data-aos="fade-up">
        <div className="box">
          <h1>INSAN (01)</h1>
          <div className="points">
            <span><img src={checklist_vector} alt="" /> Start 31-03-2023</span>
            <span><img src={checklist_vector} alt="" /> End 20-08-2023</span>
            <span><img src={checklist_vector} alt="" /> Get % Airdrop</span>
            <span><img src={checklist_vector} alt="" /> Get % Marketing</span>
          </div>
          <div className="price">
            <span>Price :</span>
            <span>0.29 IUSD</span>
            <span>0.78 USD</span>
          </div>
          <Link to="Book">Buy INSAN</Link>
          <div className="image"><img src={saturn_vector} alt="" /></div>
        </div>
        {/* ========= */}
        <div className="box">
          <h1>INSAN (01)</h1>
          <div className="points">
            <span><img src={checklist_vector} alt="" /> Start 31-03-2023</span>
            <span><img src={checklist_vector} alt="" /> End 20-08-2023</span>
            <span><img src={checklist_vector} alt="" /> Get % Airdrop</span>
            <span><img src={checklist_vector} alt="" /> Get % Marketing</span>
          </div>
          <div className="price">
            <span>Price :</span>
            <span>0.29 IUSD</span>
            <span>0.78 USD</span>
          </div>
          <Link to="Book">Buy INSAN</Link>
          <div className="image"><img src={star_vector} alt="" /></div>
        </div>
        {/* ====== */}
        <div className="box">
          <h1>INSAN (01)</h1>
          <div className="points">
            <span><img src={checklist_vector} alt="" /> Start 31-03-2023</span>
            <span><img src={checklist_vector} alt="" /> End 20-08-2023</span>
            <span><img src={checklist_vector} alt="" /> Get % Airdrop</span>
            <span><img src={checklist_vector} alt="" /> Get % Marketing</span>
          </div>
          <div className="price">
            <span>Price :</span>
            <span>0.29 IUSD</span>
            <span>0.78 USD</span>
          </div>
          <Link to="Book">Buy INSAN</Link>
          <div className="image"><img src={moon_vector} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default About
