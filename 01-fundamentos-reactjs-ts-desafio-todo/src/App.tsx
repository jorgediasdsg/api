import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <NewTask />
    </div>
  )
}

export default App
