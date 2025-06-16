import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import EventCard from './Card/EventCard';
import Footer from '../../Component/Footer';

const BrowseEvents = () => {
    const initialEvents = useLoaderData(); 
    const [events, setEvents] = useState(initialEvents);
     const [searchText, setSearchText] = useState("");
     useEffect(() => {
        const delayDebounce = setTimeout(() => {
            fetch(`https://athletic-event-booking-platform-ser.vercel.app/events?search=${searchText}`, {
                credentials:'include'
            })
                .then(res => res.json())
                .then(data => {
                    setEvents(data)
                });
        }, 200); 

        return () => clearTimeout(delayDebounce);
    }, [searchText]);

    return (
        <div>
             <h2 className='text-3xl font-semibold lg:font-extrabold text-center mt-9 roboto mb-8'>Browse All the Events we have</h2>

             <div className="flex justify-center gap-1 mt-9 items-center mb-9">
                <h2 className='roboto font-medium'>Search Here:</h2>
                <input
                    type="text"
                    placeholder="Search events here..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="input input-bordered w-64"
                />
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 mb-20  lg:mx-auto mx-20   gap-12 mt-10 lg:w-9/12 '>
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
            <Footer/>
        </div>
    );
};

export default BrowseEvents;