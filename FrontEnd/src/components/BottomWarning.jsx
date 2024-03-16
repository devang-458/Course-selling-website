import React from 'react'
import { Link } from 'react-router-dom'

export default function BottomWarning({label, buttonText, to}) {
  return (
    <div>
        <div className='text-sm text-slate-500 p-1'>
            {label}
        </div>
        <Link to={to} className='border rounded-lg  hover:bg-slate-700 hover:text-white bg-slate-400 py-2 text-sm flex justify-center' >{buttonText}</Link>
        <Link to={"/forget-password"}><button className='underline pt-2'>Forget Password</button></Link>
    </div>
  )
}
