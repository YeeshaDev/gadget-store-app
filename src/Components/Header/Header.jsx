import React from 'react';
import {FaHeart,FaShoppingCart,FaEquals, FaTimes, FaArrowDown, FaCaretDown, FaCaretUp} from 'react-icons/fa';
///import items from '../../data';
import {useSelector} from 'react-redux'
import './Header.css'
import { useState } from 'react';
import {signOut} from 'firebase/auth'
import { auth } from '../../Utils/firebase';
import { toast } from 'react-toastify';
//import { SignOut } from '../../Utils/firebase';
//import { cartActions } from '../../redux/cartSlice';
import { Link,useNavigate } from 'react-router-dom';
import useAuth from '../../Utils/useAuth';

function Header({item}) {
const navigate = useNavigate();
const {totalQuantity,wishListQuantity} = useSelector((state) => state.cart)
const {current} = useAuth();

const[menu,setMenu] = useState(false);
    

 const [products,setProducts]= useState(item);
 const [search,setSearch] = useState('');
 const [toggleProfile,setToggleProfile] = useState(false)
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

const SignOut = () => {
	try {
	  signOut(auth)
	toast.success('You\'ve signed out successfully')
	navigate('/login')
	}
	catch(err){
	  console.log(err)
	  toast.error(err.message)
	}
	}
	
	
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
		{/*<select className="input-select">
		<option value="0">All Categories</option>
		<option value="1">Category 01</option>
		<option value="1">Category 02</option>
  </select>*/}
		
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
			<div className='d-block position-relative'>
			<div className='d-flex gap-1 avatar__container'>
			<img src={current ? current.photoURL : './photos/avatar1.png'} alt='avatar'/>
			<span className='text-white ' onClick={() => setToggleProfile(!toggleProfile)}>
			{toggleProfile ? <FaCaretUp/> : <FaCaretDown/>}</span>
			</div> 
			{toggleProfile && <div className='profile-card'>

				<p>Sign In </p>
				<p onClick={SignOut}>Sign Out </p>
			</div>}
			
			</div>
			<div className={menu ? 'menu active' : 'menu'}>
			<div className='d-lg-none'>
				<ul>
                <li className='active-btn'><Link to='/'  onClick={handleClick}>Home</Link></li>
                <li><a href='#today'  onClick={handleClick}>Today's Deal</a>
                </li>
                <li><a href='#new'  onClick={handleClick}>New Products</a></li>
                <li><a href='#trending'  onClick={handleClick}>Trending</a></li>
				<li><a href='#top'  onClick={handleClick}>Top Products</a></li>
                
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