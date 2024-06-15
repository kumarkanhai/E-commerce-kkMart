import React from 'react'
import HeroSection from '../Components/HeroSection';
import Services from '../Components/Services';
import Gallery from '../Components/Gallery';
import PopularProducts from '../Components/PopularProducts';
import TestMonial from '../Components/TestMonial';

const Home = () => {
  return (
    <>
        <div>
            <HeroSection/>
            <Services/>
            <PopularProducts/>
            <Gallery/>
            <TestMonial/>
        </div>
    </>
  );
}

export default Home