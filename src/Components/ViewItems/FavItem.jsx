import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

function FavItem() {
    const favItem = useSelector((state) => state.cart.favItem)
  return (
    <div className='mt-4 pb-5'>
        {!favItem.length ==0 &&(<h1 className='mb-4 px-3'>You have {(favItem.length)} in your wishList</h1>)}
      {favItem.length == 0 ? ( <div>
      <h1 className='text-center'>Start shoping to create a wishlist</h1>
      <Link>
      <button className="product-btn d-block m-auto my-3">Shop here</button>
      </Link>
      </div>
      ) : (
      <div className="fav-content">
        {favItem.map((item,index) => {
          console.log(item.category)
          return (
            <div key={index} className='fav-items'>
              <Link to={`/product/${item.name}`} >
              <div className='store-img'>
              <img src={`../photos/${item.img}`}
               alt="" className='fav-img'/>
              </div>
              <p className='text-uppercase'>{item.category}</p>
              <h3>{item.name}</h3>
              <h3>{item.price}</h3>
              
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