import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const navigate = useNavigate()
  return (
    <div  className="flex flex-col md:flex-row justify-center rounded-xl h-fit sm:h-screen mx-16 sm:mx-38 ">
      <div className="flex justify-center bg-slate-100  border-4 rounded-lg flex-col mt-2 px-14">
        <h1 className="mt-2 text-2xl sm:text-4xl md:text-6xl font-bold text-center text-black">Our Products</h1>
        <div className="border-b-4 mt-1 border-black w-1/2 mx-auto "></div>
        <div className="flex flex-col sm:flex-row justify-center items-center m-6">
          <ProductCard
          onClick={()=>{
            navigate("/training-course")
          }}
          label={"Enroll now"}
          title="Training Course"
          imageUrl="https://imgs.search.brave.com/jrZOI0ALvjQm4oB-0U3E00LY1qkRU6Lav7QVE8OEXI0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by93ZWJpbmFyLWUt/bGVhcm5pbmctc2tp/bGxzLWJ1c2luZXNz/LWludGVybmV0LXRl/Y2hub2xvZ3ktY29u/Y2VwdHMtdHJhaW5p/bmctd2ViaW5hci1l/LWxlYXJuaW5nLXNr/aWxsc18yNzYzNC03/OTcuanBnP3NpemU9/NjI2JmV4dD1qcGc"
        
          
          />
          <ProductCard
          onClick={()=>{
            navigate("/resume-buildup")
          }}
          label={"Enroll now"}
            title="Resume Buildup"
            imageUrl="https://imgs.search.brave.com/jeJkk3dWJB3PJUr_P9JetT84Px2J5JKMXDlY1ITsqmY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ4/MDA5NTg2OS9waG90/by9zdHVkZW50LW9y/LW1hbi11c2UtY29t/cHV0ZXItZm9yLWVs/ZWFybmluZy1lZHVj/YXRpb24tb25saW5l/LWludGVybmV0LXRl/Y2hub2xvZ3ktd2Vi/aW5hci1vbmxpbmUu/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9bEFGUFFP/cl9CdmpmcjEyMzVF/Y29zR1locjRLZ1V0/dUJXMWp6TXFNVTA1/dz0"
          />
        </div>
      </div>
    </div>
  );
}

function ProductCard({ title, imageUrl ,onClick, label }) {
  return (
    <div className="py-4 px-4 rounded-3xl border-2 m-4">
        <div className="flex flex-col  justify-between  rounded-lg shadow-2xl border-black  w-60 cursor-pointer sm:w-80">
            <h1 className="text-lg font-bold p-4 md:text-xl bg-gray-100 rounded-t-lg shadow-md">{title}</h1>
            <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-b-lg" />
            <button className='bg-blue-600 rounded-lg px-6 font-bold py-2 m-4 cursor-pointer h-10  text-white hover:bg-blue-700' onClick={onClick}>{label}</button>
        </div>
      
    </div>
  );
}
