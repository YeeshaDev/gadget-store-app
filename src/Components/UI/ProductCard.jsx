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
          name: item.itemInfo.name,
          price: item.itemInfo.newItemPrice,
          oldPrice: item.itemInfo.oldItemPrice,
          img: item.itemInfo.itemImg[0],
          description:item.itemInfo.description
        })
        
        )
       // console.log(items.id)
        toast.success('Added Succesfully')
        
      }

      const addToFav = () => {
        dispatch(cartActions.addToWishList({
          id:item.id,
          name: item.itemInfo.name,
          price: item.itemInfo.newItemPrice,
          oldPrice: item.itemInfo.oldItemPrice,
          img: item.itemInfo.itemImg[0],
          description:item.itemInfo.description1,
          category:item.itemInfo.category
        })
        
        )
       // console.log(items.id)
        toast.success('Product Added Successfully')
        
      }
  return (
    <div className='gadgets'>
      
        <div className="gadget-content">
          <div className='gadget-body'>
          
        <div className="gadget-img">
	<img src={`./${item.itemInfo.itemImg[0]}` || `../${item.itemInfo.itemImg}` } 
  className='details__img'
  alt=""/>
							</div>

              <div className="product__text gadget-name">
                <p>{item.itemInfo.category}</p>
                <h3>{item.itemInfo.name}</h3>
                <span className='d-flex align-items-center justify-content-between gap-5'>
                <h2>${item.itemInfo.newItemPrice}</h2>
                <strike>{item.itemInfo.oldItemPrice}</strike>
                </span>
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
              <Link to={`/product/${item.id}`}>
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