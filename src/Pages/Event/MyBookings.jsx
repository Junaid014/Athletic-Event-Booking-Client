import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { MdDeleteOutline, MdTableRows } from 'react-icons/md';
import { AiFillAppstore } from "react-icons/ai";
import { AuthContext } from '../../Provider/AuthContext';
import Loading from '../Loading';
import Footer from '../../Component/Footer';
import NoBookingEvent from './NoBookingEvent';

import { TbXboxXFilled } from 'react-icons/tb';

const MyBookings = () => {
    const { user, loading } = useContext(AuthContext);
    const [events, setEvents] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [viewType, setViewType] = useState('table');

    useEffect(() => {
        if (user?.email) {
            const email = user.email.trim().toLowerCase();
            setDataLoading(true);
            fetch(`https://athletic-event-booking-platform-ser.vercel.app/my-events/${email}`,{
                credentials:'include'
            })
                .then(res => res.json())
                .then(data => {
                    setEvents(data);
                    setDataLoading(false);
                })
                .catch(error => {
                    // console.error('Fetch error:', error);
                    setDataLoading(false);
                });
        }
    }, [user]);

    const handleCancelEvent = (eventId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel event!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://athletic-event-booking-platform-ser.vercel.app/cancel-event/${eventId}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: user.email })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            Swal.fire("Cancelled!", "Your event has been removed.", "success");
                            setEvents(prev => prev.filter(event => event._id !== eventId));
                        } else {
                            Swal.fire("Error", "Could not cancel the event.", "error");
                        }
                    })
                    .catch(error => {
                        // console.error('Cancel event error:', error);
                        Swal.fire("Error", "Something went wrong!", "error");
                    });
            }
        });
    };

    if (loading || dataLoading) {
        return <Loading />;
    }

    return (
  <>
    <div className='min-h-screen flex flex-col'>

      {events.length > 0 ? (
        <>
          <h1 className="text-4xl roboto mt-8 font-semibold text-gray-800 text-center">
            Events You've Booked
          </h1>

          <div className="flex justify-center mt-3 gap-4">
            <button
              className={`btn btn-sm ${viewType === 'table' ? 'bg-[#71a574] roboto text-white' : 'roboto btn-outline'}`}
              onClick={() => setViewType('table')}
            >
              <MdTableRows className='text-xl' />
              Table View
            </button>
            <button
              className={`btn btn-sm ${viewType === 'card' ? 'bg-[#71a574] text-white roboto' : 'roboto btn-outline'}`}
              onClick={() => setViewType('card')}
            >
              <AiFillAppstore className='text-xl' />
              Card View
            </button>
          </div>
        </>
      ) : (
       <>
       <NoBookingEvent/>
       </>
      )}

      {events.length > 0 && viewType === 'table' && (
        <div className="overflow-x-auto mt-10 lg:w-11/12 mx-auto mb-20">
          {/* Table Code */}
          <table className="table table-zebra w-full text-sm">
            <thead>
              <tr className="bg-gray-200 text-gray-800">
                <th>No</th>
                <th className='lg:flex hidden'>Event Info</th>
                <th>Type</th>
                <th>Organizer</th>
                <th>Event Date</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={event._id}>
                  <th className='lg:flex hidden'>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={event.photo} alt="event" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold lg:flex hidden">{event.eventName}</div>
                        <div className="text-xs lg:flex hidden opacity-50">
                          {event.description?.slice(0, 40)}...
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{event.eventType}</td>
                  <td>{event.name}</td>
                  <td>{event.deadline}</td>
                  <td>
                    <button
                      onClick={() => handleCancelEvent(event._id)}
                      className="btn btn-sm bg-red-500 hover:bg-red-600"
                    >
                      <TbXboxXFilled className="text-xl text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {events.length > 0 && viewType === 'card' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto mb-20 gap-6 px-4 mt-10">
          {events.map((event) => (
            <div
              key={event._id}
              className="card bg-base-200 h-[460px] w-[370px] shadow-lg shadow-gray-500 transition-transform duration-300 hover:-translate-y-1 mx-auto"
            >
              <figure>
                <img
                  src={event.photo}
                  alt="event"
                  className="h-[250px] object-cover rounded-2xl p-1 w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="text-lg font-bold text-base-content">{event.eventName}</h2>
                <h2 className="font-medium text-base-content">{event.eventType}</h2>

                <h3 className="text-sm text-base-content font-semibold pb-3">
                  Event Date:
                  <span className="ml-2 font-medium text-white bg-green-600 rounded-lg px-2 py-0.5">
                    {event.deadline}
                  </span>
                </h3>

                <div className="card-actions mt-auto">
                  <button
                    onClick={() => handleCancelEvent(event._id)}
                    className="btn bg-[#EA4744ED] hover:bg-[#EA4744] px-5 w-full"
                  >
                    <p className="roboto text-white">Cancel Event</p>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Footer />
    </div>
  </>
);

};

export default MyBookings;
