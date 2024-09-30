import { useState } from 'react'
import './App.css'

function App() {
  const [] = useState(0)

  return (
    <>
      <div>
          <img src={"https://i.pinimg.com/736x/ec/bf/66/ecbf66484f8439fd7021f3ef224a50a8.jpg"} className="logo" alt="Vite logo" />
      </div>
      <h1>HOLA MUNDO</h1>
      <div className="card">
        <p>
          TALLER 03
        </p>
      </div>
    </>
  )
}

export default App
