import React from 'react';
import { images } from '../assets/images/assets';

const CTA = () => {
  return (
    <section className='bg-[#ffffff] flex justify-center py-12 lg:py-32'>
      <div className="container flex flex-col gap-12 lg:gap-32">
        <h2 className='grandstander text-center text-4xl lg:text-7xl font-bold text-black uppercase'>STAY CALM, HODL YOUR BAG AND GET RICH</h2>
        <div className='flex flex-wrap justify-center gap-6'>
          <img className='border-4 border-black w-3/4 lg:w-1/4' src={images.cta_img1} alt="" />
          <img className='border-4 border-black w-3/4 lg:w-1/4' src={images.cta_img2} alt="" />
          <img className='border-4 border-black w-3/4 lg:w-1/4' src={images.cta_img3} alt="" />
        </div>
      </div>
    </section>
  )
}

export default CTA;
