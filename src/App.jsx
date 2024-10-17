import { useState } from 'react'
import  Main from './Components/Recipe/Main'
import Home from './Components/HomePage/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
 <BrowserRouter>
 <Routes>
  <Route path="/recipe" element={<Main/>}/>
  <Route path="/" element={<Home/>}/>
 </Routes>
 </BrowserRouter>
     
    </>
  )
}

export default App
