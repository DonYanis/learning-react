import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Main(){

    return (
        <div>
            <Navbar/>
            <section className='container'>
                <Outlet/>
            </section>
        </div>
    )
} 