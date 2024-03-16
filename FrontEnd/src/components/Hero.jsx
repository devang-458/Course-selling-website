import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading after a short delay
    const timeout = setTimeout(() => {
      setImageLoaded(true);
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
     <div className='flex flex-col sm:flex-row  h-screen'>
      {/* Left Section */}
      <div className='flex-1 flex justify-center items-center bg-white'> 
        <div className='text-center'>
          <h1 className='text-4xl md:text-8xl text-blue-700 font-bold'>First Step</h1>
          <h2 className='text-4xl md:text-6xl font-bold py-4'>Take Your Step Now</h2>
          <p className='text-lg md:text-xl text-gray-500 max-w-lg mx-auto px-4'>Take the next step toward your personal and professional goals with "First Step".</p>
          <div className='flex justify-center mt-8 space-x-4'>
          <button className='border shadow-lg text-[10px] md:text-sm px-4 md:px-10 rounded-lg bg-blue-600 mt-2 hover:bg-blue-800 text-white font-bold py-4'>Get Started</button>
              <button className='border shadow-lg text-[10px] md:text-sm px-4 md:px-10 rounded-lg bg-blue-600 mt-2 hover:bg-blue-800 text-white font-bold py-4'>Learn More</button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className={`flex-1 flex justify-center items-center transition-transform ${imageLoaded ? 'translate-x-0' : 'translate-x-full'} transition-transform`} style={{maxWidth:`100%`, maxHeight:`100%`, transition:'transfrom 0.5 ease-in-out' }}>
        <img className="max-w-full max-h-full rounded-lg shadow-lg" src='https://imgs.search.brave.com/mUR3Db3pJvCgVqk3_p1iaRhIbzBt3aS-cJNZzL80fxM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9yeHFlZmVm/bDN0NWIvMXV4Tkt5/ZDEwT3ZGOHpnWHZN/SnhkSS9jYThmMGRk/OWYzNDYyYjQyNDYx/YTUxZmRiNzgxZTYx/Mi9HZXR0eUltYWdl/cy0xMTUwNTMzMDMy/LmpwZz9mbD1wcm9n/cmVzc2l2ZSZxPTgw' alt="Hero Image" />
      </div>
    </div>
  );
}
