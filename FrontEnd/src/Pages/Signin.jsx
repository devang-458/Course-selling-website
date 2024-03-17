import React, { useState } from 'react';
import { Inputbox } from '../components/Inputbox';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import BottomWarning from '../components/BottomWarning';
import axios from 'axios';
import PasswordInput from '../components/PasswordInput';

export default function Signin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();


  return (
    <div className='flex flex-col sm:flex-row'>
    <div className='justify-center items-center text-black w-1/2 rounded-sm bg-blue-50 flex'>
              <div className=' bg-white p-10 rounded-lg md:block hidden '>
                <h1 className='text-2xl font-bold flex flex-row mb-2'>Welcome to <p className='text-blue-700 cursor-pointer' onClick={Navigate('/')}>"First Step"</p></h1>
                <p className='text-lg font-serif '>
                Join our community and start sharing your thoughts and stories.
                </p>
              </div>
    </div>
      <div className='bg-blue-100 h-screen flex justify-center sm:w-1/2'>
        <div className='flex flex-col justify-center'>
            <div className='bg-white rounded-2xl text-center md:w-96 p-4 h-max px-5 py-5'>
                <Heading label={"SignIn"} />
                
                <SubHeading label={"write your information here"}/>
                
                <Inputbox label={"Email:-"} onChange={e=>{
                  setUsername(e.target.value)
                }} placeholder={"Email"}/>

                <PasswordInput setPassword={setPassword}/>
                
                <Button label={"Signin"} onClick={async ()=>{
                  try{
                    const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                      username, password
                    });
                    localStorage.setItem("token", response.data.token)
                    localStorage.setItem("userId", response.data.userId)
                    Navigate("/dashboard")
                  }
                  catch(error){
                    console.error("Error during signup:", error)
                  }
                  
                }}/>

                <BottomWarning label={"Don't have an account"} buttonText={"Signup"} to={"/signup"}/>  
            </div>
        </div>
    </div>
    
    </div>
    
    
  )
}
