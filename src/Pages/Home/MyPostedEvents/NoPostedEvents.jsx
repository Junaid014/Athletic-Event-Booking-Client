import React from 'react';
import { NavLink } from 'react-router';

const NoPostedEvents = () => {
    return (
         <div className='text-center'>
           <h1 className='text-3xl font-bold mt-14 mb-4'>You Have not Post any Event yet!</h1> 
           <p className='text-[#0F0F0FCC] text-sm font-medium'>Explore our Add Event section and post an Event.</p>
           <NavLink to="/" className='mt-5 btn bg-gradient-to-r from-black to-gray-600 text-white rounded-lg font-medium shadow-md hover:from-black hover:to-gray-700 transition duration-300  px-8 border border-[#] cursor-pointer'>Add Event</NavLink>
        </div>
    );
};

export default NoPostedEvents;