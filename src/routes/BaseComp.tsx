
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import FrontLogin from '../pages/auth/mainPages/Auth/FrontLogin'
import Testimonials from '../pages/Testimonials'
import Layout from '../pages/Layout'
import Home from '../pages/Home'

function BaseComp() {
    return (
        <Routes>
           
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<FrontLogin />} />
                <Route path='/about' element={<About />} />
                <Route path='/egya' element={<p>from above</p>} />
                <Route element={<Layout />} >
                    <Route path='/testimonials' element={<Testimonials />} />
                </Route>
            <Route path='*' element={ <p>not found</p> } />
        </Routes>
    )
}

export default BaseComp