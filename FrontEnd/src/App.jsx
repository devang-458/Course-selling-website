import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import LoggedIn from './Pages/LoggedIn'
import AboutUsPage from './components/AboutUsPage'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/loggedin" element={<LoggedIn />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/aboutus' element={<Abou />} />
    </Routes>

    </BrowserRouter>
  )
}

export default App
