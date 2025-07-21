import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { SongListContext } from "../context/SongListContextHandler.jsx";

const Song_Page = () => {
  const { id } = useParams();
  const { songList } = useContext(SongListContext);

  const song = songList.find((song) => song.id === id);

  return (
    <div>
      <h1>Song Details</h1>
      <p>{song.title}</p>
      <p>{song.artist}</p>
    </div>
  );
};

export default Song_Page;
