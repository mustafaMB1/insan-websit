import React, { useState } from 'react'
import './Book.css'
import {Link} from 'react-router-dom'
const Book = () => {
    const [cardNumber , setCardNumber] = useState(["#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#"]);
    const [cardHolder , setCardHolder] = useState("Full Name")
    const [cardMonth , setCardMonth] = useState("MM")
    const [cardYear , setCardYear] = useState("YY")
    const [cvvContent , setCvvContent] = useState([])
    const handelChange = (e) => {
        
          if (e.target.value === ""){
             setCardNumber("################")
          }else{
            setCardNumber(e.target.value)
          }     }
   
          const handelChangeHolder = (e) => {
            if (e.target.value === ""){
                setCardHolder("Full Name")
             }else{
               setCardHolder(e.target.value)
             } 
          }
          const ChangeMonth = (e) => {
            setCardMonth(e.target.value)
          }
          const ChangeYear = (e) => {
            setCardYear(e.target.value)
          }
          const toCardTow = () =>{
            document.getElementById("card2").style.zIndex=1
            document.getElementById("card1").style.visibility='hidden'
          }
          const toCardOwn = () => {
            document.getElementById("card2").style.zIndex=-1
            document.getElementById("card1").style.visibility='visible'
          }
          
          const CvvChange = (e) => {
               
                setCvvContent(e.target.value)
              
          }
  return (
    <div className='Book'>
        <div className="overlay"></div>
       <form action="">
          <label htmlFor="cardNumber">card number</label>
          <input id='cardNumber' type="password" maxLength={16} onClick={toCardOwn} onChange={handelChange} autofocus/>
          <label htmlFor="cardHolder">card holder</label>
          <input id='cardHolder' type="text" onChange={handelChangeHolder} onClick={toCardOwn}/>
          <label htmlFor="">Expiration Data</label>
          <div className="date">
            <select id="cardMonth" onClick={toCardOwn} onChange={ChangeMonth} data-ref="cardDate"><option value="" disabled="disabled"  selected="selected">Month</option> <option value="01">
                    01
                </option><option value="02">
                    02
                </option><option value="03">
                    03
                </option><option value="04">
                    04
                </option><option value="05">
                    05
                </option><option value="06">
                    06
                </option><option value="07">
                    07
                </option><option value="08">
                    08
                </option><option value="09">
                    09
                </option><option value="10">
                    10
                </option><option value="11">
                    11
                </option><option value="12">
                    12
                </option></select>
            {/* ========= */}
            <select id="cardYear" data-ref="cardDate" onClick={toCardOwn} onChange={ChangeYear}>
                <option value="" disabled="disabled" selected="selected">Year</option>
                 <option value="2023">
                    2023
                </option><option value="2024">
                    2024
                </option><option value="2025">
                    2025
                </option><option value="2026">
                    2026
                </option><option value="2027">
                    2027
                </option><option value="2028">
                    2028
                </option><option value="2029">
                    2029
                </option><option value="2030">
                    2030
                </option><option value="2031">
                    2031
                </option><option value="2032">
                    2032
                </option><option value="2033">
                    2033
                </option><option value="2034">
                    2034
                </option></select> 
            {/* ========== */}
            <div>
                <label htmlFor="cvv">cvv</label>
                <input id='cvv' type="text" onClick={toCardTow} maxLength={16}  onChange={CvvChange} />
            </div>
          </div>
          <div className="button">
          <input  type="submit" value={"buy now"}/>
          <Link to="/">Home</Link>
          </div>
          <div className="card-1" id='card1'>
          <label for="cardNumber">
            <span><div>{cardNumber[0]}</div></span>
            <span><div>{cardNumber[1]}</div></span>
            <span><div>{cardNumber[2]}</div></span>
            <span><div style={{marginRight:'1rem'}}>{cardNumber[3]}</div></span>
            <span><div>{cardNumber[4]}</div></span><span>
                <div>{cardNumber[5]}</div></span>
                <span><div>{cardNumber[6]}</div></span>
                <span><div  style={{marginRight:'1rem'}}>{cardNumber[7]}</div></span>
                <span><div>{cardNumber[8]}</div></span>
                <span><div>{cardNumber[9]}</div></span>
                <span><div>{cardNumber[10]}</div></span>
                <span><div  style={{marginRight:'1rem'}}>{cardNumber[11]}</div></span>
                <span><div>{cardNumber[12]}</div></span>
                <span><div>{cardNumber[13]}</div></span>
                <span><div>{cardNumber[14]}</div></span>
                <span><div>{cardNumber[15]}</div></span>
                </label>
            <div>
                <label for="cardHolder">
                    <div >Card Holder</div>
                    <div>{cardHolder}</div>
                 </label>
                 <div>
                    <label for="cardMonth">Expires</label>
                    <div>
                      <label for="cardMonth"><span>{cardMonth}</span></label>/
                      <label for="cardYear"><span>{cardYear}</span></label> 
                    </div>
                </div>
            </div>
          </div>
          <div className="card-2" id='card2'>
          <label for="cardNumber">
            <span><div>{cvvContent[0]}</div></span>
            <span><div>{cvvContent[1]}</div></span>
            <span><div>{cvvContent[2]}</div></span>
            <span><div style={{marginRight:'1rem'}}>{cvvContent[3]}</div></span>
            <span><div>{cvvContent[4]}</div></span><span>
                <div>{cvvContent[5]}</div></span>
                <span><div>{cvvContent[6]}</div></span>
                <span><div  style={{marginRight:'1rem'}}>{cvvContent[7]}</div></span>
                <span><div>{cvvContent[8]}</div></span>
                <span><div>{cvvContent[9]}</div></span>
                <span><div>{cvvContent[10]}</div></span>
                <span><div  style={{marginRight:'1rem'}}>{cvvContent[11]}</div></span>
                <span><div>{cvvContent[12]}</div></span>
                <span><div>{cvvContent[13]}</div></span>
                <span><div>{cvvContent[14]}</div></span>
                <span><div>{cvvContent[15]}</div></span>
                </label>
            </div>
       </form>
    </div>
  )
}


export default Book
