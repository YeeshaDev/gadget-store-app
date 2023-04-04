import React from 'react';
import {useSelector} from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/cartSlice';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import './style.css'


function cartItem() {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItem = useSelector((state) => state.cart.cartItem)
  const {totalAmount,totalQuantity} = useSelector((state) => state.cart)

  
  /*const DeleteItem = () => {
dispatch(cartActions.removeFromCart({
  id:cartItem.id,
  img:cartItem.img,
  name:cartItem.name,
  price:cartItem.price
}))
  }*/
const clear = () => {
dispatch(cartActions.clearCart())
}


  
  return (
    <div className='cart'>
      <div className="video-container">
        <video className='cart__video' 
        autoPlay={true} loop muted controls=''
        preload='auto'
        >
          <source src='./assets/video/smartphone.mp4' type='video/mp4' />
          </video>
          <div className='video-overlay'></div>
          <h3>Your Cart Items</h3>
      </div>
      
      {cartItem.length === 0 ? (<h1 className='text-center mt-5'>NO PRODUCT FOUND</h1>) : (
        <div className='form__group'>
      <div className="cart-content">
        <table className='table bordered '>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody >
   {cartItem.map((item,index) => {
          return (
            <tr key={index} className='tr'>
              
              <td>
              <Link to={`/product/${item.id}`}>
              <img src={`../${item.img}`}
               alt="" className='cart-img'/>
               </Link>
              </td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td ><span onClick={() => dispatch(cartActions.removeFromCart(item.id))}><FaTrash /></span></td>
              
            </tr>
          )
        })}
        </tbody>
        </table>
        <button className='product-btn' onClick={clear}>Clear All</button>
        </div>
        
        <div className='checkout__cart'>
         <h4>TotalQty:<span>{totalQuantity}</span></h4>
         <h4>Subtotal:<span>${totalAmount}</span></h4>
         <hr/>
         <h4 className='total'>Total cost:<span>${totalAmount}</span></h4>
         <button className="place__order" onClick={() => navigate('/checkout')}>
          Check Out
         </button>
         <button className="place__order" onClick={() => navigate('/')}>
          Continue Shopping
         </button>
         </div>
        </div>
      
      
      
      )}
      
    </div>
  )
}

export default cartItem