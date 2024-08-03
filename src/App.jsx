import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import Navitems from './components/Navitems'

function App() {
 

  return (
    <>
    <Navitems></Navitems>
     <Outlet/>
    </>
  )
}

export default App
