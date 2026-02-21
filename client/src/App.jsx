import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState('')

  // API base URL - use environment variable or default to localhost
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

  // Fetch welcome message
  useEffect(() => {
    fetch(`${API_BASE_URL}/users/welcome`)
      .then(response => response.text())
      .then(data => {
        setWelcomeMessage(data)
      })
      .catch(err => {
        console.error('Error fetching welcome message:', err)
      })
  }, [])

  return (
    <>
      <h1>Hii Welcome to My FullStack Project</h1>

      <div style={{ margin: '20px' }}>
        <h2>{welcomeMessage || 'Loading...'}</h2>
      </div>
    </>
  )
}

export default App
