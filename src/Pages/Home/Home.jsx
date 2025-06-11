import React, {  useEffect, useState } from 'react';
import EventCard from './Card/EventCard';
import { Link } from 'react-router';
import image from '../../assets/1470-fotor-20250611163552 (1)-fotor-20250611164024.png'
import Count from './Count';

const Home = () => {

    
    const [events,setEvents]=useState([]);
     const [dataLoading, setDataLoading] = useState(true);
     useEffect(()=>{
         setDataLoading(true);
        fetch('http://localhost:3000/events/recent')
        .then(res=>res.json())
        .then(data=>{
            setEvents(data)
            setDataLoading(false);
        })
     },[])


    return (
        <div className=''>
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
            <Link to='/browseEvents' className='mt-5 btn bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg font-medium shadow-md hover:from-green-700 hover:to-green-900 transition duration-300 w-48 flex mx-auto '>Browse Events</Link>

          <div className=''>
              <div className=' mt-14'>
                <img className='w-full lg:h-[500px] ' src={image} alt="" />
            </div>
           <div className='relative bottom-24'> <Count/></div>
          </div>
        </div>
        
    );
};

export default Home;