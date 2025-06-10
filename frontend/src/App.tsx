import './App.css'
import Dashboard from './Pages/Dashboard'
import { SharPage } from './Pages/SharePage'
import { SiginIn } from './Pages/SiginIn'
import { SiginUp } from './Pages/SiginUp'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() 
{

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SiginIn/>}></Route>
        <Route path='/signup' element={<SiginUp/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/share/:sharecode' element={<SharPage/>}></Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
