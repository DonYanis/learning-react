import React from 'react';
import { useUser } from '../contexts/UserContext';

export default function Home(){
    const user = useUser()
    return (
        <>
            <h1 className='container--title'>Home Page</h1>
            {user !==null && <h2>Welcome, {user.username} </h2>}
            <p> 
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error vel rem maiores qui quas odit,
                voluptatum, sequi dolor veritatis a incidunt quam voluptatem consequuntur harum quisquam quae 
                facilis est nam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error vel rem maiores 
                qui quas odit, voluptatum, sequi dolor veritatis a incidunt quam voluptatem consequuntur harum 
                quisquam quae facilis est nam!
            </p>
        </>
    )
} 