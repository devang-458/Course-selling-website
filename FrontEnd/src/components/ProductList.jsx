import React from 'react'

export default function ProductList() {
    return (
        <div className="flex justify-center pb-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-xl border-black h-60 w-60 sm:h-52 cursor-pointer sm:w-80">
              <h1 className="text-lg font-bold p-4 md:text-2xl bg-gray-100 rounded-t-lg shadow">Training Course</h1>
              <img src='https://imgs.search.brave.com/HXJ-NA5pgA6G9uHS3ElngJmkkzO62mwiMta9Fm5cN-4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/My8wOC8wNS8wNy90/cmFpbmluZy0zMjA3/ODQxXzY0MC5qcGc'
                className='w-full h-[180px] object-cover rounded-b-lg'/>
            </div>
            <div className="bg-white rounded-lg shadow-xl border-black h-60 w-60 sm:h-52 cursor-pointer sm:w-80">
              <h1 className="text-lg font-bold p-4 md:text-2xl bg-gray-100 rounded-t-lg shadow">Training Course</h1>
              <img src='https://th.bing.com/th/id/OIP.Sg034aXqfDmRi4ufNLF5NQAAAA?rs=1&pid=ImgDetMain'
                className='w-full h-[180px] object-cover rounded-b-lg'/>
            </div>
            <div className="bg-white rounded-lg shadow-xl border-black h-60 w-60 sm:h-52 cursor-pointer sm:w-80">
              <h1 className="text-lg font-bold p-4 md:text-2xl bg-gray-100 rounded-t-lg shadow">Training Course</h1>
              <img src='https://th.bing.com/th/id/OIP.PEHPr4-8gPMWpB24BSOaOgHaEz?w=770&h=500&rs=1&pid=ImgDetMain'
                className='w-full h-[180px] object-cover rounded-b-lg'/>
            </div>
          </div>
        </div>
      );
    }