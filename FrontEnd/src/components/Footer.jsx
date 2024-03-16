import React from 'react';
import Button from './Button';
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
    return (
        <div>
            <div className="flex flex-row h-full">
            <div className="flex-1">
                <div className="bg-gray-200 h-full p-10">
                    {/* Content for the first half */}
                    <div className="h-full flex flex-col md:flex-row justify-around items-center">
                        <div className='flex flex-col justify-center text-center'>
                            <h1 className='text-xl bg-gray-300 px-4 py-1 rounded-sm mb-4 font-bold '>Courses</h1>
                            <p className='mt-2 mb-2 underline cursor-pointer '>About</p>
                            <p className='mt-2 mb-2 underline cursor-pointer'>What We Offer</p>
                            <p className='mt-2 mb-2 underline cursor-pointer'>Catalog</p>
                        </div>
                        <div className='flex flex-col justify-center  text-center'>
                            <h1 className='text-xl bg-gray-300 px-4 py-1 rounded-sm mb-4 font-bold '>Community</h1>
                            <p className='mt-2 mb-2 underline cursor-pointer'>Leaners</p>
                            <p className='mt-2 mb-2 underline cursor-pointer'>Partners</p>
                            <p className='mt-2 mb-2 underline cursor-pointer'>Blog</p>
                            <p className='mt-2 mb-2 underline cursor-pointer'>Catalog</p>
                        </div>
                        <div className='flex flex-col justify-center  text-center'>
                            <h1 className='text-xl bg-gray-300 px-4 py-1 rounded-sm mb-4 font-bold '>More</h1>
                            <p className='mt-2 mb-2 underline cursor-pointer'>Terms</p>
                            <p className='mt-2 mb-2 underline cursor-pointer'>Privacy</p>
                            <p className='mt-2 mb-2 underline cursor-pointer'>Help</p>
                            <p className='mt-2 mb-2 underline cursor-pointer'>Contact</p>
                            <p className='mt-2 mb-2 underline cursor-pointer'>Investors</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 relative">
                <div className="bg-gray-100 h-full" style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2024/02/19/08/49/hibiscus-8582876_1280.jpg)", backgroundSize: "cover" }}>
                    {/* Content for the second half */}
                    <div className="h-full flex flex-col justify-center items-center " style={{ backdropFilter: "blur(5px)" }}>
                        <h1 className='text-lg md:text-2xl pb-4 shadow-lg text-white'>Share Your Thought </h1>
                        <textarea className='w-60 h-20 mb-4 border-black rounded p-2 resize-none' placeholder='Type your message here'></textarea>
                        <Button label={"Submit"} />
                        <div className="flex items-center justify-center space-x-6 py-4">
                    <FaInstagram className="text-3xl text-white hover:text-gray-800 cursor-pointer" />
                    <FaFacebookSquare className="text-3xl text-white hover:text-gray-800 cursor-pointer" />
                    <FaXTwitter className="text-3xl text-white hover:text-gray-800 cursor-pointer" />
                    <CiLinkedin className="text-3xl text-white hover:text-gray-800 cursor-pointer" />
                </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
       
        </div>
        </div>
    );
}
