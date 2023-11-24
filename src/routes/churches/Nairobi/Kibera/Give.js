import React from 'react'
import mpesa from '../../../../assets/mpesa.png'
import paypal from '../../../../assets/paypal.png'

const GiveR = () => {
  return (
    <div className='give' id='giveR'>
      <h1>GIVING</h1>
      <h2>Offerings and tithes</h2>
      <div className='pays'>
        <div>
         <h5>Safaricom Mpesa Paybill</h5>
          <img className='pay-img' src={mpesa} alt="pay"/>
           <h4>Paybill: 247247</h4>
           <h4>Account No: 0726652265</h4>
        </div>
          <div>
           <h5>Online giving through Paypal</h5>
            <img className='pay-img' src={paypal} alt="pay"/>
             <h4>45022</h4>
         </div>
          
      </div>
    </div>
  )
}

export default GiveR
