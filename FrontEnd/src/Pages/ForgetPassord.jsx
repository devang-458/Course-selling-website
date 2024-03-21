import React, { useState } from 'react';
import SubHeading from '../components/SubHeading';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Inputbox } from '../components/Inputbox';
import Heading from '../components/Heading';

export default function ForgetPassword() {
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpConfirmed, setIsOtpConfirmed] = useState(false);
  const Navigate = useNavigate();

  const handleSumbit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/forget-password", {
        username: username
      });
      console.log(response.data);
      setOtp(response.data.otp); // Assuming the server responds with the generated OTP
      setIsOtpConfirmed(false); // Reset confirmation status
    } catch (error) {
      console.error("Error submitting forget password request:", error);
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleConfirmOtp = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/verify-otp", {
        username: username,
        otp: otp
      });
  
      if (response.data.success) {
        setIsOtpConfirmed(true);
      } else {
        console.error("OTP verification failed:", response.data.error);
        // Handle OTP verification failure, such as displaying an error message to the user
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      // Handle error, such as displaying an error message to the user
    }
  };
  

  const handleSendOtpEmail = async () => {
    try {
      await axios.post("http://localhost:3000/api/v1/user/send-otp-email", {
        email: username,
        otp: otp // Include OTP in the request to send it via email
      });
      console.log("OTP sent to email successfully");
    } catch (error) {
      console.error("Error sending OTP email:", error);
    }
  };

  return (
    <div className='bg-slate-400 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='bg-white rounded-2xl text-center w-96 p-4 h-max px-5 py-5'>
          <Heading label={"Forget-Password"} />
          <SubHeading label={"write your information here"} />
          <Inputbox label={"Email:-"} onChange={e => {
            setUsername(e.target.value);
          }} placeholder={"Email"} />
          <Button label={"Submit"} onClick={handleSumbit} />
        </div>
        {otp && !isOtpConfirmed && (
          <div className='bg-white rounded-2xl text-center w-96 p-4 h-max px-5 py-5 mt-4'>
            <Inputbox label={"Enter OTP:-"} value={otp} onChange={handleOtpChange} placeholder={"OTP"} />
            <Button label={"Confirm OTP"} onClick={handleConfirmOtp} />
          </div>
        )}
        {otp && isOtpConfirmed && (
          <div className='bg-white rounded-2xl text-center w-96 p-4 h-max px-5 py-5 mt-4'>
            <Button label={"Send OTP to Email"} onClick={handleSendOtpEmail} />
          </div>
        )}
      </div>
    </div>
  );
}
