import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContaxt'

const PlaceOrder = () => {
  const { getTotalCardAmount}=useContext(StoreContext)
  return (
    <div className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text"placeholder='First Name' />
          <input type="text"placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text"placeholder='Street' />
        <div className="multi-fields">
          <input type="text"placeholder='City' />
          <input type="text"placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text"placeholder='Zip code' />
          <input type="text"placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />

      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total </h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCardAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCardAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <b>${getTotalCardAmount()===0?0:getTotalCardAmount()+2}</b>
          </div>
     
     
        <button>PROCEED TO PAYMENT</button>
      </div>
        </div>
    </div>
  )
}

export default PlaceOrder