import React from 'react'
import paypal from '../../../../assets/paypal.png'

const GiveR = () => {
  return (
    <div className='give'>
      <h1>GIVING</h1>
      <p> Hello why wo'nt you se me.</p>
        <h1>Offerings and tithes</h1>
         <h5>Safaricom Mpesa Paybill</h5>
            <img className='pay-img' src={paypal} alt="pay"/>
               <div>
                <h5>Support Our Church Projects</h5>
              </div>
    </div>
  )
}

export default GiveR
