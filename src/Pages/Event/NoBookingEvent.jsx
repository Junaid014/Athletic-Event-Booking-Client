import React from 'react';
import { NavLink } from 'react-router';

const NoBookingEvent = () => {
    return (
         <div className='text-center mb-20'>
           <h1 className='lg:text-3xl text-2xl text-[#1a8012] font-bold mt-14 mb-4 roboto'> Oops! You Haven't Booked Any Events Yet 🎟️</h1> 
           <p className='text-[#0F0F0FCC] text-sm font-medium'> It looks like your event journey hasn’t begun yet. Dive into our event section and <br /> discover exciting opportunities waiting for you. Don’t miss out!</p>
           <NavLink to="/browseEvents" className='mt-5 btn bg-gradient-to-l from-[#1a8012] to-[#14590e] text-white rounded-lg font-medium shadow-md hover:from-[#14590e] hover:to-[#1a8012] transition-all duration-300 px-6 py-5'>Browse Event</NavLink>
        </div>
    );
};

export default NoBookingEvent;