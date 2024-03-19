import React from 'react'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CompanyGoal from '../components/CompanyGoal'
import ProductList from '../components/ProductList'
import { JoinUs } from '../components/Joinus'
import EmployeeList from '../components/EmployeeList'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProductList />
      <JoinUs />
      <CompanyGoal />
      <EmployeeList/>
      <Footer />
    </div>
  )
}
