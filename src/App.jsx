import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { cvData as staticCvData } from './data/cvData'
import { cvAPI } from './services/api'
import './App.css'

function App() {
  const [cvData, setCvData] = useState(staticCvData)
  const [isLoading, setIsLoading] = useState(false)
  const [useAPI, setUseAPI] = useState(false) // Toggle between API and static data

  // Try to load data from API on component mount
  useEffect(() => {
    const loadDataFromAPI = async () => {
      try {
        setIsLoading(true)
        const response = await cvAPI.getCVData()
        if (response.success && response.data) {
          setCvData(response.data)
          setUseAPI(true)
          console.log('✅ Successfully loaded CV data from API')
        }
      } catch (error) {
        console.warn('⚠️ Failed to load from API, using static data:', error.message)
        // Keep using static data if API fails
        setUseAPI(false)
      } finally {
        setIsLoading(false)
      }
    }

    // Only try API in development or if specifically configured
    if (import.meta.env.DEV || import.meta.env.VITE_USE_API === 'true') {
      loadDataFromAPI()
    }
  }, [])

  if (isLoading) {
    return (
      <div className="App">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Đang tải dữ liệu CV...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      {/* Debug info in development */}
      {import.meta.env.DEV && (
        <div className="debug-info">
          📊 Nguồn dữ liệu: {useAPI ? 'Backend API' : 'Static Data'}
        </div>
      )}
      
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
