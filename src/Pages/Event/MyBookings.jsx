import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { MdDeleteOutline } from 'react-icons/md';
import { AuthContext } from '../../Provider/AuthContext';
import Loading from '../Loading';
import Footer from '../../Component/Footer';
import NoBookingEvent from './NoBookingEvent';
import { FcCancel } from 'react-icons/fc';
import { TbXboxXFilled } from 'react-icons/tb';

const MyBookings = () => {
    const { user, loading } = useContext(AuthContext);
    const [events, setEvents] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            const email = user.email.trim().toLowerCase();
            setDataLoading(true);
            fetch(`http://localhost:3000/my-events/${email}`,{
                credentials:'include'
            })
                .then(res => res.json())
                .then(data => {
                    setEvents(data);
                    setDataLoading(false);
                })
                .catch(error => {
                    console.error('Fetch error:', error);
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
                fetch(`http://localhost:3000/cancel-event/${eventId}`, {
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
                        console.error('Cancel event error:', error);
                        Swal.fire("Error", "Something went wrong!", "error");
                    });
            }
        });
    };

    if (loading || dataLoading) {
        return <Loading />;
    }

    return (
        <div className='min-h-screen flex flex-col'>
            <div className='flex-grow mb-14'>
                {events.length === 0 ? (
                    <NoBookingEvent />
                ) : (
                    <div className="overflow-x-auto mt-10 lg:w-11/12 mx-auto">
                        <table className="table table-zebra w-full text-sm">
                            <thead>
                                <tr className="bg-gray-200 text-gray-800">
                                    <th>No</th>
                                    <th>Event Info</th>
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
                                                        <img
                                                            src={event.photo}
                                                            alt="event"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{event.eventName}</div>
                                                    <div className="text-xs opacity-50">{event.description?.slice(0, 40)}...</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{event.eventType}</td>
                                        <td>{event.name}</td>
                                        <td>{event.deadline}</td>
                                        <td>
                                            <button
                                                onClick={() => handleCancelEvent(event._id)}
                                                className="btn btn-sm  bg-red-500 hover:bg-red-600  "
                                            >
                                              
                                                <TbXboxXFilled className="text-xl text-white"/>
                                                
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default MyBookings;
