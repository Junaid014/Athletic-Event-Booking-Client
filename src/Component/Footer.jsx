import React, { useState } from 'react';
import logo from '../assets/6272__1_-removebg-preview.png'
import { SiFacebook } from 'react-icons/si';
import { FaPhoneVolume, FaXTwitter } from 'react-icons/fa6';
import { IoLocationSharp, IoLogoLinkedin, IoLogoYoutube } from 'react-icons/io5';
import { IoIosArrowForward, IoIosArrowRoundUp, IoMdMailUnread } from 'react-icons/io';
import Swal from 'sweetalert2';
const Footer = () => {

    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'Email Required',
                text: 'Please enter your email before subscribing.',
                confirmButtonColor: '#3085d6',
            });
            return;
        }

        if (!emailPattern.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter a valid email address.',
                confirmButtonColor: '#d33',
            });
            return;
        }

        Swal.fire({
            icon: 'success',
            title: 'Subscribed Successfully!',
            text: 'You have been added to our newsletter.',
            timer: 2000,
            showConfirmButton: false,
            position: 'top',
        });

        setEmail('');
    };
    return (
        <footer className='bg-[#1e1e1e]'>
            <div className='w-11/12 mx-auto pt-24'>
                <div className='lg:flex justify-between lg:items-center  border-b pb-14 border-[#F5F5F5]  '>
                    <div className='flex  mb-6 lg:mb-0 items-center gap-9 lg:gap-[420px] '>
                        <div className=' flex gap-4 items-center'>
                            <img className='w-20 h-20 rounded-full text-[#23b016]' src={logo} alt="" />
                            <div className='flex flex-col'>
                                <a className="text-2xl  text-white font-extrabold roboto">Athletic Hub </a>
                                <p className="text-sm  text-white font-medium">An Athletics Platform </p>
                            </div>
                        </div>
                        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <p className='text-white  text-4xl p-4 rounded-full w-17 bg-[#23b016] cursor-pointer'>
                                <IoIosArrowRoundUp />
                            </p>
                        </div></div>
                    <div className="flex gap-5 cursor-pointer">

                        <p className=' bg-[#23b016] w-17 p-4'>
                            <a href="https://x.com/"><SiFacebook className="text-white text-3xl" /></a>
                        </p>
                        <p className=' bg-[#23b016] w-17 p-4'>
                            <a href="https://x.com/"><FaXTwitter className="text-white text-3xl" /></a>
                        </p>
                        <p className=' bg-[#23b016] w-17 p-4'>
                            <a href="https://x.com/"><IoLogoLinkedin className="text-white text-3xl" /></a>
                        </p>
                        <p className=' bg-[#23b016] w-17 p-4'>
                            <a href="https://x.com/"><IoLogoYoutube className="text-white text-3xl" /></a>
                        </p>


                    </div>
                </div>

                {/* second part */}

                <div className='pt-14 lg:flex  lg:justify-between border-b pb-14 border-[#F5F5F5]'>
                    {/* quick links */}
                    <div className='mb-7 lg:mb-0'>
                        <h2 className='text-3xl font-bold roboto text-white mb-4'>Quick Links</h2>
                        <div className='text-white mb-2 flex gap-2 items-center'>
                            <p className='text-2xl font-medium'><IoIosArrowForward /></p>
                            <a className='text-lg font-medium hover:text-[#23b016]' href="">About Us</a>
                        </div>
                        <div className='text-white mb-2 flex gap-2 items-center'>
                            <p className='text-2xl font-medium'><IoIosArrowForward /></p>
                            <a className='text-lg font-medium hover:text-[#23b016]' href="">
                                Contact Us</a>
                        </div>

                        <div className='text-white mb-2 flex gap-2 items-center'>
                            <p className='text-2xl font-medium'><IoIosArrowForward /></p>
                            <a className='text-lg font-medium hover:text-[#23b016]' href="">Programs</a>
                        </div>
                        <div className='text-white  flex gap-2 items-center'>
                            <p className='text-2xl font-medium'><IoIosArrowForward /></p>
                            <a className='text-lg font-medium hover:text-[#23b016]' href="">Events</a>
                        </div>
                    </div>
                    {/* Our Programs*/}
                    <div className='mb-7 lg:mb-0'>
                        <h2 className='text-3xl font-bold roboto text-white mb-4'>Our Programs</h2>
                        <div className='text-white mb-2 flex gap-2 items-center'>
                            <p className='text-2xl font-medium'><IoIosArrowForward /></p>
                            <a className='text-lg font-medium hover:text-[#23b016]' href="">
                                Hurdles</a>
                        </div>
                        <div className='text-white mb-2 flex gap-2 items-center'>
                            <p className='text-2xl font-medium'><IoIosArrowForward /></p>
                            <a className='text-lg font-medium hover:text-[#23b016]' href="">
                                Swimming</a>
                        </div>
                        <div className='text-white mb-2 flex gap-2 items-center'>
                            <p className='text-2xl font-medium'><IoIosArrowForward /></p>
                            <a className='text-lg font-medium hover:text-[#23b016]' href="">
                                Sprint</a>
                        </div>

                        <div className='text-white mb-2 flex gap-2 items-center'>
                            <p className='text-2xl font-medium'><IoIosArrowForward /></p>
                            <a className='text-lg font-medium hover:text-[#23b016]' href="">Long Jump </a>
                        </div>
                        <div className='text-white  flex gap-2 items-center'>
                            <p className='text-2xl font-medium'><IoIosArrowForward /></p>
                            <a className='text-lg font-medium hover:text-[#23b016]' href="">High Jump</a>
                        </div>
                    </div>
                    {/* contact info*/}
                    <div className='mb-7 lg:mb-0'>
                        <h2 className='text-3xl font-bold roboto text-white mb-4'>Contact Info
                        </h2>
                        <div className='text-white mb-2 flex gap-2 items-center'>
                            <p className='text-2xl font-medium'><FaPhoneVolume /></p>
                            <a className='text-lg font-medium hover:text-[#23b016]' href="">
                                +98 7654 3210</a>
                        </div>
                        <div className='text-white mb-2 flex gap-2 items-center'>
                            <p className='text-2xl font-medium'><IoMdMailUnread /></p>
                            <a className='text-lg font-medium hover:text-[#23b016]' href="">
                                athletichub@mail.com</a>
                        </div>

                        <div className='text-white mb-2 flex gap-2 items-center'>
                            <p className='text-2xl font-medium'><IoLocationSharp /></p>
                            <a className='text-lg font-medium hover:text-[#23b016]' href="">17059 Old Town St, London </a>
                        </div>

                    </div>
                    {/* newsletter */}
                    <div>
                        <h2 className='text-3xl font-bold roboto text-white mb-4'>Subscribe Newsletter
                        </h2>
                        <p className='text-white text-lg font-medium '>Subscribe to Our Newsletter to receive <br /> the newest updates and info.</p>
                        <div className='flex gap-3 mt-4'>
                            <input
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input py-6"
                            />
                            <button
                                onClick={handleSubscribe}
                                className='btn bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg shadow-md hover:from-green-700 hover:to-green-900 transition duration-300 font-semibold px-6 py-6'
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className='pt-14 pb-10 text-white flex justify-between'>
                    <h3 className='text-lg font-semibold roboto'>Copyright © 2025 Strivers, All rights reserved. Present by CreedCreatives</h3>
                    <div className='flex '>
                        <p className='text-lg font-medium hover:text-[#23b016] border-r border-white pr-6'>Terms & Conditions</p>
                        <p className='text-lg font-medium hover:text-[#23b016] pl-6'>Privacy Policys</p>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;