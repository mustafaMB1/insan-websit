import React, {useEffect} from 'react'
import './Transaction.css'
import star_plan from '../../images/star_plan.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Transaction = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='Transaction' id='Transaction'>
      <div className="blur transaction-blur"></div>
      <div className="transaction-header">
        <h1>INSAN Transaction</h1>
        <span>We will Provide Proof Of INSAN Transactions From Users</span>
        <span><img src={star_plan} alt="" /></span>
      </div>
      <div className="transaction-cards" data-aos="fade-up">
      <div className="content-card">
        <h3>Investment</h3>
        <div className="card">
          <div className="card-header">
           <h4>INSAN Name</h4>
           <h4>Total</h4>
          </div>
          <div className="card-content">
            <div>
              <div className="option">
                <span>Mohammed Bin AbdAllah</span>
                <span>0x4520FCd9C2Db07...</span>
              </div>
              <div className="option">
                <span>Islam Bin ElHassan</span>
                <span>0x4520FCd9C2Db07...</span>
              </div>
              <div className="option">
                <span>Osama Bin Matouk</span>
                <span>0x4520FCd9C2Db07...</span>
              </div>
              <div className="option">
                <span>Ahmed Bin Ali</span>
                <span>0x4520FCd9C2Db07..</span>
              </div>
              <div className="option">
                <span>Aya Bint Mohammed</span>
                <span>0x4520FCd9C2Db07..</span>
              </div>
              <div className="option">
                <span>Amira Bint Mahmoued</span>
                <span>0x4520FCd9C2Db07...</span>
              </div>
            </div>
            <div>
              <div className="option">
                <span>+1000 IUSD</span>
                <span>20-08-2022</span>
              </div>
              <div className="option">
                <span>+1000 IUSD</span>
                <span>20-08-2022</span>
              </div>
              <div className="option">
                <span>+1000 IUSD</span>
                <span>20-08-2022</span>
              </div>
              <div className="option">
                <span>+1000 IUSD</span>
                <span>20-08-2022</span>
              </div>
              <div className="option">
                <span>+1000 IUSD</span>
                <span>20-08-2022</span>
              </div>
              <div className="option">
                <span>+1000 IUSD</span>
                <span>20-08-2022</span>
              </div>
            </div>
          </div>
          <div className="btn"><button>See More</button></div>
        </div>
      </div>

      <div className="content-card">
        <h3>Investment</h3>
        <div className="card">
          <div className="card-header">
           <h4>INSAN Name</h4>
           <h4>Total</h4>
          </div>
          <div className="card-content">
            <div>
              <div className="option">
                <span>Mohammed Bin AbdAllah</span>
                <span>0x4520FCd9C2Db07...</span>
              </div>
              <div className="option">
                <span>Islam Bin ElHassan</span>
                <span>0x4520FCd9C2Db07...</span>
              </div>
              <div className="option">
                <span>Osama Bin Matouk</span>
                <span>0x4520FCd9C2Db07...</span>
              </div>
              <div className="option">
                <span>Ahmed Bin Ali</span>
                <span>0x4520FCd9C2Db07..</span>
              </div>
              <div className="option">
                <span>Aya Bint Mohammed</span>
                <span>0x4520FCd9C2Db07..</span>
              </div>
              <div className="option">
                <span>Amira Bint Mahmoued</span>
                <span>0x4520FCd9C2Db07...</span>
              </div>
            </div>
            <div>
              <div className="option">
                <span>+1000 IUSD</span>
                <span>20-08-2022</span>
              </div>
              <div className="option">
                <span>+1000 IUSD</span>
                <span>20-08-2022</span>
              </div>
              <div className="option">
                <span>+1000 IUSD</span>
                <span>20-08-2022</span>
              </div>
              <div className="option">
                <span>+1000 IUSD</span>
                <span>20-08-2022</span>
              </div>
              <div className="option">
                <span>+1000 IUSD</span>
                <span>20-08-2022</span>
              </div>
              <div className="option">
                <span>+1000 IUSD</span>
                <span>20-08-2022</span>
              </div>
            </div>
          </div>
          <div className="btn"><button>See More</button></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Transaction
