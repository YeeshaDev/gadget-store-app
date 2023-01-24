import React,{useState} from 'react'
import {items} from '../../data';
import {IoHeartOutline,IoHeart} from 'react-icons/io5'
import './New.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function New() {
  const [sliderRef, setSliderRef] = useState(null)
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 6,
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
  return (
    <div className='new-items'>
   <div className='new-heading  align-items-center'>
  <h1 >NEW PRODUCTS</h1>
  <ul className='d-flex'>
    <li>Laptops</li>
    <li>SmartPhones</li>
    <li>Cameras</li>
    <li>Phones</li>
    <li>watch</li>
  </ul>
    </div> 
    <div className='gadgets'>
    <Slider {...settings} className='slider'>
    {items.map((products)=>{
      const {id,name,collection,img,price,
        category,discount,badge} = products;
      return (
        <>
        <div className="gadget-content" key={id}>
          <span className='heart-icon'><IoHeartOutline/></span>
        <div className="gadget-img">
								<img src={`./photos/${img}`} alt=""/>
							</div>

              <div className="gadget-name">
                <p>{category}</p>
                <h3>{name}</h3>
                <h2>{price}</h2>
              <hr/>
              
              </div>
              
              </div>
              <div className="add-cart">
    <h3>Add to cart</h3>
        </div>
        
        </>
        
      )
    })}
    </Slider>
    </div>
</div>
  )
}

export default New