import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ninjaLogo from './assets/ninja.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.youtube.com/watch?v=8AmN8FTh3Yc&ab_channel=rudolfhahaha" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.youtube.com/watch?v=iltoPCqrkA4&ab_channel=rudolfhahaha" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Przemyslaw Marcinkowski</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
      <p className="read-the-docs">
      <img src={ninjaLogo} className="logo-ninja" alt="Ninja logo" />   all rights reserved 
      </p>
    </>
  )
}

export default App
