import React from 'react'
import { Route, Routes  } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import { CreateUser } from '../components/CreateUser'
import { EditUser } from '../components/EditUser'
import { ListUser } from '../components/ListUser'
import App from '../App'


const Routers = () => {
  return(
  <Routes>
    <Route exact path='/' element={<App />} />
    <Route path='/user/create' element={<CreateUser />} />
    <Route path='/user/:id/edit' element={<EditUser />} />
    <Route path='/listUsers' element={<ListUser />} />
    <Route path='/dashboard' element={<Dashboard />} />
  </Routes>
  )
}

export default Routers