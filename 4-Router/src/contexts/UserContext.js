import React, {useContext, createContext, useState} from "react";
import {useNavigate} from 'react-router-dom';

//create cntxt
const LoginContext = createContext()
const UserContext = createContext()
const FormContext = createContext()

//custom hook
export function useLogin() {
    return useContext(LoginContext)
}

export function useUser() {
    return useContext(UserContext)
}

export function useForm() {
    return useContext(FormContext)
}


// provider
export function UserProvider({children}) {

    const [user, setUser] = useState(null)
    const navigate = useNavigate();

    function handleLogin(e){
        e.preventDefault()
        setUser(loginForm)
        navigate('/')

    }

    function handleLogout(e){
        e.preventDefault()
        setUser(null)
        //navigate('/')

    }


    const [loginForm, setLoginForm] = useState({
        username : '',
        password : ''
    })

    function handleChange(e){
        setLoginForm(prev => {
            return {
                ...prev,
                [e.target.name] : e.target.value
            }
        })
    }

    return (
        <UserContext.Provider value={user}>
            <FormContext.Provider value={{handleChange, loginForm}}>
                <LoginContext.Provider value={{handleLogin, handleLogout}}>
                    {children}
                </LoginContext.Provider>
            </FormContext.Provider>
        </UserContext.Provider>
    )
}