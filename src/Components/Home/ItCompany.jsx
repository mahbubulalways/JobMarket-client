import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ItCompany = () => {
    const [bdIt, setBdIt] = useState([])
    useEffect(() => {
        fetch('https://job-portal-mahbubulalways.vercel.app/itCompanies')
            .then(res => res.json())
            .then(data => setBdIt(data))
    }, [])
    return (
        <div>
            <div className='w-[90%] mx-auto my-12'>
            <h1 className='text-5xl font-semibold text-center pb-14 ' >Top IT Companies</h1>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8'>
            {
             bdIt.map(({_id,logo,name,location})=><div key={_id} className="card w-full bg-base-100 shadow-xl">
                <figure><img className='h-60 w-full' src={logo} alt="image" /></figure>
                <hr />
                <div className="card-body">
                    <h1 className='text-2xl font-semibold '>{name}</h1>
                    <p>{location}</p>
                   <Link to={`/details/${_id}`}> <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div></Link>
                </div>
            </div>)
            }
            </div>
        </div>
        </div>
    );
};

export default ItCompany;