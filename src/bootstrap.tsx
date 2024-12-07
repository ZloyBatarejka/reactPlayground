import React from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App'

const container = document.querySelector('#root')

if (container) {
    const root = createRoot(container)

    root.render(<App />)
} else {
    console.log('root не найден')
}

//https://api.agify.io/?name=meelad