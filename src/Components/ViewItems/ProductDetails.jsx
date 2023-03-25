import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { product } from '../../data';
import { cartActions } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RiStarFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import './style.css'
import { useState, useRef, useEffect } from 'react';
import RecommendedList from '../UI/RelatedProducts/RecommendedList';

function ProductDetails() {
  const { productName } = useParams();
  const navigate = useNavigate();
  
const ref = useRef()
  const dispatch = useDispatch();
  const reviewUser = useRef('');
  const reviewMsg = useRef('')

  const [tab, setTab] = useState('desc');
  const [rating, setRating] = useState(null)
  const productView =
    product.find((product) => product.id == productName);
  const { id, itemInfo } = productView

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: id,
      name: itemInfo.name,
      price: itemInfo.newItemPrice,
      img: itemInfo.itemImg[0],
      description: itemInfo.description,
    })

    )
    // console.log(items.id)
    toast.success('Added Succesfully')

  }

  const relatedProducts = product.filter((item) => item.itemInfo.category == itemInfo.category);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
    const review = {
      author: reviewUserName,
      message: reviewUserMsg,
      rating,
    }
    

    console.log(review)
    toast.success('Thank you for reviewing this product')
  }

  useEffect(() => {
    ref.current.scrollIntoView()
  },[id])
  
  
  return (
    <div ref={ref}>
      
      <div className='product-body pb-2 d-flex align-items-center justify-content-center'>
        <figure className='productDetailsImg'>
          <img src={`../${itemInfo.itemImg[0]}`} 
          className='product-details__img'
          alt="" />
        </figure>
        <div className='product-details'>
        
          <p className='text-uppercase my-2'>{itemInfo.category}</p>
          <h2>{itemInfo.name}</h2>
          <h2>${itemInfo.newItemPrice}</h2>
          <p >{itemInfo.shortDesc}</p>
          <div className='details__btns'>
          <button className='product-btn' onClick={addToCart}>Add to cart</button>
          <Link to='/checkout'>
          <button type='button' 
          className="buy-btn"> Buy Now</button>
          </Link>
          </div>
        </div>
      </div>
      <div>
        <div className=' desc-details px-5 '>
          <div className='d-flex gap-5 '>
            <h3 className={`${tab == 'desc' ? 'active-tab' : ''}`}
              onClick={() => setTab('desc')}>Description</h3>
            <h3 className={`${tab == 'rev' ? 'active-tab' : ''}`}
              onClick={() => setTab('rev')}>Review({itemInfo.reviews.length})</h3>
          </div>
          {tab == 'desc' ? (
            <div className="tab-content">
              <p className='desc'>{itemInfo.description}</p>
            </div>
          ) : (
            <div className='product-review mt-4 '>
              <div className="review-wrapper">
                <ul>
                  {itemInfo.reviews.map((items, index) => (
                    <li key={index} className='mb-3'>
                      <p>Jane Doe</p>
                      <span>{items.rating} (ratings)</span>
                      <p>{items.text}</p>
                    </li>
                  ))}
                </ul>
                <div className="review-form">
                  <h2>Tell us about your experience</h2>
                  <form action='' onSubmit={() => handleSubmit}>
                    <div className="form-group">
                      <input type='text' placeholder='Enter name'
                        ref={reviewUser}
                        required
                      />
                    </div>
                    <div className="form-group d-flex gap-3 gap-lg-5 align-items-center ml-2">
                      <span title='rate' onClick={() => setRating(1)}>1<RiStarFill /></span>
                      <span title='rate' onClick={() => setRating(2)}>2<RiStarFill /></span>
                      <span title='rate' onClick={() => setRating(3)}>3<RiStarFill /></span>
                      <span title='rate' onClick={() => setRating(4)}>4<RiStarFill /></span>
                      <span title='rate' onClick={() => setRating(5)}>5<RiStarFill /></span>
                    </div>
                    <div className="form-group">
                      <textarea rows='4' type='text'
                        placeholder='Review Message'
                        ref={reviewMsg}
                        required
                      />
                    </div>
                    <button type='button' className="product-btn" onClick={handleSubmit}>
                      Submit
                    </button>
                    
                  </form>
                </div>
              </div>
            </div>)}
        </div>
      </div>
      <div className='mt-5 px-5'>
        <h2 className="related-title mb-4">You might also like</h2>
       
        <RecommendedList  item={relatedProducts} />
       

      </div>
    </div>

  )
}

export default ProductDetails