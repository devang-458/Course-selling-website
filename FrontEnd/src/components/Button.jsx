import React from 'react'
import Link from "react-router-dom"

export default function Button({label, onClick ,to}) {
  return (
    <div   className='border mr-4 shadow-lg text-sm px-4 md:px-10 rounded-lg bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 cursor-pointer'>
       <Link to={to}><button onClick={onClick} >{label}</button></Link>
    </div>
  )
}
