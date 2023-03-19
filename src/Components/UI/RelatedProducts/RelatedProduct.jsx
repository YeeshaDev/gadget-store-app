import React,{useEffect,useRef,useState} from 'react';
//import items from '../../../data';
import { toast } from 'react-toastify';
import { cartActions } from '../../../redux/cartSlice';
import { useDispatch } from 'react-redux';
//import { IoHeartOutline, IoHeart } from 'react-icons/io5';
//import { FaEye, FaExchangeAlt, FaShoppingCart, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Link,useParams } from 'react-router-dom';
import './style.css'


function RelatedProduct({ item, category }) {

  const dispatch = useDispatch();

  const ref = useRef()

  
  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      img: item.img,
      /// description:description,
    })

    )
    // console.log(items.id)
    toast.success('Added Succesfully')

  }
  /*const addToFav = () => {
    dispatch(AddToWishList({
      id:item.id,
      name: item.name,
      price: item.price,
      img: item.img
    })
    
    )
   // console.log(items.id)
    toast.success('Product Added Successfully')
    
  }*/

  /*useEffect(() => {
    window.scrollTo(0, 0)
  }, [item])*/

  /*useEffect(() => {
    ref.current.scrollIntoView()
  },[])*/

  

  return (
    <div>
    <Link to={`/product/${item.name}`}>
      <div  className='related-items text-center'>
      <div className="store-img">
          <img src={`../photos/${item.img}`} alt="" />
        </div>
        <p>{category}</p>
        <h3>{item.name}</h3>
        <h3>{item.price}</h3>
        <button onClick={addToCart} className='product-btn d-block m-auto'>add to cart</button>
        
      </div>
      </Link>
      
    </div>
  )
}

export default RelatedProduct