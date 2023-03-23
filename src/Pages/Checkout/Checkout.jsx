import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../Components/orderModal/Modal';
import './Checkout.css'


function Checkout() {
  const navigate = useNavigate();
  const {totalQuantity,totalAmount} = useSelector((state) => state.cart);
  const  [input,setInput] = useState({
    name:'demo',
    email:'demo@gmail.com',
    number:'34567996332',
    postalCode:'12324',
    address:'123 demo strreet,lagos',
    city:'Lagos',

  });
  const [error,setError] = useState(false)
  const [active,setActive] = useState(false)

  const handleChange = (e) => {
const {name,value} = e.target;
setInput({...input,[name]:value})

  }

  const handleSubmit =(e) => {
      e.preventDefault()
      if(input.name === ''){
setError(true)
alert('input name')
      }else {
        setError(false);
        setActive(true)
      }
  }

  

  return (
    <>
    {!active ? (
      <div className='checkout'>
        <img src='./photos/smart-watch.png' alt='bg'/>
        <div className='form__group'>
        <div className='form__component'>
        <h3 className='mb-4 fw-bold'>Billing Information</h3>
        <form className='checkout__form' onSubmit={handleSubmit}>
          
             <input type='text' 
            name='name'
            value={input.name}
            placeholder='Enter your Name' 
            onChange={handleChange}
            className={error ? 'input' :'error'}
            required
            />
            <input type='email' 
            name='email'
            value={input.email}
            placeholder='Enter your Email'
            onChange={handleChange} 
            required
            />
            <input type='number'
            name='number'
            value={input.number}
            placeholder='Enter your Number'
            onChange={handleChange} 
            required
            />
            <input type='text' 
            name='address'
            value={input.address}
            placeholder='Street Address'
            onChange={handleChange}
            required 
            />
            <input type='text'
            name='postalCode'
            value={input.postalCode} 
            placeholder=' Postal Code'
            onChange={handleChange} 
            />
            <input type='text'
            name='city'
            value={input.city} 
            placeholder='City' 
            onChange={handleChange}
            />
            
        </form>
        </div>
        
        <div className='checkout__cart'>
         <h4>TotalQty:<span>${totalQuantity}</span></h4>
         <h4>Subtotal:<span>${totalAmount}</span></h4>
         <h4>Shipping:<br/>
         Free Shipping
          <span>$0</span></h4>
         <h4>Free Shipping</h4>
         <hr/>
         <h4  className='total'>Total cost:<span>${totalQuantity}</span></h4>
         
         <button 
         type='submit'
         onClick={handleSubmit}
         className="place__order">
          Place an order
         </button>
         
         </div>
         
        </div>
    </div>
    ) : (
<Modal input={input} total={totalAmount} totalQuantity={totalQuantity} />
    )}
    
    
    </>
  )
}

export default Checkout