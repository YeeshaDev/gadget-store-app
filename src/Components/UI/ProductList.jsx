import React, { useState } from 'react';
import items from '../../data';
//import { Link } from 'react-router-dom';
//import New from '../New/new';
import {  FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ProductCard from './ProductCard';
import "slick-carousel/slick/slick-theme.css";
import { recentlyAdded } from '../../data';
//import RelatedProduct from './RelatedProducts/RelatedProduct';


function ProductList({ category }) {
  const [sliderRef, setSliderRef] = useState(null)
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

 
  return (
    <div id='#new'>
      <Slider ref={setSliderRef} {...settings} >
        {recentlyAdded.map((item, index) => {
   
          return (
            <div key={item.id}>

              <ProductCard item={item} />

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
  )
}

export default ProductList;

