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

  const handleDelete = async (item) => {
    try {
      await axios.delete(`/api/songs/${item.id}`);
      let newList = songList.filter((song) => song.id !== item.id);
      setSongList(newList);
      let newData = await axios.get("/api/songs");
      console.log(newData.data.songs);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ul>
        {songList.map((song, index) => (
          <li key={index}>
            <div className="song-tile">
              <img src={musicNotes} alt="music notes icon" />
              <div className="song-info">
                {" "}
                <h4>{song.title}</h4>
                <p>By: {song.artist}</p>
              </div>
              <div className="btns">
                <button>✏️</button>
                <button onClick={() => handleDelete(song)}>🗑️</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Song_List;
