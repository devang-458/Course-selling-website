import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutUsPage from '../components/AboutUsPage'
import LoggedInHeader from '../components/LoggedInHeader'
import WhatweOffer from '../components/WhatweOffer'

export default function Aboutus() {
  return (
    <div>
        <LoggedInHeader/>
        <WhatweOffer />
        <Footer />
    </div>
  )
}
