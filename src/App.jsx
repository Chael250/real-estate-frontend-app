import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header/header"
import Hero from "./components/hero/hero"
import Companies from './components/companies/companies'
import Residencies from './components/residencies/residencies'
import Value from './components/value/value'
import Contact from './components/contact/Contact'
import GetStarted from './components/GetStarted/GetStarted'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <div>
        <div className='white-gradient'></div>
      <Header />
      <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App
