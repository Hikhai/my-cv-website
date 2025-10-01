import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { cvData } from './data/cvData'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header data={cvData.personal} />
      <main className="main-content">
        <About data={cvData.about} />
        <Experience data={cvData.experience} />
        <Education data={cvData.education} />
        <Skills data={cvData.skills} />
        <Contact data={cvData.contact} />
      </main>
    </div>
  )
}

export default App
