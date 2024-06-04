import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../components/context/StoreContext'


const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery information</p>

        <div className="multi-fields">
          <input type="text" name="" id="" placeholder='First Name' />
          <input type="text" name="" id="" placeholder='Last Name' />
        </div>

        <input type="email" name="" id="" placeholder='Email Address' />
        <input type="text" name="" id="" placeholder='Street' />

        <div className="multi-fields">
          <input type="text" name="" id="" placeholder='City' />
          <input type="text" name="" id="" placeholder='State' />
        </div>

        <div className="multi-fields">
          <input type="text" name="" id="" placeholder='Zip Code' />
          <input type="text" name="" id="" placeholder='Country' />
        </div>

        <input type="text" name="" id="" placeholder='Phone' />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div className=''>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>

            <button>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder