import React, { useState } from "react";

const PasswordInput = ({setPassword}) => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return <div>
        <div className="flex justify-between pt-1 py-1">
        
        <label htmlFor="password" className="text-sm font-medium text-left pt-2">Password:-</label>
        
        <button  className="border rounded p-1  text-sm bg-slate-500 mr-3 text-white " 
        onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"}
        </button>
        
        </div>

        <input 
        type={showPassword ? 'text' : 'password'}
        className="p-1 text-sm w-60 md:w-80 border-slate-500 rounded border px-2"
        id="password"
        placeholder="***********"
        name="password"
        onChange={(e)=>{
            setPassword(e.target.value);
        }}
        ></input>
        
    </div>
}


export default PasswordInput;