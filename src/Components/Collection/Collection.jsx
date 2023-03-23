import React,{useState} from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import items from '../../data';
import { product } from '../../data';
import './Collection.css'
//import Image from '../../assets/product01.png'

function Collection() {
	const[filter,setFilter] = useState(product);
     // const [categories,setCategories] = useState([])
	 

	const uniqueObjects = filter.reduce((item, cat) => {
		Object.assign(item, {[cat.itemInfo.category]: cat});
		return item;
	  }, {});
	  
	  const unique = Object.values(uniqueObjects);
console.log(unique)
	//const collection = [...new Set(product.map(cat => cat.itemInfo.category))]
	//console.log(collection)
	//const item = product.filter((data) => data.itemInfo.category === collection)
	//console.log(item)
  return (
    <section className=''>
        <nav>
        <ul className="main-nav d-none d-lg-flex align-items-center justify-content-center">
						<li className="active"><a href="#" className='list d-inline-flex m-2 text-decoration-none'>Home</a></li>
						<li><a href="#today"  className='list d-inline-flex m-2 text-decoration-none'>Today's Deals</a></li>
						<li><a href="#new"  className='list d-inline-flex m-2 text-decoration-none'>New Products</a></li>
						<li><a href="#trending"  className='list d-inline-flex m-2 text-decoration-none'>Trending Products</a></li>
						<li><a href="#top"  className='list d-inline-flex m-2 text-decoration-none'>Top Selling</a></li>
						
						
					</ul>
        </nav>
<div className='container'>
<div className='row'>

    {unique.map((items,index) => {
        const {id,itemInfo} = items;
        return (
            
             <div className="flex"  key={id}>
				<Link to={`/shop/${itemInfo.category}`}>
						<div className="shop">
							<div className="shop-img">
								<img src={itemInfo.itemImg[0]} alt=""/>
							</div>
							<div className="shop-body">
								<h3>{itemInfo.category} collection</h3>
								<button href="#" className="cta-btn">Shop now <span className="arrow">
                                    <FaArrowCircleRight/></span></button>
							</div>
						</div>
						</Link>
					</div>
            
        )
    })}
    </div>
</div>
    </section>
  )
}

export default Collection