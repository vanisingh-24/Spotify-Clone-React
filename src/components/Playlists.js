import React from "react";
import { ReactComponent as PlayIcon } from "../svgs/play.svg";
import { Link } from "react-router-dom";

const Playlists = (props) => {
  console.log(props.limiter);
  const dataPlaylists = [
    {
      id: 101,
      category_id: 3,
      name: "Home Playlist 1",
      img:
        "https://images.unsplash.com/photo-1587201572498-2bc131fbf113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 102,
      category_id: 3,
      name: "Home Playlist 2",
      img:
        "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home Playlist 3",
      img:
        "https://images.unsplash.com/photo-1590681713379-41da9f6be849?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home Playlist 3",
      img:
        "https://images.unsplash.com/photo-1615319532762-b4ccc69e5abf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home Playlist 3",
      img:
        "https://images.unsplash.com/photo-1616684553557-82371dfba65f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1866&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home Playlist 3",
      img:
        "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home Playlist 3",
      img:
        "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home Playlist 3",
      img:
        "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home Playlist 3",
      img:
        "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home Playlist 3",
      img:
        "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home Playlist 3",
      img:
        "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home Playlist 3",
      img:
        "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home Playlist 3",
      img:
        "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 104,
      category_id: 1,
      name: "Focus Playlist 1",
      img:
        "https://images.unsplash.com/photo-1587165282385-fe9bbf5eb1a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 105,
      category_id: 4,
      name: "Sunday Playlist ",
      img:
        "https://images.unsplash.com/photo-1587143602695-c980e283be9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 106,
      category_id: 2,
      name: "Mood Playlist 1",
      img:
        "https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 107,
      category_id: 2,
      name: "Mood Playlist 2",
      img:
        "https://images.unsplash.com/photo-1474417426737-fbbff0e62ea0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
      desc: "Lorem ipsum",
    },
  ];

  let matchedPlaylists = dataPlaylists
    .filter((playlist) => playlist.category_id === props.category_id)
    .slice(0, props.limiter);

  return (
    <div className="cardsWrapInner">
      {matchedPlaylists.map((playlist, id) => (
        <Link to={`/playlist/` + playlist.id} key={id}>
          <div className="card" key={id}>
            <div className="cardImage">
              <img src={playlist.img} alt="Pic 1" />
            </div>
            <div className="cardContent">
              <h3>{playlist.name}</h3>
              <span>{playlist.desc}</span>
            </div>
            <span className="playIcon">
              <PlayIcon />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Playlists;
