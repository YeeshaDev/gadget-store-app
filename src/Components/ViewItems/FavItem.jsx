import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

function FavItem() {
    const favItem = useSelector((state) => state.cart.favItem)
  return (
    <div className='mt-4 pb-5'>
        {!favItem.length ==0 &&(<h1 className='mb-4 px-3'>You have {(favItem.length)} item(s) in your wishList</h1>)}
      {favItem.length == 0 ? ( <div>
      <h1 className='text-center'>Start shoping to create a wishlist</h1>
      <Link to='/shop'>
      <button className="product-btn d-block m-auto my-3">Shop here</button>
      </Link>
      </div>
      ) : (
      <div className="fav-content">
        <div className="video-container">
        <video className='cart__video' 
        autoPlay={true} loop muted controls=''
        preload='auto'
        >
          <source src='./assets/video/smartphone.mp4' type='video/mp4' />
          </video>
          <div className='overlay'></div>
          <h3>Your Cart Items</h3>
      </div>
        {favItem.map((item,index) => {
          console.log(item.category)
          return (
            <div key={index} className='related__container'>
              <Link to={`/product/${item.name}`} >
              <figure>
              <img src={`../${item.img}`}
               alt="" className='details__img'/>
              </figure>
              <div className='product__text'>
              <p className='text-uppercase mt-2'>{item.category}</p>
        <h3>{item.name}</h3>
        <h5>{item.description}</h5>
        <span className='d-flex align-items-center justify-content-between gap-5'>
        <h4>${item.price}</h4>
        <strike>{item.oldPrice}</strike>
        </span>
        
        </div>
              
              </Link>
            </div>
          )
        })}
      </div>
      )}
    </div>
  )
}

export default FavItem