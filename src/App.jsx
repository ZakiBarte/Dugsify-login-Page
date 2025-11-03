import './App.css'
import React, { useState } from 'react'
const App = () => {


  return (
    <>
  {
    <form >
      <img src="src/assets/Screenshot_2025-09-24_142739-removebg-preview.png" alt="" />
   <h1>Dugsi<span>fy</span></h1>
    <p>Empowering Modern Learning</p>
    <div className="box">
      <input type="number" placeholder='63*******'/>
      <input type="password" placeholder='Enter your password'/>
      <button >Sign in</button>
    </div>
    <p id='sing-in'>Don't have an account? <a href="#">Register</a></p>
</form>
  }
    </>
  )
}

export default App
