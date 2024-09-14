import React, { useState } from 'react'
import Navbar from './components/Navbar/navbar' 
import {Route , Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/Loginpopup/Loginpopup'

function App() {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}

    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes> 
        <Route  path='/'element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path= '/order' element={<PlaceOrder/>}/>
        
      </Routes>
    </div>
    <Footer/> 
    
    </>
   

  )
}

export default App