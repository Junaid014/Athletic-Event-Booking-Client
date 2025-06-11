import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { MdDeleteOutline } from 'react-icons/md';
import { FaPenFancy } from 'react-icons/fa';

import { AuthContext } from '../../../Provider/AuthContext';
import Loading from '../../Loading';
import { Link } from 'react-router';
import NoPostedEvents from './NoPostedEvents';

const MyPostedEvents = () => {
  const { user, loading } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    setDataLoading(true);
    fetch(`http://localhost:3000/events?hr_email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setDataLoading(false);
      });
  }, [user]);

  if (loading || dataLoading) {
    return <Loading />;
  }

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/events/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your event has been deleted.", "success");
              setEvents(prev => prev.filter(event => event._id !== _id));
            }
          });
      }
    });
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-grow mb-14'>
        {events.length === 0 ? (
          <NoPostedEvents/>
        ) : (
          <div className="overflow-x-auto mt-10 lg:w-11/12 mx-auto">
            <table className="table table-zebra w-full text-sm">
              <thead>
                <tr className="bg-gray-200 text-gray-800">
                  <th>No</th>
                  <th>Event Info</th>
                  <th>Type</th>
                  <th>Organizer</th>
                  <th>Deadline</th>
                  <th>Actions</th>
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
                      <div className="flex gap-5">
                        <button
                          onClick={() => handleDelete(event._id)}
                          className="btn btn-sm bg-[#EA4744ED] hover:bg-[#EA4744] text-white"
                        >
                          <MdDeleteOutline className="text-lg" />
                        </button>
                        <Link to={`/updateEvent/${event._id}`}>
                          <button className="btn btn-sm bg-orange-200">
                            <FaPenFancy className="text-sm" />
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default MyPostedEvents;
