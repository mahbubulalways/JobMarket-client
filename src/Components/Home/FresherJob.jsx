import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FresherJob = () => {
    const [fresher, setFresher] = useState([])
    const [topSix,setTopSix]=useState(false)
    useEffect(() => {
        fetch('https://job-portal-mahbubulalways.vercel.app/fresher-jobs')
            .then(res => res.json())
            .then(data => setFresher(data))
    }, [])
   
     const topData = fresher?.slice(0,6)
  

    const handleSeeMore=()=>{
        setTopSix(true)
    }
  
    return (
        <div className='w-[90%] mx-auto my-12'>
            <h1 className='text-5xl font-semibold text-center pb-14 ' >Fresher Jobs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8'>
            {
              (topSix ? fresher : topData).map(({position,_id,logo,company,location})=><div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='h-60 w-full' src={logo} alt="image" /></figure>
                <hr />
                <div className="card-body">
                    <h2 className="card-title">{position}</h2>
                    <p>{company}</p>
                    <p>{location}</p>
                    <Link to={`/apply-fresher-jobs/${_id}`}><div className="card-actions justify-end">
                        <button className="btn btn-primary">Apply Now</button>
                    </div></Link>
                </div>
            </div>)
            }
            </div>
           <div className='text-center mt-8'>
         {
           !topSix &&   <button onClick={handleSeeMore} className='btn btn-secondary'>See More</button>
         }
           </div>
        </div>
    );
};

export default FresherJob;