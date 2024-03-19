import React from 'react'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CompanyGoal from '../components/CompanyGoal'
import ProductList from '../components/ProductList'
import Clock from "../components/Clock"
import LoggedInHeader from '../components/LoggedInHeader'

export default function LoggedIn() {
  return (
    <div>
      <LoggedInHeader />
      <Hero />
      <Clock/>
      <ProductList />
      <CompanyGoal />
      <Footer />
    </div>
  )
}
