import React,{useState} from 'react'
import items from '../../data';
import {IoHeartOutline,IoHeart} from 'react-icons/io5';
import {FaEye,FaExchangeAlt,FaShoppingCart,FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import './New.css';
import ProductList from '../UI/ProductList';
import ProductCard from '../UI/ProductCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {toast} from 'react-toastify'
import {useDispatch} from 'react-redux';
import { product } from '../../data';


function New({item,sliderRef}) {
  //const [sliderRef, setSliderRef] = useState(null)
const dispatch = useDispatch();
//console.log(items)



 const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    //slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 0,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
           slidesToShow: 3,
          }
        },
        
        {
          breakpoint: 768,
          settings: {
           slidesToShow: 2,
          }
          },
          {
            breakpoint: 500,
            settings: {
             slidesToShow: 1,
            }
         }
        
      ]
  };
 
  /*const addToCart = () => {
    dispatch(AddItem({
      id:item.id,
      name: item.name,
      price: item.price,
      img: item.img
    })
    
    )
   // console.log(items.id)
    toast.success('Added Succesfully')
    
  }*/
  return (
    
    <div className='new-items' id='new'>
   <div className='new-heading  align-items-center' id='new'>
  <h1 >NEW PRODUCTS</h1>
  <ul className='d-flex'>
    <li>Laptops</li>
    <li>SmartPhones</li>
    <li>Cameras</li>
    <li>TVs</li>
    <li>watch</li>
  </ul>
    </div>
    
    <ProductList  />

  
</div>

  )
}

export default New