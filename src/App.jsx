import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Camera from './Camera'
import Redirect from './components/Redirect'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Camera/>}/>
      <Route path='/redirect/' element={<Redirect/>}/>
      <Route path='/pruebas' element={<Redirect/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
