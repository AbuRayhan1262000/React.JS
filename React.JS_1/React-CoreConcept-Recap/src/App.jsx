import { useState } from 'react'
import Posts from './Posts'
import './App.css'

function App() {
 

  return (
    <>
      <h3>React Core Concept Recap</h3>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>EventHandler</li>
        <li>State</li>
        <li>Load data</li>
      </ol>
      <hr/>
     <Posts></Posts>
    </>
  )
}

export default App
