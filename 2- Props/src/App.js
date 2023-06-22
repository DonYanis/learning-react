import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

const data = require('./data/data').data

export default function App(){

    const cards = data.map(e => {
        return (
            <Card 
                key={e.id}
                img={e.coverImg}
                rating={e.stats.rating}
                ratingCount={e.stats.ratingCount}
                location={e.location}
                title={e.title}
                price={e.price}
                openSpots={e.openSpots}
            />
        )
    })

    return (    
        <div>
            <Navbar/>
            <Hero/>
            <section className='card-list'>
                {cards}
            </section>
        </div>
    )
}