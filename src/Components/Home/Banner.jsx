import React from 'react';
import logo from '../../../public/img.webp'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Banner = () => {
    return (

         <div className='bg-[#1687ee] shadow-xl'>
            <div className='w-[90%] h-screen mx-auto pt-10 lg:pt-24 pb-10 '>
           <div className='grid grid-col-1 gap-4 lg:grid-cols-2 items-center '>
            <div className='text-white space-y-4'
            
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            // data-aos-anchor-placement="top-center"
            >
                <p className='text-4xl font-semibold'>4536+ Jobs listed</p>
                <h1 className='text-5xl lg:text-6xl font-semibold uppercase'>Find your dream jobs</h1>
                <p className='text-lg'>We provide online instant cash loans with quick approval that suit your term length</p>
                <button className='text-xl bg-[#0b4777] hover:bg-[#051929] duration-700 px-5 py-2 rounded-md text-white'>See More</button>
            </div>
         
         <div data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        //   data-aos-mirror="true"
        //   data-aos-once="false"
        //   data-aos-anchor-placement="top-center"
          >

          <img className='pb-6'  src={logo} alt="" />
         </div>
         
           </div>
        </div>

         </div>
    );
};

export default Banner;