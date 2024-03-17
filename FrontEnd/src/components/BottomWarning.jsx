import React from 'react'
import { Link } from 'react-router-dom'

export default function BottomWarning({label, buttonText, to}) {
  return (
    <div>
        <div className='text-sm mt-2 text-slate-500'>
            {label}
        </div>
        <div className='md:px-3 px-1'>
        <Link to={to} className='border rounded-lg  hover:bg-slate-700 hover:text-white bg-slate-400 py-2 text-sm flex justify-center sm:w-80 w-60' >{buttonText}</Link>
        </div>
        <Link to={"/forget-password"}><button className='underline pt-2'>Forget Password</button></Link>
    </div> 
  )
}
