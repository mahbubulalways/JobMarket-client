import React, { useState } from 'react';

const Toggle = () => {
    const [btn,setBtn]=useState(false)
    const toggleBtn=()=>{
        setBtn(true)
    }
    return (
        <div className='flex justify-center pt-10 gap-8'>
               <button onClick={()=>setBtn(false)}  className={` ${btn ? "text-white" : "border border-gray-700 bg-white text-black" } duration-700 bg-black   inline-flex items-center gap-2 px-5 py-2 rounded-lg text-lg`}>Job Seeker</button>
               <button onClick={toggleBtn} className={` ${btn ?  "border border-gray-700 bg-white text-black" : "text-white"}  duration-700 bg-black   inline-flex items-center gap-2 px-5 py-2 rounded-lg text-lg`}>Job poster</button>

        </div>
    );
};

export default Toggle;