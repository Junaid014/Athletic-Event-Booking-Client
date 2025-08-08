import React, { useState, useContext } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import axios from 'axios';

import { AuthContext } from '../../Provider/AuthContext';
import Footer from '../../Component/Footer';

const AddEvent = () => {
    const { user } = useContext(AuthContext);
    const [deadline, setDeadline] = useState(null);

    const handleAddEvent = async (e) => {
        e.preventDefault();
        const form = e.target;

        const eventData = {
            name: form.name.value,
            email: form.email.value,
            eventName: form.eventName.value,
            eventType: form.eventType.value,
            deadline: deadline?.toLocaleDateString('en-CA'),
            photo: form.photo.value,
            description: form.description.value,
            location: form.location.value,
        };

        axios.post('https://athletic-event-booking-platform-ser.vercel.app/events', eventData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "This event has been saved and published.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset()
                }
            })
            
            .catch(error => {
                console.log(error);
            })


    };

    return (
        <>
        <div>
            <div className='bg-gray-50 mb-20'>
                <div className='lg:w-7xl mx-auto'>
                    <div className="lg:px-24 px-9 pt-9 lg:pt-16">
                        <h2 className="lg:text-3xl text-2xl text-center text-[#374151] font-extrabold roboto">Add an Event</h2>
                        <p className='text-center text-[#1B1A1AB3] md:w-[900px] mx-auto mb-8'>
                            Fill in the event details below. Participants will be able to view and register.
                        </p>
                        <form onSubmit={handleAddEvent}>
                            {/* Event Name and Type */}
                            <div className="md:flex mb-8">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-gray-900 font-medium">Event Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        name="eventName"
                                        placeholder="Event Name"
                                        className="w-full px-3 py-2 border border-gray-300 text-sm"
                                    />
                                </div>
                                <div className="form-control md:w-1/2 mt-3 md:mt-0 md:ml-4">
                                    <label className="label">
                                        <span className="label-text text-gray-900 font-medium">Event Type</span>
                                    </label>
                                    <select
                                        name="eventType"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 text-sm"
                                    >
                                        <option value="">Select Event Type</option>
                                        <option value="Swimming">Swimming</option>
                                        <option value="100 Meter Sprint">100 Meter Sprint</option>
                                        <option value="400 Meter Sprint">400 Meter Sprint</option>
                                        <option value="Long Jump">Long Jump</option>
                                        <option value="High Jump">High Jump</option>
                                        <option value="Hurdles">Hurdles</option>
                                        <option value="Relay Race">Relay Race</option>
                                        <option value="Badminton ">Badminton </option>
                                        <option value="Volleyball ">Volleyball </option>
                                        <option value="Cycling ">Cycling </option>
                                        <option value="Basketball ">Basketball </option>
                                    </select>
                                </div>
                            </div>


                            {/* Name and Email */}
                            <div className="md:flex mb-8">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-gray-900 font-medium">Your Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        defaultValue={user?.displayName}
                                        readOnly
                                        className="w-full px-3 py-2 border border-gray-300 text-sm"
                                    />
                                </div>
                                <div className="form-control md:w-1/2 mt-3 md:mt-0 md:ml-4">
                                    <label className="label">
                                        <span className="label-text text-gray-900 font-medium">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        defaultValue={user?.email}
                                        readOnly
                                        className="w-full px-3 py-2 border border-gray-300 text-sm"
                                    />
                                </div>
                            </div>

                            
                            {/* Deadline */}
                            <div className="md:flex items-center justify-between mb-8">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text mr-2 text-gray-900 font-medium">Deadline</span>
                                    </label>
                                    <DatePicker
                                        selected={deadline}
                                        onChange={(date) => setDeadline(date)}
                                        dateFormat="yyyy-MM-dd"
                                        placeholderText="Select deadline"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 text-sm"
                                    />
                                </div>
                                <div className="form-control md:w-1/2 mt-3 md:mt-0 md:ml-4">
                                    <label className="label">
                                        <span className="label-text text-gray-900 font-medium">Location</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="Event Location"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 text-sm"
                                    />
                                </div>
                            </div>

                            {/* Description and Photo */}
                            <div className="md:flex mb-8">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-gray-900 font-medium">Description</span>
                                    </label>
                                    <textarea
                                        name="description"
                                        placeholder="What is this event about?"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 text-sm"
                                    ></textarea>
                                </div>
                                <div className="form-control mt-3 md:mt-0 md:w-1/2 md:ml-4">
                                    <label className="label">
                                        <span className="label-text text-gray-900 font-medium">Photo URL</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="photo"
                                        placeholder="Photo URL"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 text-sm"
                                    />
                                </div>
                            </div>


                            {/* Submit Button */}
                            <input
                                type="submit"
                                value="Add Event"
                                className="mt-5 btn bg-gradient-to-l from-[#1a8012] to-[#14590e] text-white rounded-lg font-medium shadow-md hover:from-[#14590e] hover:to-[#1a8012] transition-all duration-300 w-full"
                            />
                        </form>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
            

        </>
    );
};

export default AddEvent;
