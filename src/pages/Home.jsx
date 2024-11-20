import React from 'react';
import Hero from '../components/Hero';
import TextSlide from '../components/TextSlide';
import Gallery from '../components/Gallery';
import About from '../components/About';
import CTA from '../components/CTA';
import Videos from '../components/Videos';

const Home = () => {
  return (
    <>
      <Hero />
      <TextSlide/>
      <Gallery />
      <About />
      <CTA />
      <Videos />
    </>
  )
}

export default Home;
