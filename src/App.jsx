import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Category from './Components/Category'
import Cards from './Components/Cards'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Cards />
      <Footer />
    </>
  )
}

export default App
