import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import Footer from '../../Component/Footer';

const ContactUs = () => {
  return (
   <section>
        <section className="p-10 mb-20 mt-10 w-11/12 mx-auto bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-700 roboto">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6 text-gray-700">
          <p>
            We’d love to hear from you! Whether you have questions, feedback, or want to collaborate,
            feel free to reach out.
          </p>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-green-600" size={28} />
            <div>
              <p className="font-semibold">Phone</p>
              <p>+1-202-555-0150</p>
              <p>+1-202-555-0151</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-green-600" size={28} />
            <div>
              <p className="font-semibold">Email</p>
              <p>support@athletichub.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-green-600" size={28} />
            <div>
              <p className="font-semibold">Address</p>
              <p>123 Athletic Ave, MohammadPur City, Dhaka</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-gray-700">
          <p className="font-semibold mb-4">Follow Us</p>
          <div className="flex gap-6 text-green-600">
            <a href="https://twitter.com/athletichub" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter size={32} className="hover:text-green-800 transition" />
            </a>
            <a href="https://wa.me/12025550150" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp size={32} className="hover:text-green-800 transition" />
            </a>
          </div>

          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="textarea textarea-bordered w-full"
              required
            ></textarea>

            <button
              type="submit"
              className="btn bg-gradient-to-r from-green-600 to-green-500 text-white w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    <Footer/>
   </section>
  );
};

export default ContactUs;
