import React from 'react';
import { images } from '../assets/images/assets';

const About = () => {
  return (
    <section className='bg-[#92dffe] flex justify-center py-5'>
      <div className="container flex flex-col gap-24">
        {/* heading */}
        <h2
          className='grandstander text-center text-6xl font-bold text-white uppercase'
        >
          Children, $morud will show you the way...
        </h2>
        {/* Images */}
        <div className='flex gap-2 items-center justify-center'>
          <img className='border-8 border-black' src={images.about_img1} alt="" />
          <img className='border-8 border-black' src={images.about_img2} alt="" />
          <img className='border-8 border-black' src={images.about_img3} alt="" />
        </div>
        {/* text */}
        <p className='grandstander text-start text-7xl font-semibold tracking-wide text-white uppercase'>
          $MORUD 5:7-8 "Be patient, then, brothers and sisters, until the Lord’s coming. See how the farmer waits 
          for the land to yield its valuable crop, patiently waiting for the autumn and spring rains. You too, be 
          patient and stand firm, because the Lord’s coming is near." BELIEVE
        </p>
      </div>
    </section>
  )
}

export default About;
