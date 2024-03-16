import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderLogo from "../assets/logo.svg";
import Button from './Button';

export default function Header() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className='sticky top-0 z-10 bg-white w-full'>
      <div className='flex justify-between px-4 py-4 shadow-lg'>
        <img className='w-20 sm:w-40' alt='Header Logo' src={HeaderLogo}/>
        <input className='w-40 sm:w-96 border text-center border-spacing-2  font-bold rounded-lg text-sm md:text-lg' placeholder='Search...' onChange={handleSearch}></input>
        <Button label="login"/>
      </div>
    </div>
  )
}
