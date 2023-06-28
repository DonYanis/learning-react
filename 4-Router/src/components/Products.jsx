import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Products(){

    const list = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E', 'Product F']
    const products = list.map(e => (<Link to={`/products/${list.indexOf(e)}`} className='product'>{e}</Link>))

    return (
        <>
            <h1 className='container--title'>Products</h1>
            <div className="products">
                {products}
            </div>
            <Outlet/>
        </>
    )
}