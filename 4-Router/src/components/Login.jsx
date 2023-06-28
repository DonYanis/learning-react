import React from 'react';
import { useForm, useLogin } from '../contexts/UserContext';

export default function Login(){
    const {handleChange, loginForm} = useForm()
    const {handleLogin} = useLogin()
    return (
        <form className='login-form'>
            <h1 className='container--title'>Login</h1>
            <input type="text" onChange={handleChange} value={loginForm.username} name="username" placeholder='Username' />
            <input type="password" onChange={handleChange} value={loginForm.password} name="password"placeholder='Password' />
            <button type='submit' onClick={handleLogin} className='submit'>Login</button>
        </form>
    )
}