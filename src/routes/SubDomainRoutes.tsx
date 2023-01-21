import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../pages/auth/Login'
import Layout from '../pages/Layout'
import Home from '../pages/Home'
import TestSubPage from '../pages/SubPages/TestSubPage'

function SubDomainRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path="/tyu" element={<p>tyu</p>} />
            <Route element={<Layout />} >
                <Route path='/' element={<Home />} />
                <Route path='/yui' element={<TestSubPage />} />
            </Route>
        </Routes>
    )
}

export default SubDomainRoutes