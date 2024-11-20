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
          <div className="flex items-center justify-center gap-4">
            <img
              className="animate-blink w-48 sm:w-64 md:w-72 lg:w-96"
              src={images.cult}
              alt="cult"
            />
            <img
              className="animate-blink pt-6 w-28 sm:w-36 md:w-40 lg:w-48"
              src={images.of}
              alt="of"
            />
        </div>
        <div className="absolute top-32 lg:top-44 left-1/2 rotate-[-14deg]">
          <img className='w-72 sm:w-72 md:w-96 lg:w-[30rem]' src={images.morud} alt="morud" />
        </div>
      </div>

      {/* Center Div */}
      <div className="h-[20%] flex items-center justify-center px-4">
        <ul className="bg-white border-2 border-gray-400 rounded-lg lg:rounded-full py-2 px-4 lg:px-12 shadow-[0px_4px_0px_3px_rgba(0,0,0,1)]">
          <li className="flex flex-wrap justify-center gap-2 lg:gap-5">
            <Link to="https://moonshot.money/nqq6HuTVhXv2lb6AwEAcuSgl?ref=6iu8M9iHA3">
              <img
                className="rounded-full border-2 border-gray-400 shadow-lg w-12 lg:w-20"
                src={icons.moonshot}
                alt="moonshot"
              />
            </Link>
            <Link to="https://jup.ag/swap/SOL-morud">
              <img
                className="rounded-full border-2 border-gray-400 shadow-lg w-12 lg:w-20"
                src={icons.jupiter}
                alt="jupiter"
              />
            </Link>
            <Link to="https://www.gate.io/pilot/solana/morud-morud">
              <img
                className="rounded-full border-2 border-gray-400 shadow-lg w-12 lg:w-20"
                src={icons.gate}
                alt="gate"
              />
            </Link>
            <Link to="https://www.dextools.io/app/en/solana/pair-explorer/AJKnJd9HUdb3g9TeJzHvFDqRgGj2jj9s1eWs9EwE8kQ8?t=1729003622845">
              <img
                className="rounded-full border-2 border-gray-400 shadow-lg w-12 lg:w-20"
                src={icons.dextool}
                alt="dextool"
              />
            </Link>
            <Link to="https://t.me/morudctoofficial">
              <img
                className="rounded-full border-2 border-gray-400 shadow-lg w-12 lg:w-20"
                src={icons.telegram}
                alt="telegram"
              />
            </Link>
            <Link to="https://dexscreener.com/solana/FskzSqy7Pi1f3nWorr4WhhQboxzyv8fv6Q2e8xyDpump">
              <img
                className="rounded-full border-2 border-gray-400 shadow-lg w-12 lg:w-20"
                src={icons.dexscreener}
                alt="dexscreener"
              />
            </Link>
            <Link to="https://x.com/morudcto">
              <img
                className="rounded-full border-2 border-gray-400 shadow-lg w-12 lg:w-20"
                src={icons.twitter}
                alt="twitter"
              />
            </Link>
          </li>
        </ul>
      </div>

      {/* Last Div */}
      <div className="h-[40%] flex flex-wrap items-center justify-center gap-4">
        <p 
          className='dynapuff bg-[#FEF47C] text-[#757017] border-4 border-[#757017] px-6 py-3 rounded-full text-3xl font-bolder uppercase flex items-center'
        >
            Ca: <span className='hidden pl-2 lg:block'>FskzSqy7Pi1f3nWorr4WhhQboxzyv8fv6Q2e8xyDpump</span>
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
