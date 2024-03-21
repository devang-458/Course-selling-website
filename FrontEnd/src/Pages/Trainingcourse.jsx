import React from 'react'
import Course from '../components/Course'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LoggedIn from './LoggedIn'
import LoggedInHeader from '../components/LoggedInHeader'

export default function Trainingcourse() {
  return (
    <div>
        <LoggedInHeader/>
        <Course/>
        <Footer />
    </div>
  )
}
