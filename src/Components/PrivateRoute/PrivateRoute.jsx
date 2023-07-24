import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoute = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
        <p className='text-7xl font-thin '>L</p>
        <div className='w-12 h-12 border-8 border-dashed rounded-full animate-spin mt-5 border-yellow-400'></div>
        <p className='text-7xl font-thin '>ading....</p>
      </div>
    }
    if(user){
       return children
      
    }

    Swal.fire({
        icon: 'error',
        title: 'You must log in first',
       
      })
    return  <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;