import React, { useState } from 'react';
import HeaderLogo from "../assets/logo.svg";
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate()

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }


  return (
    <div className='sticky top-0 z-10 bg-white w-full ' >
      <div className='flex justify-between px-4 py-5 shadow-lg'>
        
        <div className='flex flex-row '>
          <Link to="/signup"><button className='bg-blue-600 rounded-lg px-6 font-bold py-2 cursor-pointer mr-4 text-white hover:bg-blue-700  '>Signup</button></Link>
          <Link to="/signin"><button className='bg-blue-600 rounded-lg px-6 font-bold py-2 cursor-pointer  text-white hover:bg-blue-700  '>Signin</button></Link>
        </div>
      </div>
    </div>
  );
}
