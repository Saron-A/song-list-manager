import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { SongListContext } from "../context/SongListContextHandler.jsx";
import artistIcon from "../assets/artist.png";
import cdIcon from "../assets/cd.png";
import musicIcon from "../assets/music.png";
import calenderIcon from "../assets/calendar.png";
import music_player_widget from "../assets/music.jpg";

const Song_Page = () => {
  const { id } = useParams();
  const { songList } = useContext(SongListContext);

  const song = songList.find((song) => song.id === id);

  return (
    <div className="song-page-content">
      <h1>{song.title}</h1>
      <img
        src={music_player_widget}
        alt="song-cover-image"
        id="music-player-icon"
      />
      <div className="icon-info-s">
        <div className="icon-info">
          <img src={artistIcon} alt="" /> {song.artist}
        </div>
        <div className="icon-info">
          <img src={cdIcon} alt="" /> "{song.album} "album
        </div>
        <div className="icon-info">
          {" "}
          <img src={calenderIcon} alt="" /> {song.year}
        </div>
      </div>
    </div>
  );
};

export default Song_Page;
