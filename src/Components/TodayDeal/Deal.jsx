import React,{useState} from 'react';
import items from '../../data';
import Slider from "react-slick";
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Deal.css'
import { weeklyFeatures } from '../../data';
import { Link } from 'react-router-dom';

function Deal() {
  const [sliderRef, setSliderRef] = useState(null)
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
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
  }
  return (
    <div className='deal-content px-3' id='today'>
     <h1 style={{fontSize:'1.5rem'}}>Top Selling</h1>
     <div className='top-selling-content '>
     
     <Slider ref={setSliderRef} {...settings}>
 {weeklyFeatures.map((item) => {
  const {id,itemInfo} = item;
  return (
    
    <div key={id} className='related__container'>
      <Link to={`/product/${id}`}>
     <figure>
      <img src={`./${itemInfo.itemImg[0]}`} 
      className='details__img m-auto'
      alt=''/>
     </figure>
     <div className='product__text'>
     <p className='text-uppercase mt-2'>{itemInfo.category}</p>
        <h3>{itemInfo.name}</h3>
        <span className='d-flex align-items-center justify-content-between gap-5'>
        <h4>${itemInfo.newItemPrice}</h4>
        <strike>{itemInfo.oldItemPrice}</strike>
        </span>
     </div>
     </Link>
    </div>
  )
 })}
 </Slider>
 <div className='controls mt-2'>
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
    </div>
  )
}

export default Deal
