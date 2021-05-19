import React from 'react';
import Playlists from './Playlists';

const Categories = () => {
    const dataCategories = [
        {
            id: 1,
            name: "Focus",
            tagline: 'Music to help you concentrate'
        },
        {
            id: 2,
            name: "Mood",
            tagline: 'Playlists to match your mood'
        },
        {
            id: 3,
            name: "Soundtrack your home",
            tagline: ''
        }
    ]

    return (
        <div>
            {dataCategories.map((category, id) => (
               <div className="cardsWrap" key={id}>
               <h2>{category.name}</h2>
               <span className="seeAll">SEE ALL</span>
               <p className="subText">Music to help you concentrate.</p>
               <Playlists category_id={category.id}/>
           </div>
            ))}
        </div>
    )
}

export default Categories;