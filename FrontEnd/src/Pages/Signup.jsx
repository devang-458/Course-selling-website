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
  const navigate = useNavigate();

  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50'>
      <div className='bg-white rounded-2xl text-center justify-center w-72 md:w-96 h-max p-4 px-5 py-5'>
        <Heading label={"Signup"} />
        <SubHeading label={"write your information here"}/>
        <Inputbox label={"Email:-"} onChange={e=>{
          setUsername(e.target.value)
        }} placeholder={"Email"}/>
        <PasswordInput setPassword={setPassword}/>
        <Inputbox label={"FirstName:-"} onChange={e => {
          setFirstName(e.target.value)
        }} placeholder={"Eren"}/>
        <Inputbox label={"LastName:-"} onChange={e => {
          setLastName(e.target.value)
        }} placeholder={"Yeager"}/>
        <CheckBox onChange={e => {
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
            navigate("/home")
          }
          catch(error){
            console.error("Error during signup:", error)
          }
        }}/>
        <BottomWarning label={"Already have an account"} buttonText={"SignIn"} to={"/signin"}/>
      </div>
    </div>
  )
}
