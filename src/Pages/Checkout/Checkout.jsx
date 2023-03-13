import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'


function Checkout() {
  const navigate = useNavigate();
  const {totalQuantity,totalAmount} = useSelector((state) => state.cart)

  return (
    <div className='checkout'>
      
        <img src='./photos/smart-watch.png' alt='bg'/>
        <div className='form__group'>
        <div className='form__component'>
        <h3 className='mb-4 fw-bold'>Billing Information</h3>
        <form className='checkout__form'>
          
            <input type='text' 
            placeholder='Enter your Name' />
            <input type='email' 
            placeholder='Enter your Email' />
            <input type='number' 
            placeholder='Enter your Number' />
            <input type='text' 
            placeholder='Street Address' />
            <input type='text' 
            placeholder=' Postal Code' />
            <input type='text' 
            placeholder='City' />
            
        </form>
        </div>
        
        <div className='checkout__cart'>
         <h4>TotalQty:<span>${totalQuantity}</span></h4>
         <h4>Subtotal:<span>${totalAmount}</span></h4>
         <h4>Shipping:<br/>
         Free Shipping
          <span>$0</span></h4>
         <h4>Free Shipping</h4>
         <hr/>
         <h4  className='total'>Total cost:<span>${totalQuantity}</span></h4>
         <button className="place__order" onClick={() => navigate('/login')}>
          Place an order
         </button>
         </div>
        </div>
    </div>
  )
}

export default Checkout