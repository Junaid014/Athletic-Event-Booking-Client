import React, {  useEffect, useState } from 'react';
import EventCard from './EventCard';

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
        <div className='mt-40'>
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
    );
};

export default Home;