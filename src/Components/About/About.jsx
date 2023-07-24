import React from 'react';
import about from '../../../public/about.webp'
import ourInfo from '../data/ourInfo';
const About = () => {
    const aboutUs=ourInfo
    return (
        <div className='w-[90%] mx-auto'>
            
          <div>
          <h1 className='text-gray-800 text-4xl text-center font-semibold uppercase pt-10'>Why Choose Us</h1>
          <p className='text-center py-4 text-xl'>Who are in extremely love with eco friendly system.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 pb-12'>
               {
                aboutUs.map(({title,text,icon:Icon},index)=><div key={index} className='border-2 border-gray-400 rounded-lg p-5 space-y-3' >
                    <Icon className='h-16 w-16 mx-auto'></Icon>
                    <h1 className='text-xl font-semibold'>{title}</h1>
                    <p>{text}</p>
                </div>)
               }
            </div>
          </div>
        </div>
    );
};

export default About;