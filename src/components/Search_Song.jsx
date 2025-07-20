import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { SongListContext } from "../context/SongListContextHandler.jsx";
import "../styles.css";

const Search_Song = () => {
  const { songList, setSongList } = useContext(SongListContext);
  const [input, setInput] = useState("");

  const searchSongs = () => {
    let query = input.trim();
    songList.map((song) => {
      query === song.title ? <div>yayyy</div> : <p>No song found</p>;
    });
    setInput("");
  };

  return (
    <div className="input-btn">
      <form action="" onSubmit={searchSongs}>
        <input
          type="text"
          placeholder="Search Song..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search_Song;
