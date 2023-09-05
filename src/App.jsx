import React from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css'
import Navbar from './components/Navbar'
import QuizMenu from './components/Landing/QuizMenu';
import Quiz from './components/Quiz/Quiz'

function App() {

  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<QuizMenu />}></Route>
      <Route path='/:title' element={<Quiz />}></Route>
    </Routes>
    </div>
  )
}

export default App
