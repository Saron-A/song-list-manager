import React, { useState, useEffect, useContext } from "react";
import { SongListContext } from "../context/SongListContextHandler.jsx";
import axios from "axios";
import musicNotes from "../assets/musical-notes.png";
import "../styles.css";

const Song_List = () => {
  const { songList, setSongList } = useContext(SongListContext);

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await axios.get("/api/songs");
      let data = response.data;
      setSongList(data.songs);
      console.log(data.songs);
    };

    fetchSongs();
  }, []);

  return (
    <div>
      <ul>
        {songList.map((song, index) => (
          <li key={index}>
            <div className="song-tile">
              <img src={musicNotes} alt="music notes icon" />
              <h4>{song.title}</h4>
              <p>By: {song.artist}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Song_List;
