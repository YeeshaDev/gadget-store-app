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
          /*{
            breakpoint: 500,
            settings: {
             slidesToShow: 1,
            }
         }*/
        
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
    
    <div key={id} className='top-selling d-block align-items-center mt-3'>
      <Link to={`/product/${id}`}>
     <figure className='deal-img'>
      <img src={`./${itemInfo.itemImg[0]}`} 
      alt=''/>
     </figure>
     <div className='top-selling-body'>
      <p>{itemInfo.category}</p>
      <h3>{itemInfo.name}</h3>
      <h2 style={{fontSize:'1.2rem'}}>${itemInfo.newItemPrice}</h2>
     </div>
     </Link>
    </div>
  )
 })}
 </Slider>
 <div className='controls'>
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
