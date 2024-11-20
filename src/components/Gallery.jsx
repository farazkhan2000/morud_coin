import React from 'react';
import { images } from '../assets/images/assets';
import { FaCopy } from "react-icons/fa";

const Gallery = () => {

  const copyAddress = () => {
    const address = "FskzSqy7Pi1f3nWorr4WhhQboxzyv8fv6Q2e8xyDpump";
    navigator.clipboard.writeText(address).then(() => {
      alert("Address copied to clipboard!");
    });
  };

  return (
    <section className='p-8 m-6 border border-gray-400'>
      <div className="flex gap-3">
        <div className='flex-1'>
          <img className='border-8 w-full border-black' src={images.image1} alt="" />
          <div className='pt-4 flex justify-center items-center gap-3'>
            <p className='grandstander text-2xl'>CA: </p>
            <button
              onClick={copyAddress}
              className="bg-[#38c68b] p-8 rounded-2xl border-4 border-white"
            >
              <FaCopy color='#fff' size={'34px'} />
            </button>
          </div>
          <p className='grandstander text-2xl font-bold text-center pt-2'>Copy CA and believe in something</p>
        </div>
        <div className='flex-3'>
          <iframe 
            width="929" 
            height="501" 
            src="https://www.youtube.com/embed/bvjAZIWNB3I" 
            title="Murad Mahmudov talks about the Supercycle and how he chooses his Meme Coins." 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
          >
          </iframe>
        </div>
        <div className='flex-2'>
          <div className='flex gap-2 flex-wrap'>
            <img src={images.image2} alt="" />
            <img src={images.image3} alt="" />
          </div>
          <div className='flex gap-2 pt-2 flex-wrap'>
            <img src={images.image4} alt="" />
            <img src={images.image5} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery;
