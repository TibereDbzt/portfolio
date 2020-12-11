import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from 'components/pages/Home'
import About from 'components/pages/About'
import Works from 'components/pages/Works'
import Contact from 'components/pages/Contact'
import Header from 'components/Header'
import SocialSideBar from 'components/SocialSideBar'

function App() {
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/work" component={Works}></Route>
        <Route path="/contact" component={Contact}></Route>
        <SocialSideBar />
      </Router>
    </div>
  );
}

export default App;
