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
    <li>Phones</li>
    <li>watch</li>
  </ul>
    </div> 
     {/*<div className='gadgets'>
    
   <Slider ref={setSliderRef} {...settings} >
    {items.map((products)=>{
      console.log(products.id)
    return (
        <div className="gadget-content" key={item.id}>
          <div className='gadget-body'>
          <span className='heart-icon'><IoHeartOutline/></span>
        <div className="gadget-img">
								
							</div>

              <div className="gadget-name">
                <p>{item.collection}</p>
                <h3>{item.name}</h3>
                <h2>{item.price}</h2>
              <hr/>
              <div className='bottom-icons gap-4'>
                <button className='b-icons'>
                  <IoHeartOutline/>
                  <span className='tooltipp'>ADD TO WISHLIST</span>
                  </button>
                  <button className='b-icons'>
                <FaExchangeAlt/>
                <span className='tooltipp'>ADD TO COMPARE</span>
                </button>
              
              <button className='b-icons'>
                <FaEye/>
                <span className='tooltipp'>QUICK VIEW</span>
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
              
    } )
    })}
  </Slider>*/}
    
    <ProductList  />
    
</div>

  )
}

export default New