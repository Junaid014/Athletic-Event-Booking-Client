import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Provider/AuthContext';
import Footer from '../../../Component/Footer';

const EventDetails = () => {
  const event = useLoaderData();
  const { name, eventName, description, photo, deadline, email, eventType, _id, applyEmails = [] } = event;

  const [hasApplied, setHasApplied] = useState(false);
  const [localApplyCount, setLocalApplyCount] = useState(applyEmails.length || 0);

  const { user } = use(AuthContext);

  useEffect(() => {
    if (applyEmails.includes(user?.email)) {
      setHasApplied(true);
    }
  }, [applyEmails, user]);

  const handleApply = () => {
    fetch(`http://localhost:3000/events/${_id}/apply`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: user?.email }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          setHasApplied(true);
          setLocalApplyCount(prev => prev + 1);
          toast.success('Applied successfully!');
        } else {
          toast.error('You have already applied.');
        }
      });
  };

  return (
    <>
      <div className="bg-base-200 rounded-lg px-8 py-8 lg:px-20 lg:py-20 w-11/12 mx-auto mb-14 mt-8">
        <div className="flex flex-col lg:flex-row gap-10">
          <img
            src={photo}
            alt="event"
            className="w-96 h-[300px] object-cover rounded-lg shadow-2xl"
          />
          <div className="">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-base-content">{eventType}</h2>
              <p className="text-lg font-bold text-base-content">
                Total Applied: <span className="bg-gray-700 text-white border border-white px-2 rounded-full">{localApplyCount}</span>
              </p>
            </div>
            <h2 className="text-lg mb-3 mt-3 font-medium text-base-content">{eventName}</h2>
            <h3 className="text-sm text-base-content font-semibold pb-4">
              Deadline: <span className="font-medium text-white bg-[#444b53] rounded-lg px-2 py-0.5">{deadline}</span>
            </h3>
            <div className="flex justify-between items-center border-t pt-4 pb-2.5 border-dashed border-gray-400">
              <p className="text-sm font-medium">Organized By:</p>
              <p className="text-sm font-bold">{name}</p>
            </div>
            <p className="text-base font-bold mt-2">Event Details:</p>
            <p className="lg:w-[500px] text-base-content">{description}</p>
            <span className="flex gap-2 items-center mt-4">
              <p className="text-base font-medium">Contact:</p>
              <p className="font-bold text-base-content">{email}</p>
            </span>

            {/* Apply Button */}
            <div className="flex items-center gap-5 mt-4">
              <h2 className="text-lg font-bold">Apply Now:</h2>
              <div className="relative group">
                <button
                  onClick={handleApply}
                  disabled={hasApplied}
                  className={`border border-gray-300 text-2xl px-3 py-1 rounded ${
                    hasApplied ? 'bg-red-600 text-white cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {hasApplied ? '✔️ Applied' : 'Apply Now'}
                </button>
                {hasApplied && (
                  <span className="absolute -top-9 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    You have already applied
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventDetails;
