import React from 'react';
import Marquee from 'react-fast-marquee';
import Header from '../Components/Header/Header';
import Collection from '../Components/Collection/Collection';
import Icons from '../Components/Icons/Icons';

function Home() {
  return (
    <div>
        <Header/>
        <Collection/>
        <Marquee 
        pauseOnHover={true}
        gradientColor='none'
         >
        <Icons/>
        </Marquee>
    </div>
  )
}

export default Home