import React, {useEffect} from 'react'
import './Start.css'
import astronaut_rocket_02 from '../../images/astronaut_rocket_02.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Start = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='Start' id='Start'>
      <div className="blur start-blur"></div>
      <div className="start-content" data-aos="fade-up">
        <h1>Let's start Now</h1>
        <span>Let's start Now And Soon We will Lanch Insan Verse</span>
        <span>Academy</span>
        <div className="btn">
            <button>Sign INSAN Now</button>
        </div>
      </div>
      <div className="start-image" data-aos="fade-up">
       <img src={astronaut_rocket_02} alt="" />
      </div>
    </div>
  )
}

export default Start
