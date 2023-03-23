import React, { useState } from 'react';
//import items from '../../../data';
//import { Link } from 'react-router-dom';
//import New from '../../New/new';
import { FaEye, FaExchangeAlt, FaShoppingCart, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
//import ProductCard from '../ProductCard';
import "slick-carousel/slick/slick-theme.css";
import { product } from '../../../data';
import RelatedProduct from './RelatedProduct';
import './style.css'


function RecommendedList({ item }) {
    //const relatedProducts = items.filter((item) => item.category === category);
    return (
        <div className='related__wrapper'>
            {/*<Slider ref={setSliderRef} {...settings} >*/}
            {item.map((item, index) => {

                return (
                    <div key={item.id}  className='related__container'>

                        <RelatedProduct item={item} />

                    </div>
                )
            })}

            {/*</Slider> 
       <div className='controls'>
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
    </div>*/}



        </div>
    )
}

export default RecommendedList;

