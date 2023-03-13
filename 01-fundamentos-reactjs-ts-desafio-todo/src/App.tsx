import './App.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Task } from './components/Task'

function App() {

  return (
    <div className="App">
      <Header />
      <NewTask />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  )
}

export default App
