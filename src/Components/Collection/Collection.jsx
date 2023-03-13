import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import items from '../../data';
import './Collection.css'
//import Image from '../../assets/product01.png'

function Collection() {
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
    {items.map((items) => {
        const {id,img,collection,category} = items;
        return (
            
             <div className="flex"  key={id}>
				<Link to={`/shop/${collection}`}>
						<div className="shop">
							<div className="shop-img">
								<img src={`./photos/${img}`} alt=""/>
							</div>
							<div className="shop-body">
								<h3>{collection} collection</h3>
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