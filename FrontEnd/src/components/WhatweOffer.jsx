import React from 'react';
import { useNavigate } from 'react-router-dom';

const WhatweOffer = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-b from-blue-400 to-blue-500 py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 lg:mb-12">Discover Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Interview Preparation</h3>
            <p className="text-lg text-gray-700 mb-6">We provide personalized interview preparation sessions to help you ace your job interviews. Our expert guidance and mock interview practice ensure you're fully prepared.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Resume Building</h3>
            <p className="text-lg text-gray-700 mb-6">Crafting a professional resume is essential for standing out in today's competitive job market. Our resume building services help you create a compelling resume that highlights your skills and experiences.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">Career Coaching</h3>
            <p className="text-lg text-gray-700 mb-6">Navigating your career path can be challenging. Our career coaching sessions provide valuable insights and guidance to help you make informed decisions and progress in your professional journey.</p>
            <h1 className='text-gray-700 bg-gray-200 p-1 flex flex-col text-center rounded-lg font-bold text-2xl'>upcoming</h1>
          </div>
          <button className='bg-white font-semibold text-2xl text-gray-700  rounded border-2 p-2 ' onClick={()=>{
            navigate("/")
          }} >Home</button>
        </div>
      </div>
      
    </section>
  );
};

export default WhatweOffer;
