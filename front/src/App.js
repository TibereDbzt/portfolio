import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from 'pages/Home'
import About from 'pages/About'
import Works from 'pages/Works'
import Contact from 'pages/Contact'
import Header from 'components/Header'
import SocialSideBar from 'components/SocialSideBar'

function App() {
  return (
    <Router>
      <div className="bubble"></div>
      <div className="cursor"></div>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Works />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" />
      </Routes>
      </AnimatePresence>
      <SocialSideBar />
    </Router>
  );
}

export default App;
