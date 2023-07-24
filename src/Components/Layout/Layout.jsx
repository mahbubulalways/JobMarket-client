import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = () => {

    const [count, setCount] = useState(0);

    // Define the interval callback function
    const intervalCallback = () => {
      setCount(prevCount => prevCount + 1);
      // Add your code here that you want to execute repeatedly
    };

    useEffect(() => {
        const intervalId = setInterval(intervalCallback, 1000); // 1000 milliseconds (1 second)
        const durationToRun = 5000; // 5000 milliseconds (5 seconds)
        setTimeout(() => {
            clearInterval(intervalId); // This will stop the interval
          }, durationToRun);
      
        // Clean up the interval when the component unmounts
        return () => {
          clearInterval(intervalId);
        };
      }, [])



    if(count<3){
        return <div className='bg-black h-screen'>
          <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
      <p className='text-7xl font-thin text-white'>L</p>
      <div className='w-12 h-12 border-8 border-dashed rounded-full animate-spin mt-5 border-yellow-400'></div>
      <p className='text-7xl font-thin text-white'>ading....</p>
    </div>
        </div>
    }

    return (
        <div className='flex flex-col justify-between h-screen'>
            <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;