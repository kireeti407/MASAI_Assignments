import { useContext, useState } from 'react'
import Login from './components/Login'
import SingUp from './components/Sign-up'
import './App.css'
import Navbar from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import { AuthContext } from './context/Auth'
import {Provider} from "react-redux"
import { store } from './app/store'
import AddTask from './Private/AddTask'
import Edit from './Private/Edit'
function App() {
  const [isnav,setNav]=useState(true)
  const user=useContext(AuthContext)
  return (
    <>
     <Provider store={store}>
      {(isnav)?<Navbar set={setNav}/>:""}
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login set={setNav}/>} />
        <Route path='/signup' element={<SingUp set={setNav}/>} />
        <Route path='/addproject' element={<AddTask />} />
        <Route path='/Edit' element={<Edit/>}/>
      </Routes>
    </Provider>
      
    </>
  )
}

export default App
