import React from 'react';
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
export default function Footer() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col h-full sm:flex-row">
            <div className="flex-1 relative sm:flex-col flex-row">
                <div className="bg-gray-100 h-full " style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2024/02/19/08/49/hibiscus-8582876_1280.jpg)", backgroundSize: "cover" }}>
                    {/* Content for the second half */}
                    <div className="h-full flex flex-col justify-center items-center  " style={{ backdropFilter: "blur(5px)" }}>
                        <h1 className='text-lg md:text-2xl mt-12 pb-4 shadow-lg  text-white'>Share Your Thought </h1>
                        <textarea className='w-60 h-20 mb-4 border-black rounded p-2 resize-none' placeholder='Type your message here'></textarea>
                        <button className='bg-red-600 rounded-lg px-4 font-bold py-2 cursor-pointer hover:text-gray-800   text-white '>Sumbit</button>
                        
                        <div className="flex items-center justify-center space-x-6 mb-12 py-4">
                    <FaInstagram className="text-3xl text-white hover:text-gray-800 cursor-pointer" />
                    <FaFacebookSquare className="text-3xl text-white hover:text-gray-800 cursor-pointer" />
                    <SiGmail className="text-3xl text-white hover:text-gray-800 cursor-pointer" />
                    <CiLinkedin className="text-3xl text-white hover:text-gray-800 cursor-pointer" />
                </div>
                
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="h-full p-10 ">
                    {/* Content for the first half */}
                    <div className="h-full flex flex-col md:flex-row justify-around items-center">
                        <div className='flex flex-col justify-center text-center'>
                            <h1 className='text-xl bg-gray-300 px-4 py-1 rounded-lg mb-4 font-bold '>Courses</h1>
                            <span onClick={()=>{navigate("/aboutus")}}> <p className='mt-2 mb-2 underline cursor-pointer '>About us</p></span>
                            <span onClick={()=>{navigate("/whatweoffer")}}> <p className='mt-2 mb-2 underline cursor-pointer '>What We Offer</p></span>
                            
                        </div>
                        <div className='flex flex-col justify-center mt-4 text-center'>
                            <h1 className='text-xl bg-gray-300 px-4 py-1 rounded-lg mb-4 font-bold '>Contact</h1>
                            <h1 className='text-blue-700 font-semibold'>Phone: 123-456-7890</h1>
                            <h1 className='text-blue-700 font-semibold'>Email: info@firststep.com</h1>
                        
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
