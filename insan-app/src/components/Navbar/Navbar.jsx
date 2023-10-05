import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../images/insan.jpg'
import {AiFillHome} from 'react-icons/ai'
import {BsBookFill} from 'react-icons/bs'
import {FaCube} from 'react-icons/fa'
import {AiFillSound} from 'react-icons/ai'
import {TiThList} from 'react-icons/ti'
import {GrFormClose} from 'react-icons/gr'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const [active , setActive] = useState('list');
    const open = () =>{
        setActive('listActive list')
    }
    const close = () =>{
        setActive("list")
    }
  return (
            <div className='Navbar'> 
      <div className="logo">
        <img src={logo} alt="" />
        <h1>INSAN Network</h1>
      </div>
      <div className="menu">
        <ul className={active}>
            <a href="#Hero"><li><AiFillHome/><span>insan</span><span>home</span></li></a>
            <a href="#About"><li><BsBookFill/><span>INSAN</span><span>Ico</span></li></a>
            <a href="#Address"><li><FaCube/><span>INSAN</span><span>Contract</span></li></a>
            <a href="#Transaction"><li><AiFillSound/><span>INSAN</span><span>Transaction</span></li></a>
            <a href="#Start"><li><AiFillSound/><span>INSAN</span><span>Contact</span></li></a>
            <GrFormClose onClick={close} className='closeList'/>
        </ul>
      </div>
      {/* <div className="signup"> */}
        <Link className='signup' to="/Signup">Signup</Link>
      {/* </div> */}
      <div className="berger" onClick={open}>
        <TiThList/>
      </div>
    </div>
  )
}

export default Navbar
