import React from 'react'

export default function Button({label, onClick}) {
  return (
    <div  onClick={onClick} className='border shadow-lg text-sm px-4 md:px-10 rounded-lg bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 cursor-pointer'>
        {label}
    </div>
  )
}
