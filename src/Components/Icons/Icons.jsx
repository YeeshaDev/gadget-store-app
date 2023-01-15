import React from 'react';
import Marquee from 'react-fast-marquee';
import './Icons.css'


function Icons() {
    return (
        <div className='icons-content'>
            <div className="marquee-icons">
             <div className="image">
         <img src='./photos/shipping-truck.svg' alt='' className='icons'/>
         </div>
         <div>
            <h3>Free Delivery</h3>
            <p>Free shipping on all order</p>
            </div>
            
         </div>
         
         <div className="marquee-icons">
<div className="image">
         <img src='./photos/chat-support.svg' alt='' className='icons'/>
         </div>
         <div>
            <h3>Online Support 24/7</h3>
            <p>Support online 24 hours a day</p>
            </div>
            
         </div>
         <div className="marquee-icons">
<div className="image">
         <img src='./photos/returns.svg' alt='' className='icons return'/>
         </div>
         <div>
            <h3>Money Return</h3>
            <p>Guaranteed under 7 days</p>
            </div>
            
         </div>
         <div className="marquee-icons">
            <div className="image">
         <img src='./photos/discount.svg' alt='' className='icons'/>
         </div>
         <div>
            <h3>Member Discount</h3>
            <p>On every order under $100</p>
            </div>
            
         </div>
        
        </div>
    )
}

export default Icons
