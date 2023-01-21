import React from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthContextType {
    user: any,
    isLoggedin: boolean,
    signIn: (token : string|null, callback: VoidFunction) => void;
    signOut: () => void;
}

export const AuthContext = React.createContext<AuthContextType>(null!)

function AuthProvider({ children }: { children: React.ReactNode }) {
    let [user, setUser] = React.useState<any>(null)
    let [isLoggedin, setIsLoggedIn] = React.useState<boolean>(false)

  
    let signIn = (token : string|null, callback : VoidFunction) => {
        if (token) {
            setIsLoggedIn(true)
            callback()
        }
    }

    let signOut = () => {
        setIsLoggedIn(false)
    }


    let value = { user, isLoggedin, signIn, signOut };

    return (
        <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
    )
}

export default AuthProvider
