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
import ProtectedRoutes from './Utils/ProtectedRoutes';
import { useEffect } from 'react';
import data from './Components/data/product.json'
import { product } from './data';
import Products from './Components/AllProducts/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useParams,useLocation } from 'react-router-dom';
import { useRef } from 'react';

function App({item}) {
  const ref = useRef()
 let location = useLocation()
  //const [data,setData] = useState([]);
  

useEffect(() => {
  AOS.init();
},[])
  return (
    <div >
      {location.pathname !== '/login' && location.pathname !== '/signup' && <Header/> }
      
    <Routes>
  <Route exact path='/' element={<ProtectedRoutes>
  <Home/></ProtectedRoutes>
  }>
   </Route>
   <Route  path='/login' element={<Login/>}>
   </Route> 
   <Route path='/signup' element={<Signup/>}>
   </Route> 
   <Route path='/search/:query' element={<SearchPage/>}>
   </Route>
   <Route path='/shop' element={<Products/>}>
   </Route> 
   <Route path='/favourites' element={<FavItem/>}>
   </Route>
   <Route path='/cart' element={<CartItem/>}>
   </Route> 
   <Route path='/checkout' element={<Checkout/>}>
   </Route> 
   <Route path='/product/:productName' element={ <ProductDetails item={item}/>}>
   </Route> 
   <Route path='/shop/:category' element={<Shop/>}>
   </Route>
   
  
    </Routes>
    {location.pathname !== '/login' && location.pathname !== '/signup' && <Footer/> }
    </div>
    
  )
}

export default App
