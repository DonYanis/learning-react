import React from 'react';
import { useParams } from 'react-router-dom';
import Error from './Error';

export default function SingleProduct(){
    const list = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E', 'Product F']
    const {id} = useParams()

    if(id>list.length || isNaN(id) || id<0) {
        return (
            <Error/>
        )
    }
    
    return (
        <>
            <h1 className='container--title'>{list[id]}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perferendis accusamus, sequi placeat voluptatum natus, 
                sit eaque, iure nemo quod a ullam molestias omnis laboriosam 
                inventore aut quos tempora saepe? Doloribus!
            </p>
        </> 
    )
}