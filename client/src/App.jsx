import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import TechStack from './pages/TechStack'
import Resume from './pages/Resume'
import Settings from './pages/Settings'
import Analytics from './pages/Analytics'
import MiniGame from './pages/MiniGame'


const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tech-stack" element={<TechStack />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/mini-game" element={<MiniGame />} />
      
    </Routes>
  )
}

export default App