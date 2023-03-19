import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import items from '../../data';
import { cartActions } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { RiStarFill } from 'react-icons/ri';
import ProductList from '../UI/ProductList';
import './style.css'
import { useState, useRef, useEffect } from 'react';
import RelatedProduct from '../UI/RelatedProducts/RelatedProduct';
import RecommendedList from '../UI/RelatedProducts/RecommendedList';

function ProductDetails() {
  const { productName } = useParams();

const ref = useRef()
  const dispatch = useDispatch();
  const reviewUser = useRef('');
  const reviewMsg = useRef('')

  const [tab, setTab] = useState('desc');
  const [rating, setRating] = useState(null)
  const productView =
    items.find((product) => product.name == productName);
  const { id, name, category, price,
    img, shortDesc, description, reviews } = productView

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: id,
      name: name,
      price: price,
      img: img,
      description: description,
    })

    )
    // console.log(items.id)
    toast.success('Added Succesfully')

  }

  const relatedProducts = items.filter((item) => item.category == category);

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
        <div className="shop-img">
          <img src={`../photos/${img}`} alt="" />
        </div>
        <div className='product-details'>
        
          <p className='text-uppercase my-2'>{category}</p>
          <h2>{name}</h2>
          <h3>{price}</h3>
          <p>{shortDesc}</p>
          <button className='product-btn' onClick={addToCart}>Add to cart</button>
        </div>
      </div>
      <div className=''>
        <div className=' desc-details px-5 '>
          <div className='d-flex gap-5 mt-3'>
            <h3 className={`${tab == 'desc' ? 'active-tab' : ''}`}
              onClick={() => setTab('desc')}>Description</h3>
            <h3 className={`${tab == 'rev' ? 'active-tab' : ''}`}
              onClick={() => setTab('rev')}>Review({reviews.length})</h3>
          </div>
          {tab == 'desc' ? (
            <div className="tab-content">
              <p className='desc'>{description}</p>
            </div>
          ) : (
            <div className='product-review mt-4 '>
              <div className="review-wrapper">
                <ul>
                  {reviews.map((items, index) => (
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
                    <div className="form-group d-flex gap-5 align-items-center ml-2">
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
                    <button type='button' className="product-btn">
                      Buy Now
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