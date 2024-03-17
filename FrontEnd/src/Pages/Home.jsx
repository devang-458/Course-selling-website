import React from 'react'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CompanyGoal from '../components/CompanyGoal'
import ProductList from '../components/ProductList'
import Clock from "../components/Clock"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Clock/>
      <ProductList />
      <CompanyGoal />
      <Footer />
    </div>
  )
}
