import React from 'react';
import {FaHeart,FaShoppingCart,FaEquals, FaTimes} from 'react-icons/fa';
///import items from '../../data';
import {useSelector} from 'react-redux'
import './Header.css'
import { useState } from 'react';
import { cartActions } from '../../redux/cartSlice';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Header({item}) {
const navigate = useNavigate();
const {totalQuantity,wishListQuantity} = useSelector((state) => state.cart)

const[menu,setMenu] = useState(false);
    

 const [products,setProducts]= useState(item);
 const [search,setSearch] = useState('');
  //const [tab,setTab] = useState('')

  const handleSearch =(e) => {
    setSearch(e.target.value)
  }

//const [query,setQuery] =useState('')
   /* const handleSearch = (e) =>{
		const searchTerm = e.target.value;
		const searchProducts = products.filter(item => item.category === 'laptop')
   setProducts(searchProducts)
   navigate(`/search/${searchTerm}`)
	}
*/
/*const filteredProducts =() => {
	products.filter((item) => {
		if(item.name.toLowerCase().includes(query) ||
		item.category.toLowerCase().includes(query)){
return item;
		}
})
}
*/

	
	const navigateToCart = () => {
		navigate('/cart')
		
	}

	const navigateToWishlist = () => {
		navigate('/favourites')
	}

	const handleClick = () => {
        setMenu(prev => !prev)
    }

  return (
    <>
        <header className='top-header'>
			{/* the logo */}
			<Link to='/'>
         <div className='logo col-md-3'>
			<h1 className=' relative text-center text-white'>GADGETS</h1>
			<div className='circle'></div>
			
		 </div>
		 </Link>
		 {/* The search element */}
		 <div className="col-md-6">
		<div className="header-search">
		<form>
		<select className="input-select">
		<option value="0">All Categories</option>
		<option value="1">Category 01</option>
		<option value="1">Category 02</option>
		</select>
		
		<input className="input" 
		type='search'
		placeholder="Search here"
		value={search}
       onChange={handleSearch}
		/>
		<Link to={`/search/${search}`}>
		<button className="search-btn">Search</button>
		</Link>
		</form>
		</div>
		</div>
		{/* The icons(wishlist,cart and menu) */}
		<div className="header-icons col-md-3 clearfix d-flex  justify-content-center">
		<div className='flex position-relative'>
			<span className='icon position-relative z-1' onClick={navigateToWishlist}><FaHeart/></span>
			<p className='qty position-absolute '>{wishListQuantity}</p>
			</div>
			<div className='position-relative'>
				
			<span className='icon' onClick={navigateToCart}><FaShoppingCart/></span>
			<p className='qty position-absolute'>{totalQuantity }</p>
			</div>
			<div className={menu ? 'menu active' : 'menu'}>
			<div className='d-lg-none'>
				<ul>
                <li className='active-btn'><Link to='/'  onClick={handleClick}>Home</Link></li>
                <li><a href='#'  onClick={handleClick}>About</a>
                </li>
                <li><a href='#'  onClick={handleClick}>Projects</a></li>
                <li><a href='#'  onClick={handleClick}>Contact</a></li>
                
            </ul></div>
			<button className={menu ? 'menu-btn active' : 'menu-btn'} onClick={handleClick}>
                    {menu ? <FaTimes className='close'/> : <FaEquals/>}
                </button>
		</div>
		</div>
		</header>
    </>
	
  )
}

export default Header