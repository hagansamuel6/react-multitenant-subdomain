import React from 'react'
import { Navigate , useLocation} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function RequireAuth({ children }: { children: JSX.Element }) {

    const location = useLocation();
    const auth = useAuth()

    if (!auth.isLoggedin) {
        return (<Navigate to='/login' state={{ from: location }} replace />)
    }


    return children;
}

export default RequireAuth