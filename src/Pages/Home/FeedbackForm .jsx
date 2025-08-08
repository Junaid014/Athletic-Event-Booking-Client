import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { MdEmail, MdOutlineSubject, MdPhone, MdFeedback } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthContext';

const FeedbackForm = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: user?.email || '',
    name: user?.displayName || '',
    phone: '',
    subject: '',
    message: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: 'success',
      title: 'Thank you!',
      text: 'Your feedback has been submitted.',
      showConfirmButton: false,
      timer: 2000,
    });

    setFormData({
      email: user?.email || '',
      name: user?.displayName || '',
      phone: '',
      subject: '',
      message: '',
      agree: false,
    });
  };

  return (
    <div className=" mb-20 mt-20 ">
        <h3 className="lg:text-3xl text-2xl font-bold text-center text-[#1a8012] mb-2 flex justify-center items-center gap-2">
          <MdFeedback className="text-4xl mt-1" />
          <span>Leave Us Your Feedback</span>
        </h3>
        <p className='text-center text-gray-700'>Stay connected with us to discover new and exciting events.Your feedback <br /> helps us make every experience better.</p>
      <div className=" rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-[#dcfce7] to-[#bbf7d0] w-11/12 mx-auto">
       
       <div className='lg:px-34 px-4 py-10 mt-10'>
               <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up transition-all duration-500"
        >
          <div className="relative">
            <MdEmail className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="input focus:outline-none focus:ring-0 focus:border-gray-700 w-full pl-10"
              required
            />
          </div>

          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="input focus:outline-none focus:ring-0 focus:border-gray-700 w-full pl-10"
              required
            />
          </div>

          <div className="relative">
            <MdPhone className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="input focus:outline-none focus:ring-0 focus:border-gray-700 w-full pl-10"
              required
            />
          </div>

          <div className="relative">
            <MdOutlineSubject className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="input focus:outline-none focus:ring-0 focus:border-gray-700 w-full pl-10"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your message here..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="textarea textarea-bordered md:col-span-2 w-full"
            required
          ></textarea>

          <div className="md:col-span-2 flex items-start gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="checkbox mt-1"
              required
            />
            <span className="text-sm mt-1.5 text-gray-600">
              I agree to the terms of data processing.{' '}
              <a href="#" className="text-blue-600 underline">
                Terms and Conditions
              </a>
            </span>
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="mt-2 btn bg-[#1a8012] text-white rounded-xl py-1 px-5"
            >
              Submit Feedback
            </button>
          </div>
        </form>
       </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
