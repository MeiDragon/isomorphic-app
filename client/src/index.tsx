import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App'

const rootEl = document.getElementById('root')
// @ts-expect-error
const root = hydrateRoot(rootEl, <App />)

root.render(<App />)
