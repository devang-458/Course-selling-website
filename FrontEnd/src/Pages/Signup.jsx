import React, { useState } from 'react';
import { Inputbox } from '../components/Inputbox';
import SubHeading from '../components/SubHeading';
import Button from '../components/Button';
import CheckBox from '../components/CheackBox';
import { useNavigate } from 'react-router-dom';
import BottomWarning from '../components/BottomWarning';
import Heading from '../components/Heading';
import PasswordInput from '../components/PasswordInput';

export default function Signup() {

  const [firstName , setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const Navigate = useNavigate();

  return (
    <div className='flex flex-col sm:flex-row'>
      <div className='bg-blue-100 h-screen flex justify-center sm:w-1/2'>
        <div className='flex flex-col  justify-center '>
            <div className='bg-white rounded-2xl text-center  justify-center w-72 md:w-96 h-max p-4 px-5 py-5'>
                <Heading label={"Signup"} />
                
                <SubHeading label={"write your information here"}/>
                
                <Inputbox label={"Email:-"} onChange={e=>{
                  setUsername(e.target.value)
                }} placeholder={"Email"}/>

                <PasswordInput setPassword={setPassword}/>
                
                <Inputbox label={"FirstName:-"} onChange={e => {
                  setFirstName(e.target.value)
                }} placeholder={"Eren"}/>
                
                <Inputbox label={"LastName:-"} 
                onChange={e => {
                  setLastName(e.target.value)
                }} placeholder={"Yeager"}/>
                
                <CheckBox  onChange={e => {
                  setAcceptTerms(!acceptTerms)
                }}/>
                
                <Button label={"Signup"} onClick={async ()=>{
                  if(!acceptTerms){
                    console.log("Please accept the terms and conditions");
                    return;
                  }

                  try{
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                      username, password, firstName, lastName
                    },{
                      headers: {
                        "Content-Type": "application/json"
                      }
                    })
                    localStorage.setItem("token", response.data.token)
                    localStorage.setItem("userId", response.data.userId)
                    Navigate("/dashboard")
                  }
                  catch(error){
                    console.error("Error during signup:", error)
                  }
                  
                }}/>

                <BottomWarning label={"Already have an account"} buttonText={"SignIn"} to={"/signin"}/>
                
            </div>
        </div>
    </div>
    {/* about first step */}
    <div className='flex justify-center items-center  text-black w-1/2 rounded-sm bg-blue-50'>
              <div className=' bg-white p-8  rounded-lg md:block hidden '>
                <h1 className='text-4xl font-bold flex flex-row mb-2'>Welcome to <p className='text-blue-700'>"First Step"</p></h1>
                <p className='text-lg font-serif '>
                Join our community and start sharing your thoughts and stories.
                </p>
              </div>
    </div>
    </div>
  )
}
