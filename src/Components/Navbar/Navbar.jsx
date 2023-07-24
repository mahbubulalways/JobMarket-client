import React, { useContext, useState } from 'react';
import navData from '../data/navData';
import { Link, NavLink } from 'react-router-dom';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { AuthContext } from '../AuthProvider/AuthProvider';
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const navs = navData
    const {user,logOut} = useContext(AuthContext)
    const handleLogout=()=>{
        logOut()
        Swal.fire({
            icon: 'success',
            title: 'Log out successfully',
           
          })
    }

    return (
        <div className='sticky top-0 z-10'>
            <div className='bg-[#1765af]  py-4 st'>
            <div className='w-[80%] mx-auto flex justify-between items-center'>
                <h1 className='text-3xl font-semibold text-white'>JobMarket</h1>
                <div className='lg:block hidden'>
                <div className='flex gap-5 items-center'>
                    {
                        navs.map(({ name, path }, index) => <NavLink
                            className="text-xl"
                            key={index}
                            to={path}
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "yellow" : "white",
                                };
                            }}
                        >
                            {name}
                        </NavLink>)
                    }
                    {
                        user ?  <NavLink
                        onClick={handleLogout}
                        className="text-xl text-white"
                        >   
                     Log out
                        </NavLink> : <NavLink
                        className="text-xl"
                        
                        to='/login'
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "yellow" : "white",
                            };
                        }}
                    >
                     Log in
                    </NavLink> 
                    }
                   
                </div>
                </div>
                <div className='block lg:hidden cursor-pointer'>
                    <span onClick={() => setToggle(!toggle)} >
                        {
                            toggle ? <XMarkIcon className="h-9 w-9 text-white font-extrabold" /> : <Bars3Icon className="h-9 w-9 text-white font-extrabold" />
                        }
                    </span>
                </div>
            </div>
            
        </div>
        <span onClick={() => setToggle(!toggle)}>
                {<div className={`grid grid-cols-1 w-2/3 text-lg pl-10 absolute  z-10   duration-500 py-10 space-y-5 pr-4  bg-[#0b4777] lg:hidden sm:block h-screen rounded-br-md ${toggle ? 'left-0' : '-left-full'}`} >
                    
                <div className='flex flex-col gap-5 '>
                    {
                        navs.map(({ name, path }, index) => <Link
                            className="text-lg  px-4 py-1 rounded-md hover:bg-white hover:text-black text-white duration-1000"
                            key={index}
                            to={path}
                           
                        >
                            {name}
                        </Link>)
                    }
                </div>
                    
                </div>}
            </span>
        </div>
    );
};

export default Navbar;