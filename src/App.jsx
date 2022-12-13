import React from 'react'
import Intro from './components/intro'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import Timeline from './components/timeline'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
