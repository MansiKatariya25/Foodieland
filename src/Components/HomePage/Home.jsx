import React from 'react'
import Navbar from '../Common/Navbar'
import Hero from './Hero'
import Category from './Category'
import Cards from './Cards'
import Footer from '../Common/Footer'


function Home() {
  return (
    <div>
        <Navbar/>
      <Hero />
      <Category />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home
