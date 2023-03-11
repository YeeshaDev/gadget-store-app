import React,{useState} from 'react';
import { useParams,Link } from 'react-router-dom';
import items from '../../data';
import './Search.css'

function Search() {
    const {query} = useParams()
    const [products,setProducts] = useState(items)
    
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
      <h1 className='p-2'>Results for {query}</h1>
    
    <div className='search-content'>
      
        {products.filter((item =>item.name.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase()))).map((item) => {
        
      return (
        <div key={item.id} className='search-items'>
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

export default Search