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
    <>
      <Link to={`/product/${item.id}`}>
    <img src={`../${item.itemInfo.itemImg[0]}`}
    className='details__img'
    alt='laptops' />
    <div className='product__text'>
        <h3>{item.itemInfo.name}</h3>
        <h5>{item.itemInfo.description1}</h5>
        <span className='d-flex align-items-center justify-content-between gap-5'>
        <h4>${item.itemInfo.newItemPrice}</h4>
        <strike>{item.itemInfo.oldItemPrice}</strike>
        </span>
        <button onClick={addToCart} className='product-btn d-block mx-auto mt-3'>add to cart</button>
        </div>
        </Link>
   </>





   
  )
}

export default RelatedProduct