import React from 'react';
import {useParams} from 'react-router-dom';
import {ReactComponent as PlayIcon} from '../../svgs/play.svg';
import {ReactComponent as HeartIcon} from '../../svgs/heart.svg';
import {ReactComponent as NoteIcon} from '../../svgs/note.svg';

const PlaylistPage = () => {
    let {id} = useParams();

    return (
        <div className="playlistPage">
            <div className="mainInner">
            <div className="playlistPageInfo">
               <div className="playlistPageImage">
                  <img src="https://images.unsplash.com/photo-1587201572498-2bc131fbf113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80" alt="pic" />
               </div>
               <div className="playlistPageContent">
                   <p className="smallText uppercase bold">Playlist</p>
               <h1>A Perfect Day</h1>

               <p className="tagline">
               Minimalism, electronica and modern classical to concentrate to.
               </p>
               <div className="playlistPageDesc">
                   <p className="spotify">Spotify</p>
                   <span>689,428 likes</span>
                   <span>4hr 35min</span>
               </div>
               </div>
               </div>
              

            <div className="playlistPageSongs">
                <div className="playlistButtons">
                    <span className="playIcon">
                        <PlayIcon />
                    </span>
                    <div className="icons">
                        <div className="icon iconsHeart">
                            <HeartIcon />
                        </div>
                        <div className="icon iconsDots"></div>
                    </div>
                </div>

                <ul className="songList">
                    <li>
                        <div className="songIcon">
                            <NoteIcon className="noteI" />
                            <PlayIcon className="playI" />
                        </div>
                        <div className="songDetails">
                            <h3>Held Down</h3>
                            <span>Laura Marling</span>
                        </div>
                        <div className="songTime">
                            <span>4:07</span>
                        </div>
                    </li>
                    <li>
                        <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default PlaylistPage;