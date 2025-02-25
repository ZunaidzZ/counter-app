import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-container'>
        <h1 className='app-heading'>Welcome to Zonaid's Counter App</h1>
        <Counter />

      </div>
        
    </>
  )
}

export default App
