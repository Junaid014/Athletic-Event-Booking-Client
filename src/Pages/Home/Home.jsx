import React, { use, useEffect, useState } from 'react';
import EventCard from './Card/EventCard';
import { Link } from 'react-router';
import image from '../../assets/cecep-rahmat-H3YvH_LALTc-unsplash-fotor-20250611181615.jpg'
import Count from './Count';
import Footer from '../../Component/Footer';
import Loading from '../../Pages/Loading';
import { AuthContext } from '../../Provider/AuthContext';
import PopularEvent from '../Event/Popular/PopularEvent';
import Slider from './Slider';
import FeedbackForm from './FeedbackForm ';
import Review from './Review';

const Home = () => {

    const { loading } = use(AuthContext);
    const [events, setEvents] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    useEffect(() => {
        setDataLoading(true);
        fetch('https://athletic-event-booking-platform-ser.vercel.app/events/recent')
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

            <Slider />
          

            <div className=''>
                <h2 className='lg:text-3xl text-2xl roboto font-bold text-center mt-10 lg:mt-20 mb-3 lg:mb-18 text-[#1a8012]'>Most UpComing Events</h2>

                <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 bg-  lg:mx-auto mx-5  mb-14  gap-6  mt-10 lg:w-11/12 '>
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
                <Link to='/browseEvents' className='mt-5 roboto btn bg-gradient-to-l from-[#51b756] to-[#276528] text-white rounded-lg font-medium shadow-md hover:from-[#276528] hover:to-[#51b756] transition-all duration-300

 w-48 flex mx-auto '>Browse Events</Link>
            </div>

            <div className='lg:mt-32 mt-5'>
                <div className=' mt-14'>
                    <img className='w-full lg:h-[500px] ' src={image} alt="" />
                </div>
                <div className='relative bottom-24'> <Count /></div>
            </div>
            <PopularEvent />
              <div className='mt-10'>
                <div className="text-center mb-1">
                    <h2 className="lg:text-3xl text-2xl font-extrabold text-[#1a8012] mb-2 tracking-wide">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-600 text-lg max-w-xl mx-auto">
                        Hear from our satisfied event organizers and participants who trust AthleticHub for their sports events.
                    </p>
                    
                </div>
                <Review />
            </div>
            <FeedbackForm />

            <Footer />
        </div>

    );
};

export default Home;