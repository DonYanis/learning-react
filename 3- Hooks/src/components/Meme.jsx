import React, { useEffect, useState } from 'react';

export default function Meme(){

    const [meme, setImg] = useState({
        topText : "",
        bottomText : "",
        img : "https://i.imgflip.com/1tkjq9.jpg"
    })

    function handleSubmit(e){
        e.preventDefault();
        const newUrl = memes[Math.floor(Math.random()*memes.length)].url
        setImg(prev => {
            return {
                ...prev,
                img : newUrl
            }
        })
    }

    function handleChange(e){
        setImg(prev => {
            return {
                ...prev,
                [e.target.name] : e.target.value,
            }
        })
    }

    const [memes,setMemes] = useState([])
    
    useEffect(() => {

        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setMemes(data.data.memes)
        }

        getMemes()

    }, [])
    
    
    return (
        <div className="meme-container" >
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Top text" 
                    name="topText" 
                    value={meme.topText} 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    name="bottomText" 
                    value={meme.bottomText} 
                    onChange={handleChange}
                />
                <button type='submit' className="form--button">Get a new image</button>
            </form>
            <div className="meme--img">
                <img src={meme.img} alt="img" className="img" />
                <div className="top-text">{meme.topText}</div>
                <div className="bottom-text">{meme.bottomText}</div>    
            </div>
        </div>
    )
}