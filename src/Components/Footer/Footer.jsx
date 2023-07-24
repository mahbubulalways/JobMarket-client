import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' bg-neutral text-neutral-content'>
            <footer className=" grid grid-cols-2 gap-8 lg:grid-cols-4 py-10 justify-between w-[90%] mx-auto">
                <div className='space-y-2'>
                <h1 className='text-2xl font-semibold text-gray-400 spa'>JobMarket</h1>
                <p>Dhanmondi 32 </p>
                <p> Dhaka 1205</p>
                </div>
  <div className='flex flex-col gap-2'>
    <span className='text-gray-400 text-xl'>Services</span> 
    <Link >Branding</Link>
    <Link >Design</Link>
    <Link >Marketing</Link>
    <Link >Advertisement</Link>
  </div> 
  <div  className='flex flex-col gap-2'>
    <span className='text-gray-400 text-xl'>Company</span> 
    <Link >About us</Link>
    <Link >Contact</Link>
    <Link >Jobs</Link>
    <Link >Press kit</Link>
  </div> 
  <div  className='flex flex-col gap-2'>
    <span className='text-gray-400 text-xl'>Legal</span> 
    <Link >Terms of use</Link>
    <Link >Privacy policy</Link>
    <Link >Cookie policy</Link>
  </div>
</footer>
        </div>
    );
};

export default Footer;