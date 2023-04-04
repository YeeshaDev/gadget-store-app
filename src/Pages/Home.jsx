import React from 'react';
import Marquee from 'react-fast-marquee';
import Header from '../Components/Header/Header';
import Collection from '../Components/Collection/Collection';
import Icons from '../Components/Icons/Icons';
import Deal from '../Components/TodayDeal/Deal';
import New from '../Components/New/New';
import HotDeal from '../Components/HotDeal/HotDeal';
import Newsletter from '../Components/NewsLetter/Newsletter';
import Footer from '../Components/Footer/Footer';
import ProductList from '../Components/UI/ProductList';
import ProductCard from '../Components/UI/ProductCard';

function Home({sliderRef}) {
  return (
    <div>
        
        <Collection/>
        <Marquee 
        pauseOnHover={true}
        gradientColor='none'
         >
        <Icons/>
        </Marquee>
        {/*<New item={item}/>*/}
        <New sliderRef={sliderRef}/>
        <HotDeal/>
        {/*<New item={item}/>*/}
        <New sliderRef={sliderRef}/>
        <Deal/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home