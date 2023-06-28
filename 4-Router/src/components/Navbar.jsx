import React from 'react';
import { NavLink} from 'react-router-dom';
import { useUser, useLogin } from '../contexts/UserContext';

export default function Navbar(){
    const user = useUser()
    const {handleLogout} = useLogin()
    return (
        <nav className='navbar'>
            <h1>React Router</h1>
            <div className="links">
                <h3><NavLink to='/' className={({isActive})=>isActive?'btn active' : 'btn'}>Home</NavLink></h3>
                <h3><NavLink to='/products' className='btn'>Products</NavLink></h3>
                <h3><NavLink to='/about' className='btn'>About</NavLink></h3>
                {
                    user === null ? 
                    <h3><NavLink to='/login' className='btn'>Login</NavLink></h3> 
                    : 
                    <h3><span  onClick={handleLogout} className='btn'>Logout</span></h3> 
                }
            </div>
        </nav>
    )
}