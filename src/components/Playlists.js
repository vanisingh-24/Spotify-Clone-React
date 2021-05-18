import React from 'react';
import {ReactComponent as PlayIcon} from '../svgs/play.svg';

const Playlists = () => {
    

    return (
           <div className="cardsWrapInner">
                 <div className="card">
                   <div className="cardImage">
                     <img src="https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Pic 1" />
                   </div>
                   <div className="cardContent">
                     <h3>Music for concentration</h3>
                     <span>Minimalism, electronica and modern...</span>
                   </div>
                   <span className="playIcon">
                     <PlayIcon />
                   </span>
                 </div>
                 <div className="card">
                   <div className="cardImage">
                     <img src="https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Pic 1" />
                   </div>
                   <div className="cardContent">
                     <h3>Music for concentration</h3>
                     <span>Minimalism, electronica and modern...</span>
                   </div>
                   <span className="playIcon">
                     <PlayIcon />
                   </span>
                 </div>
                 <div className="card">
                   <div className="cardImage">
                     <img src="https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Pic 1" />
                   </div>
                   <div className="cardContent">
                     <h3>Music for concentration</h3>
                     <span>Minimalism, electronica and modern...</span>
                   </div>
                   <span className="playIcon">
                     <PlayIcon />
                   </span>
                 </div>
               </div>
    )
}

export default Playlists;