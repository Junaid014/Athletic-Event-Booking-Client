import React, { use, useEffect, useState } from 'react';
import EventCard from './Card/EventCard';
import { Link } from 'react-router';
import image from '../../assets/cecep-rahmat-H3YvH_LALTc-unsplash-fotor-20250611181615.jpg'
import Count from './Count';
import Footer from '../../Component/Footer';
import Loading from '../../Pages/Loading';
import { AuthContext } from '../../Provider/AuthContext';

const Home = () => {

    const {  loading } = use(AuthContext);
    const [events, setEvents] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    useEffect(() => {
        setDataLoading(true);
        fetch('http://localhost:3000/events/recent')
            .then(res => res.json())
            .then(data => {
                setEvents(data)
                setDataLoading(false);
            })
    }, [])

     if (loading || dataLoading) {
    return <Loading />;
  }
    return (
        <div className=''>
            <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  lg:mx-auto mx-20 mb-14   gap-12 mt-10 lg:w-9/12 '>
                {
                    events.map((event, index) =>
                        <EventCard
                            key={event._id}
                            index={index}
                            event={event}
                        ></EventCard>
                    )
                }

            </div>
            <Link to='/browseEvents' className='mt-5 btn bg-gradient-to-l from-[#1a8012] to-[#14590e] text-white rounded-lg font-medium shadow-md hover:from-[#14590e] hover:to-[#1a8012] transition-all duration-300
 w-48 flex mx-auto '>Browse Events</Link>

            <div className=''>
                <div className=' mt-14'>
                    <img className='w-full lg:h-[500px] ' src={image} alt="" />
                </div>
                <div className='relative bottom-24'> <Count /></div>
            </div>

            <Footer />
        </div>

    );
};

export default Home;