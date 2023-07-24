import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Social = () => {
    const navigate=useNavigate()
    const {googleUserCreate}=useContext(AuthContext)
    const handleGoogle=()=>{
        googleUserCreate()
       .then(result=>{
        navigate('/')
        Swal.fire({
            icon: 'success',
            title: 'Log in successfully',
           
          })
       })
    }
    return (
        <div>
            <div className='text-center  mb-10'>
            <p className='py-2'>OR</p>
           <button onClick={handleGoogle} className='border hover:bg-gray-700 duration-700 bg-black  text-white inline-flex items-center gap-2 px-5 py-2 rounded-lg text-lg'> <FaGoogle/> Continue With Google</button>
        </div>
        </div>
    );
};

export default Social;