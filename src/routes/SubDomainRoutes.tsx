import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../pages/auth/Login'
import Layout from '../pages/Layout'
import Home from '../pages/Home'
import TestSubPage from '../pages/SubPages/TestSubPage'
import MainPage from '../pages/SubPages/MainPage'

function SubDomainRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path="/tyu" element={<MainPage/>} />
            <Route element={<Layout />} >
                <Route path='/' element={<Home />} />
                <Route path='/yui' element={<TestSubPage />} />
            </Route>
        </Routes>
    )
}

export default SubDomainRoutes