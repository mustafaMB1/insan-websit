import React from 'react'
import './Footer.css'
import logo from '../../images/insan.jpg'
import linkedin_social from '../../images/linkedin_social.svg'
import facebook_social from '../../images/facebook_social.svg'
import instagram_social from '../../images/instagram_social.svg'
import telegram_social_01 from '../../images/telegram_social_01.svg'
import telegram_social_02 from '../../images/telegram_social_02.svg'
import twitter_social_01 from '../../images/twitter_social_01.svg'
const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
      <div>
        <div>
        <img src={logo} alt="" />
        <h3>INSAN Network</h3>
        </div> 
        <span style={{color:"white", fontSize:'1.5rem'}}>copy by mustafa brjas</span>
      </div>
      <div>
         <ul>
          <li><h3>Insan Job</h3></li>
          <li><a href="">Programmers</a></li>
          <li><a href="">Designers</a></li>
          <li><a href="">Marketers</a></li>
         </ul>
      </div>
      <div>
        <ul>
          <li><h3>Insan Support</h3></li>
          <li><a href="">Insan Contact 1</a></li>
          <li><a href="">Insan Contact 2</a></li>
          <li><a href="">Insan Contact 3</a></li>
        </ul>
      </div>
      <div>
        <h3>Follow Us</h3>
        <div className="social">
          <img src={linkedin_social} alt="" />
          <img src={facebook_social} alt="" />
          <img src={instagram_social} alt="" />
          <img src={telegram_social_01} alt="" />
          <img src={telegram_social_02} alt="" />
          <img src={twitter_social_01} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
