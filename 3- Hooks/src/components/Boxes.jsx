import React, { useState } from 'react';
import Box from './Box';

export default function Boxes(){

    function changeColor(id) {
        setBoxes(prev => {
          return prev.map(box => box.id === id ? {...box, on: !box.on } : box );
        });
      }   

    const [boxes, setBoxes] = useState([
        {id:1, on:true},{id:2, on:false},{id:3, on:true},
        {id:4, on:true},{id:5, on:false},{id:6, on:true},
        {id:7, on:true},{id:8, on:false},{id:9, on:true}
    ])

    const boxElements = boxes.map(e =>  <Box key={e.id} id={e.id} on={e.on} handleBoxClick={changeColor}/> )

    return (
        <div className="boxes">
            {boxElements}
        </div>
    )
}