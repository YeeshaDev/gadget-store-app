import React from 'react';
import {toast} from 'react-toastify';
import { cartActions } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import {IoHeartOutline,IoHeart} from 'react-icons/io5';
import {FaEye,FaExchangeAlt,FaShoppingCart,FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import { Link } from 'react-router-dom';

function ProductCard({item}) {
    const dispatch = useDispatch();
    
    const addToCart = () => {
        dispatch(cartActions.addItem({
          id:item.id,
          name: item.name,
          price: item.price,
          img: item.img,
          description:item.description
        })
        
        )
       // console.log(items.id)
        toast.success('Added Succesfully')
        
      }

      const addToFav = () => {
        dispatch(cartActions.addToWishList({
          id:item.id,
          name: item.name,
          price: item.price,
          img: item.img,
          category:item.category
        })
        
        )
       // console.log(items.id)
        toast.success('Product Added Successfully')
        
      }
  return (
    <div className='gadgets'>
      
        <div className="gadget-content" key={item.id}>
          <div className='gadget-body'>
          <span className='heart-icon'><IoHeartOutline/></span>
        <div className="gadget-img">
	<img src={`./photos/${item.img}` || `../photos/${item.img}` } alt=""/>
							</div>

              <div className="gadget-name">
                <p>{item.collection}</p>
                <h3>{item.name}</h3>
                <h2>{item.price}</h2>
              <hr/>
              <div className='bottom-icons gap-4'>
                <button className='b-icons' onClick={addToFav}>
                  <IoHeartOutline/>
                  <span className='tooltipp'>ADD TO WISHLIST</span>
                  </button>
                  <button className='b-icons'>
                <FaExchangeAlt/>
                <span className='tooltipp'>ADD TO COMPARE</span>
                </button>
              
              <button className='b-icons'>
              <Link to={`/product/${item.name}`}>
                <FaEye/>
                <span className='tooltipp'>QUICK VIEW</span>
                </Link>
                </button>
                
              
              </div>
              </div>
              </div>
              <div className="add-cart" onClick={addToCart}>
    <button className='add-to-cart-btn' >
    <span><FaShoppingCart/></span>
    Add to cart
    </button>
        </div>
              </div>
              
   
    </div>
  )
}

export default ProductCard