import React from 'react';
import Marquee from 'react-fast-marquee';
import Header from '../Components/Header/Header';
import Collection from '../Components/Collection/Collection';
import Icons from '../Components/Icons/Icons';
import Deal from '../Components/TodayDeal/Deal';
import New from '../Components/New/new';

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
        <Deal/>
        <New/>
    </div>
  )
}

export default Home