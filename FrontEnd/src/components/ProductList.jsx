import React from 'react';

function ProductCard({title, imageUrl}){
  return (
    <div className='flex flex-col sm:flex-row  h-screen'>
      {/* Left Section */}
      <div className='flex-1 flex  rounded justify-center items-center'>
        <img className='rounded-lg shadow-lg' src='https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      </div>
      
      {/* Right Section */}
      <div className='flex-1 flex justify-center items-center bg-white'> 
        <div className='text-center p-10 text-2xl'>
          <p>At our company, we offer training courses to help you learn new skills and improve your knowledge. We also create standout resumes to help you land your dream job. Our goal is to empower you for success in your career journey.</p>
        </div>
      </div>
      </div>
  )
}

export default function ProductList(){
  const products = [{
    title: "Training Course", imageUrl: "https://imgs.search.brave.com/HXJ-NA5pgA6G9uHS3ElngJmkkzO62mwiMta9Fm5cN-4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/My8wOC8wNS8wNy90/cmFpbmluZy0zMjA3/ODQxXzY0MC5qcGc"
  }]

  return (
    <div>
      <div>
        {products.map((product, index) => (<ProductCard key={index} title={product.title} imageUrl={product.imageUrl}/>))}
      </div>
    </div>
  )
}

  //   //<div className="bg-white rounded-lg shadow-xl border-black h-60 w-60 sm:h-52 cursor-pointer sm:w-80">
  //   <h1 className="text-lg font-bold p-4 md:text-2xl bg-gray-100 rounded-t-lg shadow">Training Course</h1>
  //   <img src='https://th.bing.com/th/id/OIP.Sg034aXqfDmRi4ufNLF5NQAAAA?rs=1&pid=ImgDetMain'
  //     className='w-full h-[180px] object-cover rounded-b-lg'/>
  // </div>
  // <div className="bg-white rounded-lg shadow-xl border-black h-60 w-60 sm:h-52 cursor-pointer sm:w-80">
  //   <h1 className="text-lg font-bold p-4 md:text-2xl bg-gray-100 rounded-t-lg shadow">Training Course</h1>
  //   <img src='https://th.bing.com/th/id/OIP.PEHPr4-8gPMWpB24BSOaOgHaEz?w=770&h=500&rs=1&pid=ImgDetMain'
  //     className='w-full h-[180px] object-cover rounded-b-lg'/>
  // </div>