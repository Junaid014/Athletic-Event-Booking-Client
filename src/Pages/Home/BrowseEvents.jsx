import React from 'react';
import { useLoaderData } from 'react-router';
import EventCard from './Card/EventCard';

const BrowseEvents = () => {
    const events= useLoaderData();

    return (
        <div>
             <h2 className='text-3xl font-semibold lg:font-extrabold text-center mt-5 mb-16'>Browse All the Events we have</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  lg:mx-auto mx-20 mb-14   gap-12 mt-10 lg:w-9/12 '>
                {
                events.map((event,index)=>
                    <EventCard
                    key={event._id}
                    index={index}
                    event={event}
                    ></EventCard>
                )
            }
            
            </div>
        </div>
    );
};

export default BrowseEvents;