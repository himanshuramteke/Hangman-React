import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'

function App() {
 

  return (
    <Routes>
      <Route path='/start' element={<StartGame />} />
      <Route path='/start' element={<PlayGame />} />
      <Route path='/start' element={<div>Home</div>} />
    </Routes>
  )
}

export default App
