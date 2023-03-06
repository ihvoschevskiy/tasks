import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './App'
import { AuthContextProvider } from './features/auth/AuthContextProvider'

const rootElement = document.getElementById('root')

if (!rootElement) throw new Error()
const root = createRoot(rootElement)

root.render(
  <AuthContextProvider>
    <Router>
      <App />
    </Router>
  </AuthContextProvider>,
)
