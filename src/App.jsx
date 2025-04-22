import React from 'react'
import Hero from './Components/Hero'
import Nav from './Components/Nav'

export default function App() {
  
  return (
    <div 
      style = {{
        backgroundImage: "url(Background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Nav/>
    </div>
  )
}
