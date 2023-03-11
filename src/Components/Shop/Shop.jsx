import React from 'react';
import { useParams,Link } from 'react-router-dom';
import items from '../../data';
import './Shop.css'

function Shop() {
    const {category} = useParams();
    const productView = 
    items.filter((product) => product.collection == category);
    //const{name,price,img} = productView
         
  return (
    <div className='pb-3'>
      <h1 className='p-3'>Products available for {category}</h1>
    <div className='shop-content'>
        {/*<h1>{price}</h1>
        <p>{name}</p>*/}
       {productView.map((item)=> {
            return (
              <div key={item.id} className='shop-items'>
              <Link to={`/product/${item.name}`} >
                <figure className='store-img'>
                    <img src={`../photos/${item.img}`} alt='image'/>
                </figure>
                <p className='text-uppercase'>{item.collection}</p>
                <h1>{item.name}</h1>
        
                <h1>{item.price}</h1>
                </Link>
            </div>
            )
        })}
    </div>
    </div>
  )
}

export default Shop