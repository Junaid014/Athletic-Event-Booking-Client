import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../../Provider/AuthContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import Footer from '../../../Component/Footer';


const UpdateEvent = () => {
  const { eventName, description, photo,location, deadline: defaultDeadline, eventType, _id } = useLoaderData();
  console.log(_id);
  const { user } = useContext(AuthContext);
  const [deadline, setDeadline] = useState(defaultDeadline ? new Date(defaultDeadline) : null);

  const handleUpdateEvent = (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedEvent = {
      name: form.name.value,
      eventName: form.eventName.value,
      description: form.description.value,
      photo: form.photo.value,
      deadline: deadline?.toLocaleDateString('en-CA'), // ✅ Correct date format
      email: form.hr_email.value,
      eventType: form.eventType.value,
       location: form.location.value,
    };

    fetch(`http://localhost:3000/events/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Event updated successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: 'info',
            title: 'No changes were made.',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.error('Update failed:', err);
        Swal.fire({
          icon: 'error',
          title: 'Update failed!',
          text: 'Please try again.',
        });
      });
  };

  return (

    <div>
            <div className='bg-gray-50 mb-20'>
                <div className='lg:w-7xl mx-auto'>
                    <div className="lg:px-24 px-8 pt-16">
                        <h2 className="text-3xl text-center text-[#374151] font-extrabold roboto">Update Event</h2>
                        <p className='text-center text-[#1B1A1AB3] md:w-[900px] mx-auto mb-8'>
                            Update your event details below. Participants will see the updated information.
                        </p>
                        <form onSubmit={handleUpdateEvent}>
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
                                         defaultValue={eventName}
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
                                        defaultValue={eventType}
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
                                        defaultValue={location}
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
                                        defaultValue={description}
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
                                            defaultValue={photo}
                                        placeholder="Photo URL"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 text-sm"
                                    />
                                </div>
                            </div>


                            {/* Submit Button */}
                            <input
                                type="submit"
                                value="Update Event"
                                className="mt-5 btn bg-gradient-to-l from-[#1a8012] to-[#14590e] text-white rounded-lg font-medium shadow-md hover:from-[#14590e] hover:to-[#1a8012] transition-all duration-300 w-full"
                            />
                        </form>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    // <div className='bg-gray-50 mb-14'>
    //   <div className='w-7xl mx-auto'>
    //     <div className="lg:px-24 px-7 pt-16">
    //       <h2 className="text-3xl  mb-3 text-[#374151] font-extrabold roboto">Update Event</h2>
    //       <p className='lg:text-center text-[#1B1A1AB3] lg:w-[900px] mx-auto mb-8'>
    //         Update your event details below. Participants will see the updated information.
    //       </p>
    //       <form onSubmit={handleUpdateEvent}>
    //         {/* Event Name and Type */}
    //         <div className="md:flex mb-8">
    //           <div className="form-control md:w-1/2">
    //             <label className="label">
    //               <span className="label-text text-gray-900 font-medium">Event Name</span>
    //             </label>
    //             <input
    //               type="text"
    //               required
    //               name="eventName"
    //               defaultValue={eventName}
    //               className="w-full px-3 py-2 border border-gray-300 text-sm"
    //             />
    //           </div>
    //           <div className="form-control md:w-1/2 md:ml-4">
    //             <label className="label">
    //               <span className="label-text text-gray-900 font-medium">Event Type</span>
    //             </label>
    //             <select
    //               name="eventType"
    //               required
    //               defaultValue={eventType}
    //               className="w-full px-3 py-2 border border-gray-300 text-sm"
    //             >
    //               <option value="">Select Event Type</option>
    //               <option value="Swimming">Swimming</option>
    //               <option value="100 Meter Sprint">100 Meter Sprint</option>
    //               <option value="400 Meter Sprint">400 Meter Sprint</option>
    //               <option value="Long Jump">Long Jump</option>
    //               <option value="High Jump">High Jump</option>
    //               <option value="Hurdles">Hurdles</option>
    //               <option value="Relay Race">Relay Race</option>
    //                 <option value="Badminton ">Badminton </option>
    //             </select>
    //           </div>
    //         </div>

           

    //         {/* Name and Email */}
    //         <div className="md:flex mb-8">
    //           <div className="form-control md:w-1/2">
    //             <label className="label">
    //               <span className="label-text text-gray-900 font-medium">Your Name</span>
    //             </label>
    //             <input
    //               type="text"
    //               name="name"
    //               defaultValue={user?.displayName}
    //               readOnly
    //               className="w-full px-3 py-2 border border-gray-300 text-sm"
    //             />
    //           </div>
    //           <div className="form-control md:w-1/2 md:ml-4">
    //             <label className="label">
    //               <span className="label-text text-gray-900 font-medium">Email</span>
    //             </label>
    //             <input
    //               type="email"
    //               name="hr_email"
    //               defaultValue={user?.email}
    //               readOnly
    //               className="w-full px-3 py-2 border border-gray-300 text-sm"
    //             />
    //           </div>
    //         </div>

    //         {/* Event Date location */}
    //         <div className="md:flex items-center justify-between mb-8">
    //           <div className="form-control md:w-1/2">
    //             <label className="label">
    //               <span className="label-text mr-2 text-gray-900 font-medium">Event Date</span>
    //             </label>
    //             <DatePicker
    //               selected={deadline}
    //               onChange={(date) => setDeadline(date)}
    //               dateFormat="yyyy-MM-dd"
    //               placeholderText="Select deadline"
    //               required
    //               className="w-full px-3 py-2 border border-gray-300 text-sm"
    //             />
    //           </div>
    //           <div className="form-control md:w-1/2 mt-3 md:mt-0 md:ml-4">
    //             <label className="label">
    //               <span className="label-text text-gray-900 font-medium">Location</span>
    //             </label>
    //             <input
    //               type="text"
    //               name="location"
    //               defaultValue={location}
    //               placeholder="Event Location"
    //               required
    //               className="w-full px-3 py-2 border border-gray-300 text-sm"
    //             />
    //           </div>
    //         </div>

    //         {/* Description and Photo */}
    //         <div className="md:flex mb-8">
    //           <div className="form-control md:w-1/2">
    //             <label className="label">
    //               <span className="label-text text-gray-900 font-medium">Description</span>
    //             </label>
    //             <textarea
    //               name="description"
    //               defaultValue={description}
    //               required
    //               className="w-full px-3 py-2 border border-gray-300 text-sm"
    //             ></textarea>
    //           </div>
    //           <div className="form-control md:w-1/2 md:ml-4">
    //             <label className="label">
    //               <span className="label-text text-gray-900 font-medium">Photo URL</span>
    //             </label>
    //             <input
    //               type="text"
    //               name="photo"
    //               defaultValue={photo}
    //               required
    //               className="w-full px-3 py-2 border border-gray-300 text-sm"
    //             />
    //           </div>
    //         </div>

    //         {/* Submit Button */}
    //         <input
    //           type="submit"
    //           value="Update Event"
    //           className="mt-5 btn bg-gradient-to-l from-[#1a8012] to-[#14590e] text-white rounded-lg font-medium shadow-md hover:from-[#14590e] hover:to-[#1a8012] transition-all duration-300 w-full"
    //         />
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default UpdateEvent;
