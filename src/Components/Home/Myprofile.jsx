import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Myprofile = () => {
    const [projects, setProject] = useState([])
    useEffect(() => {
        fetch('../../../public/projects.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])
    return (
       <div className='w-[90%] mx-auto pt-10 pb-20'>
            <h1 className='text-5xl font-semibold text-center pb-14 ' >My Profile </h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                projects.map(({_id,img,title,liveLink})=><div key={_id}className="card w-full hover:bg-gray-200 duration-700 bg-base-100 shadow-xl">
                <figure><img className='h-60' src={img} alt="image" /></figure>
                <hr />
                <div className="card-body">
                    <h1 className='text-2xl font-semibold '>{title}</h1>
                    <div className="card-actions justify-end">
                        <a className="btn btn-primary" href={liveLink} target='_blank'>Visit Website</a>
                    </div>
                </div>
            </div>)
            }
        </div>
       </div>
    );
};

export default Myprofile;