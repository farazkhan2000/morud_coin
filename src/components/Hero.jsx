import React from 'react';
import { Link } from 'react-router-dom';
import { icons } from '../assets/icons/assets';
import { images } from '../assets/images/assets';
import { FaCopy } from "react-icons/fa";

const Hero = () => {

  const copyAddress = () => {
    const address = "FskzSqy7Pi1f3nWorr4WhhQboxzyv8fv6Q2e8xyDpump";
    navigator.clipboard.writeText(address).then(() => {
      alert("Address copied to clipboard!");
    });
  };

  return (
    <section className="hero flex flex-col items-center justify-between">
      {/* First Div */}
      <div className="relative h-[40%] w-full">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <div className="flex">
            <img className='animate-blink' src={images.cult} alt="cult" />
            <img className='animate-blink pt-10' src={images.of} alt="of" />
          </div>
        </div>
        <div className="absolute top-32 left-1/2 rotate-[-14deg]">
          <img className='w-[40rem]' src={images.morud} alt="morud" />
        </div>
      </div>

      {/* Center Div */}
      <div className="h-[20%] flex items-center justify-center">
        <ul className="bg-white border-2 border-gray-400 rounded-full py-2 px-12 shadow-[0px_4px_0px_3px_rgba(0,0,0,1)]">
          <li className="flex flex-wrap gap-5">
            <Link to="/">
              <img
                className="rounded-full border-2 border-gray-400 shadow-lg w-20"
                src={icons.moonshot}
                alt="moonshot"
              />
            </Link>
            <Link to="/">
              <img
                className="rounded-full border-2 border-gray-400 shadow-lg w-20"
                src={icons.jupiter}
                alt="jupiter"
              />
            </Link>
            <Link to="/">
              <img
                className="rounded-full border-2 border-gray-400 shadow-lg w-20"
                src={icons.gate}
                alt="gate"
              />
            </Link>
            <Link to="/">
              <img
                className="rounded-full border-2 border-gray-400 shadow-lg w-20"
                src={icons.dextool}
                alt="dextool"
              />
            </Link>
            <Link to="/">
              <img
                className="rounded-full border-2 border-gray-400 shadow-lg w-20"
                src={icons.telegram}
                alt="telegram"
              />
            </Link>
            <Link to="/">
              <img
                className="rounded-full border-2 border-gray-400 shadow-lg w-20"
                src={icons.dexscreener}
                alt="dexscreener"
              />
            </Link>
            <Link to="/">
              <img
                className="rounded-full border-2 border-gray-400 shadow-lg w-20"
                src={icons.twitter}
                alt="twitter"
              />
            </Link>
          </li>
        </ul>
      </div>

      {/* Last Div */}
      <div className="h-[40%] flex items-center justify-center gap-4">
        <p 
          className='dynapuff bg-[#FEF47C] text-[#757017] border-4 border-[#757017] px-6 py-3 rounded-full text-3xl font-bolder uppercase'
        >
            Ca: FskzSqy7Pi1f3nWorr4WhhQboxzyv8fv6Q2e8xyDpump
        </p>
        <button
          onClick={copyAddress}
          className="bg-[#38c68b] p-8 rounded-2xl border-4 border-white"
        >
          <FaCopy color='#fff' size={'34px'} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
