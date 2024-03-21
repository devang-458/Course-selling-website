import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import LoggedIn from './Pages/LoggedIn'
import Aboutus from './Pages/Aboutus'
import WhatweOffer from './Pages/WhatweOffer'
import ForgetPassword from './Pages/ForgetPassord'
import ResetPassword from './Pages/Reset-Password'
import Trainingcourse from './Pages/Trainingcourse'
import ResumePage from './Pages/ResumePage'




function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/loggedin" element={<LoggedIn />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/aboutus' element={<Aboutus />} />
      <Route path='/whatweoffer' element={<WhatweOffer />} />
      <Route path='/Forget-Password' element={<ForgetPassword/>} />
      <Route path='/reset-Password' element={<ResetPassword />}/>
      <Route path='/training-course' element={<Trainingcourse/>} />
      <Route path='resume-buildup' element={<ResumePage />}/>
      
    </Routes>

    </BrowserRouter>
  )
}

export default App
