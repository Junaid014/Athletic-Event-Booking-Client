import React from 'react';
import logo from '../assets/6272__1_-removebg-preview.png'
import { SiFacebook } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import {IoLogoLinkedin, IoLogoYoutube } from 'react-icons/io5';
import { IoIosArrowRoundUp } from 'react-icons/io';
const Footer = () => {
    return (
        <footer className='bg-[#1e1e1e] '>
            <div className='w-11/12 mx-auto pt-24'>
                <div className='flex justify-between items-center  border-b pb-16 border-white'>
                    <div className=' flex gap-4 items-center'>
                        <img className='w-20 h-20 rounded-full text-[#23b016]' src={logo} alt="" />
                        <div className='flex flex-col'>
                            <a className="text-2xl  text-white font-extrabold">Athletic Hub </a>
                            <p className="text-sm  text-white font-medium">An Athletics Platform </p>
                        </div>
                    </div>
                    <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <p className='text-white text-4xl p-4 rounded-full bg-[#23b016] cursor-pointer'>
                            <IoIosArrowRoundUp />
                        </p>
                    </div>
                    <div className="grid grid-flow-col gap-5 cursor-pointer">

                        <p className=' bg-[#23b016] p-4'>
                            <a href="https://x.com/"><SiFacebook className="text-white text-3xl" /></a>
                        </p>
                        <p className=' bg-[#23b016] p-4'>
                            <a href="https://x.com/"><FaXTwitter className="text-white text-3xl" /></a>
                        </p>
                        <p className=' bg-[#23b016] p-4'>
                            <a href="https://x.com/"><IoLogoLinkedin className="text-white text-3xl" /></a>
                        </p>
                        <p className=' bg-[#23b016] p-4'>
                            <a href="https://x.com/"><IoLogoYoutube className="text-white text-3xl" /></a>
                        </p>


                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;