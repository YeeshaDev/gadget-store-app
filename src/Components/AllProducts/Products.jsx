import React from 'react';
import { useParams,Link } from 'react-router-dom';
import { product } from '../../data';
import './Products.css'

const Products = () => {
const {category} = useParams();

const cat = product.filter((item) => item.itemInfo.category === category)
    const laptops = product.filter((item) => item.itemInfo.category === 'Computers');
    const phones = product.filter((item) => item.itemInfo.category === 'Cellphones');
    const games = product.filter((item) => item.itemInfo.category === 'Gaming');
    const speaker = product.filter((item) => item.itemInfo.category === 'Speakers');
    const televisions = product.filter((item) => item.itemInfo.category === 'TV');

    const laptopCat = laptops.filter((item) => item.itemInfo.category );

    return (
        <div>
         <div className=' shop__products d-flex align-items-center justify-content-between p-2'>
            <h1>Laptops</h1>
            <Link to='/shop/Computers'>
            <button>See All</button>
            </Link>
            </div> 
            <div className='grid__wrapper'>
                {laptops.slice(0,12).map((item) => {
            return(    
                       <div className='shop__container' key={item.id}>
                       <Link to={`/product/${item.id}`} >
                        <img src={`../${item.itemInfo.itemImg[0]}`} 
                        className='laptop__img'
                        alt='laptops' />
                        <div className='product__text'>
                            <h3>{item.itemInfo.name}</h3>
                            <h5>{item.itemInfo.description1}</h5>
                            <span className='d-flex align-items-center justify-content-between gap-5'>
                            <h4>${item.itemInfo.newItemPrice}</h4>
                            <strike>{item.itemInfo.oldItemPrice}</strike>
                            </span>
                            </div>
                            </Link>
                       </div>
                       
                    )
                })}
                </div> 

                <div className=' shop__products d-flex align-items-center justify-content-between p-2'>
            <h1>Smart Phones</h1>
            <Link to='/shop/Cellphones'>
            <button>See All</button>
            </Link>
            </div> 
            <div className='grid__wrapper'>
                {phones.slice(0,12).map((item) => {
            return(
                       <div className='shop__container' key={item.id}>
                        <Link to={`/product/${item.id}`} >
                        <img src={`../${item.itemInfo.itemImg[0]}`} 
                        className='laptop__img'
                        alt='laptops' />
                        <div className='product__text'>
                            <h3>{item.itemInfo.name}</h3>
                            <h5>{item.itemInfo.description1}</h5>
                            <span className='d-flex align-items-center justify-content-between gap-5'>
                            <h4>${item.itemInfo.newItemPrice}</h4>
                            <strike>{item.itemInfo.oldItemPrice}</strike>
                            </span>
                            </div>
                            </Link>
                       </div>
                    )
                })}
                </div> 

                <div className=' shop__products d-flex align-items-center justify-content-between p-2'>
            <h1>Games</h1>
            <Link to='/shop/Gaming'>
            <button>See All</button>
            </Link>
            </div> 
            <div className='grid__wrapper'>
                {games.slice(0,12).map((item) => {
            return(
                       <div className='shop__container' key={item.id}>
                        <Link to={`/product/${item.id}`} >
                        <img src={`../${item.itemInfo.itemImg[0]}`}
                        className='laptop__img'
                        alt='laptops' />
                        <div className='product__text'>
                            <h3>{item.itemInfo.name}</h3>
                            <h5>{item.itemInfo.description1}</h5>
                            <span className='d-flex align-items-center justify-content-between gap-5'>
                            <h4>${item.itemInfo.newItemPrice}</h4>
                            <strike>{item.itemInfo.oldItemPrice}</strike>
                            </span>
                            </div>
                            </Link>
                       </div>
                    )
                })}
                </div>
                <div className=' shop__products d-flex align-items-center justify-content-between p-2'>
            <h1>Speakers</h1>
            <Link to='/shop/Speakers'>
            <button>See All</button>
            </Link>
            </div> 
            <div className='grid__wrapper'>
                {speaker.slice(0,12).map((item) => {
            return(
                       <div className='shop__container' key={item.id}>
                        <Link to={`/product/${item.id}`} >
                        <img src={`../${item.itemInfo.itemImg[0]}`}  
                        className='laptop__img'
                        alt='laptops' />
                        <div className='product__text'>
                            <h3>{item.itemInfo.name}</h3>
                            <h5>{item.itemInfo.description1}</h5>
                            <span className='d-flex align-items-center justify-content-between gap-5'>
                            <h4>${item.itemInfo.newItemPrice}</h4>
                            <strike>{item.itemInfo.oldItemPrice}</strike>
                            </span>
                            </div>
                            </Link>
                       </div>
                    )
                })}
                </div> 
    

                <div className=' shop__products d-flex align-items-center justify-content-between p-2'>
            <h1>Smart Tvs</h1>
            <Link to='/shop/TV'>
            <button>See All</button>
            </Link>
            </div> 
            <div className='grid__wrapper'>
                {televisions.slice(0,12).map((item) => {
            return(
                       <div className='shop__container' key={item.id}>
                        <img src={`../${item.itemInfo.itemImg[0]}`} 
                        className='laptop__img'
                        alt='laptops' />
                        <div className='product__text'>
                            <h3>{item.itemInfo.name}</h3>
                            <h5>{item.itemInfo.description1}</h5>
                            <span className='d-flex align-items-center justify-content-between gap-5'>
                            <h4>${item.itemInfo.newItemPrice}</h4>
                            <strike>{item.itemInfo.oldItemPrice}</strike>
                            </span>
                            </div>
                       </div>
                    )
                })}
                </div> 
    
        </div>
    )
}

export default Products
