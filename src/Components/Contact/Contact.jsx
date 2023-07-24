import React from 'react';

const Contact = () => {
    return (
        <div className='w-[80%] mx-auto py-14'>
            <h1 className='text-4xl uppercase text-center pb-10'>Contact us</h1>
             <form className=''>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <input className=' px-5 py-3 rounded-md text-gray-100 w-full border border-gray-500 ' type="text" name="from_name" id="" placeholder='Name' required />

                            <input className=' px-5 py-3 rounded-md text-gray-100 w-full border border-gray-500 ' type="email" name="from_email" id="" placeholder='Your Email' required />
                        </div>
                        <textarea className='w-full mt-5 px-5 py-3 rounded-md text-gray-100  border border-gray-500 ' name="message" id="" cols="30" rows="8" placeholder='Write Message' required></textarea>
                        <br />
                        <input className='mt-4  text-lg inline-flex items-center gap-2 border px-6 py-3 rounded-3xl  duration-300 border-gray-600 before:scale-x-0 hover:before:scale-x-50 cursor-pointer' type="submit" value="Send Message" />
                    </form>
        </div>
    );
};

export default Contact;