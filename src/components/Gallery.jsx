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
    <section className='p-2 lg:p-8 m-2 lg:m-6 border border-gray-400'>
      <div className="flex flex-wrap justify-center gap-3">
        <div className='lg:flex-2'>
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
        <div className='w-full lg:flex-4'>
          <iframe  
            height="501" 
            className='w-full '
            src="https://www.youtube.com/embed/bvjAZIWNB3I" 
            title="Murad Mahmudov talks about the Supercycle and how he chooses his Meme Coins." 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
          >
          </iframe>
        </div>
        <div className='w-full lg:flex-2'>
          <div className='flex flex-wrap'>
            <img className='w-6/12 pr-0 lg:pr-2' src={images.image2} alt="" />
            <img className='w-6/12' src={images.image3} alt="" />
          </div>
          <div className='flex pt-2 '>
            <img className='w-6/12 pr-0 lg:pr-2' src={images.image4} alt="" />
            <img className='w-6/12' src={images.image5} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery;
