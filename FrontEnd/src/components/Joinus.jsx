import { Link } from "react-router-dom";
import Button from "./Button";

export function JoinUs(){
    return <div className=" mt-20 mx-16 h-fit flex justify-center mb-16 rounded-xl">
        <div className=" flex flex-col justify-center h-96 border-4 bg-slate-100  rounded-xl w-screen">
            <div className="flex items-center flex-col text-center">
            <h1 className="text-sm sm:text-2xl font-semibold p-10">
            Join us at 'First Step' to connect, share, and grow together. Whether you're here to inspire or be inspired, our platform offers a supportive space for meaningful conversations and personal development. Take the first step and join us today."
            </h1>
            <Link to="/signin"><button className='bg-blue-600 rounded-lg px-20 text-bold py-2  font-bold cursor-pointer hover:bg-blue-700  text-white '>Join Us</button></Link>
            </div>
        </div>
    </div> 
}