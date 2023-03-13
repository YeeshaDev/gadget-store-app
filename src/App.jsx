import { useState } from 'react'
import Home from './Pages/Home'
import { Route,Routes } from 'react-router-dom'
import SearchPage from './Pages/SearchPage';
import ProductDetails from './Components/ViewItems/ProductDetails';
import CartItem from './Components/ViewItems/CartItem';
//import Img from './assets/product01.png'
import './App.css'
import Shop from './Components/Shop/Shop';
import Header from './Components/Header/Header';
import FavItem from './Components/ViewItems/FavItem';
import Footer from './Components/Footer/Footer';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';

function App({item}) {
  const [search,setSearch] = useState('');
  //const [tab,setTab] = useState('')

  const handleSearch =(e) => {
    setSearch(e.target.value)
  }

  console.log(item)
  return (
    <Routes>
 <Route path='/' element={<Login/>}>
   </Route> 
   <Route path='/signup' element={<Signup/>}>
   </Route> 
  <Route path='/home' element={<Home/>}>
   </Route>
   <Route path='/search/:query' element={<><Header/><SearchPage/></>}>
   </Route>
   <Route path='/favourites' element={<><Header/><FavItem/> </>}>
   </Route>
   <Route path='/cart' element={<CartItem/>}>
   </Route> 
   <Route path='/checkout' element={<Checkout/>}>
   </Route> 
   <Route path='/product/:productName' element={<><Header/> <ProductDetails item={item}/> <Footer/> </>}>
   </Route> 
   <Route path='/shop/:category' element={<><Header/><Shop/></>}>
   </Route>
   
  
    </Routes>
    
  )
}

export default App
