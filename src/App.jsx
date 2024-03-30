import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Camera from './Camera'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Camera/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
