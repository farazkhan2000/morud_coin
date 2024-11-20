import React from 'react';
import { images } from '../assets/images/assets';

const Videos = () => {
  return (
    <section className='bg-[#92dffe] py-12 lg:pb-44 flex relative'>
      <div className="mx-auto">
        <div className='flex flex-wrap justify-between px-5 lg:px-0 gap-16 lg:gap-40'>
          <iframe 
            height="452" 
            className='w-full lg:w-[765px] shadow-[0px_8px_0px_6px_rgba(0,0,0,1)]'
            src="https://www.youtube.com/embed/ITQE2a8hZZg" 
            title="How Bitcoin Prepared Us for the Memecoin Era | Murad Mahmudov" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
          >
          </iframe>
          <iframe 
            height="451" 
            className='w-full lg:w-[765px] shadow-[0px_8px_0px_6px_rgba(0,0,0,1)]'
            src="https://www.youtube.com/embed/Uos1Wpv2rcg" 
            title="The MemeCoin Supercycle: Why 2025 Will Be the Year of $100B MemeCoins (Murad Interview)" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
      <img className="hidden lg:block w-1/5 absolute bottom-0 left-1/2 transform -translate-x-1/2" src={images.murad_gains} alt="" />
    </section>
  )
}

export default Videos;
