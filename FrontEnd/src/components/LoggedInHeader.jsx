import React, { useState } from 'react';
import HeaderLogo from "../assets/logo.svg";
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';

export default function LoggedInHeader() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate()

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className='sticky top-0 z-10 bg-white w-full'>
      <div className='flex justify-between px-4 py-5 shadow-lg'>
        <img className='w-20 sm:w-40' alt='Header Logo' src={HeaderLogo}/>
        <div className='flex flex-row justify-center '>
            <h1 className='text-2xl pr-4 pt-1 '>Hello</h1>
            <span className='text-2xl bg-gray-500 w-10 h-10 text-center rounded-full pt-1'>U</span>
        </div>
      </div>
    </div>
  );
}
