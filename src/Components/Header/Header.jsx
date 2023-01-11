import React from 'react';
import {FaHeart,FaShoppingCart,FaEquals, FaTimes} from 'react-icons/fa'
import './Header.css'

function Header() {
  return (
    <>
        <header className='top-header'>
			{/* the logo */}
         <div className='logo col-md-3'>
			<h1 className=' relative text-center text-white'>GADGETS</h1>
			<div className='circle'></div>
		 </div>
		 {/* The search element */}
		 <div className="col-md-6">
		<div className="header-search">
		<form>
		<select className="input-select">
		<option value="0">All Categories</option>
		<option value="1">Category 01</option>
		<option value="1">Category 02</option>
		</select>
		<input className="input" placeholder="Search here" />
		<button className="search-btn">Search</button>
		</form>
		</div>
		</div>
		{/* The icons(wishlist,cart and menu) */}
		<div className="header-icons col-md-3 clearfix d-flex  justify-content-center">
		<div className='flex position-relative'>
			<span className='icon position-relative z-1'><FaHeart/></span>
			<p className='qty position-absolute '>0</p>
			</div>
			<div className='position-relative'>
			<span className='icon'><FaShoppingCart/></span>
			<p className='qty position-absolute'>0</p>
			</div>
			<div className='d-lg-none'>
			<span className='icon'><FaEquals/></span>
		</div>
		</div>
		</header>
    </>
	
  )
}

export default Header