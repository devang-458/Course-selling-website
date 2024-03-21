import React, { useState } from 'react';
import SubHeading from '../components/SubHeading';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Inputbox } from '../components/Inputbox';
import Heading from '../components/Heading';

export default function ResetPassword() {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfiemPassword] = useState("");
  const Navigate = useNavigate();

  const handleSumbit = async ()=>{
    try{
        if(password !== confirmPassword){
            console.error("Password do not match")
            return;
        }
        const response = await axios.post("http://localhost:3000/api/v1/user/reset-password",{
            newPassword: password,
            resetToken: token
        })
        console.log(response.data)
        Navigate("/signin")
    }
    catch(error){
        console.error("Error submiting forget password request:", error)
    }
  }


  return (
    <div className='bg-slate-400 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='bg-white rounded-2xl text-center w-96 p-4 h-max px-5 py-5'>
                <Heading label={"Reset-Password"} />
                
                <SubHeading label={"write your information here"}/>
                
                <Inputbox label={"Password:-"} onChange={e=>{
                  setPassword(e.target.value)
                }} placeholder={"Password"}/>
                
                <Inputbox label={"Confirm Password:-"} onChange={e=>{
                  setConfiemPassword(e.target.value)
                }} placeholder={"Confirm Password"}/>

                <Button label={"Submit"} onClick={handleSumbit}/>
                
            </div>
        </div>
    </div>
  )
}
