import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App'

const root = hydrateRoot(document, <App />)

export default root.render(<App />)
