import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { store } from '../../data';
import './Collection.css'
//import Image from '../../assets/product01.png'

function Collection() {
  return (
    <section className=''>
        <nav>
        <ul className="main-nav d-none d-lg-flex align-items-center justify-content-center">
						<li className="active"><a href="#" className='list d-inline-flex m-2 text-decoration-none'>Home</a></li>
						<li><a href="#"  className='list d-inline-flex m-2 text-decoration-none'>Today's Deals</a></li>
						<li><a href="#"  className='list d-inline-flex m-2 text-decoration-none'>New Products</a></li>
						<li><a href="#"  className='list d-inline-flex m-2 text-decoration-none'>Trending Products</a></li>
						<li><a href="#"  className='list d-inline-flex m-2 text-decoration-none'>Top Selling</a></li>
						
						
					</ul>
        </nav>
<div className='container'>
<div className='row'>
    {store.map((items) => {
        const {id,image,collection} = items;
        return (
            
             <div className="flex"  key={id}>
						<div className="shop">
							<div className="shop-img">
								<img src={`./photos/${image}`} alt=""/>
							</div>
							<div className="shop-body">
								<h3>{collection}</h3>
								<a href="#" className="cta-btn">Shop now <span className="arrow">
                                    <FaArrowCircleRight/></span></a>
							</div>
						</div>
					</div>
            
        )
    })}
    </div>
</div>
    </section>
  )
}

export default Collection