import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddNew from './AddNew'
import Contactus from './Contactus'
import Edit from './Edit'
import Home from './Home'
import Student from './Student'

const Routingfile = () => {
  return (
    <div>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/student' element={<Student/>}></Route>
       <Route path='/contactus' element={<Contactus/>}></Route>
       <Route path='/edit' element={<Edit/>}></Route>
       <Route path='/addnew' element={<AddNew/>}></Route>
       </Routes>
       </div>
  )
}

export default Routingfile