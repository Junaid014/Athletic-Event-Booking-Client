import React from 'react';
import { NavLink } from 'react-router';

const NoPostedEvents = () => {
    return (
         <div className='text-center mb-20'>
           <h1 className='text-3xl font-bold mt-14 mb-4 roboto'>You Have not Post any Event yet! 🎟️</h1> 
           <p className='text-[#0F0F0FCC] text-sm font-medium'>Explore our Add Event section and post an Event.</p>
           <NavLink to="/addEvent" className='mt-5 btn bg-gradient-to-l from-[#1a8012] to-[#14590e] text-white rounded-lg font-medium shadow-md hover:from-[#14590e] hover:to-[#1a8012] transition-all duration-300 px-6 py-5'>Add Event</NavLink>
        </div>
    );
};

export default NoPostedEvents;