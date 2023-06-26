import React from 'react';


export default function Box(props){

    const styles = {
        backgroundColor : props.on ? "#333333" : "#ccc",
    }

    return (
        <div style={styles} className="box" onClick={()=>props.handleBoxClick(props.id)}>
            
        </div>
    )
}