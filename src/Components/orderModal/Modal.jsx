import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';
import './Modal.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const Modal = ({input,total,totalQuantity}) => {
    const cartItem = useSelector((state) => state.cart.cartItem)
 const ref = useRef();
 const navigate = useNavigate();
    useEffect(() => {
        ref.current.scrollIntoView()
      },[])
    return (
        <div className='order__info ' 
        data-aos='fade-in' ref={ref}>
            <div>
                <h1 className='text-center my-4'>Thank You for ordering!</h1>
              <div className='modal__form px-3'>
              <h2>Billing Details</h2>
                <p>{input.name}</p>
                <p>{input.email}</p>
                <p>{input.number}</p>
                <p>{input.address}</p>
                <p>{input.postalCode}</p>
                <p>{input.city}</p>
              </div>

              <div className='modal__cartInfo px-3 mt-3'>
                <h2>Shopping Details</h2>
                <div className=' modal__shopping d-block'>
               {cartItem.map((item) => {
                return (
                    <div key={item.id} className='shopping__details d-flex align-items-center justify-content-between py-2 px-5'>
                        <h3>{item.quantity}x</h3>
                        <img src={item.img} alt='cart img'
                        style={{width:'50px',height:'50px',objectFit:'contain'}}
                        />
                        <p>{item.name}</p>

                    </div>
                )
               })}
                </div>
                <div className='modal__total px-4 mt-4'>
                <h5>Total order(s) <span>{totalQuantity}</span></h5>
                    <h5>SubTotal <span>${total}</span></h5> 
                    <h5>Delivery Fee <span>Free</span></h5>
                    <hr/>
                    <h3>TOTAL <span>${total}</span></h3>
                </div>

              </div>
              <div className='modal__btn pb-3'>
              <button onClick={() => navigate(-1)}><FaArrowLeft/>Back</button>
              <button className='continue'>Continue</button>
              </div>
            </div>
            
        </div>
    )
}

export default Modal
