import React from 'react';
import Marquee from "react-fast-marquee";
import '../App.css';  

const TextSlide = () => {
  return (
    <section className='py-6 bg-[#5d94c3]'>
      <div className='bg-white'>
        <Marquee direction="right" speed="200">
          <div className='flex gap-4 py-5'>
            <p className='grandstander text-2xl lg:text-6xl font-semibold tracking-wider text-black pl-16'>MURAD</p>
            <p className='grandstander text-2xl lg:text-6xl font-semibold tracking-wider text-[#FEF47C] animate-weird'>CULT</p>
            <p className='grandstander text-2xl lg:text-6xl font-semibold tracking-wider text-[#FF5310]'>BASE</p>
            <p className='grandstander text-2xl lg:text-6xl font-semibold tracking-wider text-[#FFAF05] animate-weird'>CYCLE</p>
            <p className='grandstander text-2xl lg:text-6xl font-semibold tracking-wider text-[#ff05eb] pl-16'>MEMECOIN</p>
            <p className='grandstander text-2xl lg:text-6xl font-semibold tracking-wider text-[#38c68b] animate-weird'>BELIEVE</p>
            <p className='grandstander text-2xl lg:text-6xl font-semibold tracking-wider text-[#8b0000]'>HOLD</p>
            <p className='grandstander text-2xl lg:text-6xl font-semibold tracking-wider text-[#89d3f0] animate-weird'>SUPER</p>
            <p className='grandstander text-2xl lg:text-6xl font-semibold tracking-wider text-black pl-16'>MURAD</p>
            <p className='grandstander text-2xl lg:text-6xl font-semibold tracking-wider text-[#FEF47C] animate-weird'>CULT</p>
            <p className='grandstander text-2xl lg:text-6xl font-semibold tracking-wider text-[#FF5310]'>BASE</p>
            <p className='grandstander text-2xl lg:text-6xl font-semibold tracking-wider text-[#FFAF05] animate-weird'>CYCLE</p>
            <p className='grandstander text-2xl lg:text-6xl font-semibold tracking-wider text-[#ff05eb] pl-16'>MEMECOIN</p>
            <p className='grandstander text-2xl lg:text-6xl font-semibold tracking-wider text-[#38c68b] animate-weird'>BELIEVE</p>
            <p className='grandstander text-2xl lg:text-6xl font-semibold tracking-wider text-[#8b0000]'>HOLD</p>
            <p className='grandstander text-2xl lg:text-6xl font-semibold tracking-wider text-[#89d3f0] animate-weird'>SUPER</p>
          </div>
        </Marquee>
      </div>
    </section>
  )
}

export default TextSlide;
