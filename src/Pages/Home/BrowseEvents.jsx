
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import EventCard from './Card/EventCard';
import Footer from '../../Component/Footer';

const BrowseEvents = () => {
  const initialEvents = useLoaderData();
  const [events, setEvents] = useState(initialEvents);
  const [searchText, setSearchText] = useState("");
  const [eventType, setEventType] = useState(""); 

  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const queryParams = new URLSearchParams();
      if (searchText) queryParams.append('search', searchText);
      if (eventType) queryParams.append('eventType', eventType);

      fetch(`https://athletic-event-booking-platform-ser.vercel.app/events?${queryParams.toString()}`, {
        credentials: 'include',
      })
        .then(res => res.json())
        .then(data => {
          setEvents(data);
          setCurrentPage(1); 
        });
    }, 200);

    return () => clearTimeout(delayDebounce);
  }, [searchText, eventType]);

  // Pagination calculations
  const totalPages = Math.ceil(events.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEvents = events.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h2 className='lg:text-3xl text-2xl text-[#1a8012] font-semibold lg:font-extrabold text-center mt-9 roboto mb-8'>
        Browse All the Events we have
      </h2>

      {/* Search + Event Type Filter */}
      <div className="flex justify-center gap-4 mt-9 items-center mb-9">
        <h2 className='roboto font-medium'>Search Here:</h2>
        <input
          type="text"
          placeholder="Search events here..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered w-64"
        />

        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="select cursor-pointer select-bordered w-52"
        >
          <option value="">Select Event Type</option>
          <option value="Swimming">Swimming</option>
          <option value="100 Meter Sprint">100 Meter Sprint</option>
          <option value="400 Meter Sprint">400 Meter Sprint</option>
          <option value="Long Jump">Long Jump</option>
          <option value="High Jump">High Jump</option>
          <option value="Hurdles">Hurdles</option>
          <option value="Relay Race">Relay Race</option>
          <option value="Badminton">Badminton</option>
          <option value="Volleyball">Volleyball</option>
          <option value="Cycling">Cycling</option>
          <option value="Basketball">Basketball</option>
        </select>
      </div>

      {/* Event Grid */}
      <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:mx-auto mx-5 mb-14 gap-6 mt-10 lg:w-11/12'>
        {currentEvents.map((event, index) => (
          <EventCard
            key={event._id}
            index={index}
            event={event}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm border border-green-300 rounded-lg bg-base-200 hover:bg-green-50 cursor-pointer disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 text-sm border border-green-300 rounded-lg transition-colors ${
                currentPage === index + 1
                  ? 'bg-green-600 text-white cursor-pointer'
                  : 'bg-base-200 hover:bg-green-50 cursor-pointer'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm border border-green-300 rounded-lg cursor-pointer bg-base-200 hover:bg-green-50 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BrowseEvents;
