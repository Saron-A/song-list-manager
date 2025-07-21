import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { SongListContext } from "../context/SongListContextHandler.jsx";

const Song_Page = () => {
  const { id } = useParams();
  const { songList } = useContext(SongListContext);

  const song = songList.find((song) => song.id === id);

  return (
    <div className="song-page-container">
      <h1>{song.title}</h1>

      <p>{song.artist}</p>
      <p>{}</p>
      <img src={song.coverImage} alt="song-cover-image" />
    </div>
  );
};

export default Song_Page;
