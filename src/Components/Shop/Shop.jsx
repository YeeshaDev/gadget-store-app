import React from 'react';
import { useParams,Link } from 'react-router-dom';
//import items from '../../data';
import { product } from '../../data';
import './Shop.css'

function Shop() {
    const {category} = useParams();
  
    const productView = 
    product.filter((product) => product.itemInfo.category === category);
    //const{name,price,img} = productView
         
  return (
    <div className='pb-3'>
      <h1 className='p-3'>Products available for {category}</h1>
    <div className='grid__wrapper'>
        {/*<h1>{price}</h1>
        <p>{name}</p>*/}
       {productView.map((item)=> {
        const {id,itemInfo} = item
            return (
              <div key={id} className='related__container'>
              <Link to={`/product/${id}`} >
                <figure className='store-img'>
                    <img src={`../${itemInfo.itemImg[0]}`} 
                    className='details__img'
                    alt='image'/>
                </figure>
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
    </div>
  )
}

export default Shop