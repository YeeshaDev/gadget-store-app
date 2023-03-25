import React,{useState} from 'react';
import { useParams,Link } from 'react-router-dom';
import items from '../../data';
import { product } from '../../data';
import './Search.css'

function Search() {
    const {query} = useParams()
    const [products,setProducts] = useState(product)
    
    const searchItems =products.filter((item =>item.itemInfo.name.toLowerCase().includes(query.toLowerCase()) || item.itemInfo.category.toLowerCase().includes(query.toLowerCase())))
   /* return (
        <>
        <h1>search</h1>
        </>
    )*/
//console.log()
   /*const filteredProducts = () =>{
    const query =products.filter((item =>item.category === name))
setProducts(Array(query))
        items.filter((item) => {
            if(item.name.toLowerCase().includes(search) ||
            item.category.toLowerCase().includes(search)
            ){
          return item;
            }


        })
        console.log(filteredProducts)
          const searchTerm = e.target.value
		const searchProducts = products.filter(item => item.category.
			toLowerCase().includes(searchTerm.toLowerCase()))
   setProducts(searchProducts)
	}*/
    
  return (
    <div>
      {searchItems.length === 0 ? (
        <>
        <h1 className='text-center mt-4'>Item Not Available</h1>
        <p className='text-center'>Go to shop to see all available items</p>
        <Link to='/shop'>
        <button className="product-btn d-block m-auto my-3"> Shop</button>
        </Link>
        </>
      ) : (
<h1 className='p-2'>Results for {query}</h1>
      )}
      
    
    <div className='grid__wrapper'>
      
        {searchItems.map((item) => {
        const {itemInfo,id} =  item
      return (
        <div key={id} className='related__container'>
          <Link to={`/product/${id}`} >
            <figure>
                <img src={`../${itemInfo.itemImg[0]}`} 
                className='details__img'
                alt='image'/>
            </figure>
            <div className='product__text'>
        <p className='text-uppercase mt-2'>{itemInfo.category}</p>
        <h3>{itemInfo.name}</h3>
        <h5>{itemInfo.description1}</h5>
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

export default Search