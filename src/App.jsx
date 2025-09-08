import { useState } from 'react'
import './App.css'
import Home from "./pages/Home.jsx"
import Notes from './pages/Notes.jsx'
import NavBar from './components/NavBar.jsx'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/notes" element={<Notes/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App