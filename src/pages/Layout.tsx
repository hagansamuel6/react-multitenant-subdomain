import React from 'react'
import { Outlet } from 'react-router-dom'
import RequireAuth from './auth/RequireAuth'

function Layout() {
    return (
        <RequireAuth>
            <Outlet />
        </RequireAuth>
    )
}

export default Layout