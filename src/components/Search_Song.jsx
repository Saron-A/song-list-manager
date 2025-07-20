import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { SongListContext } from "../context/SongListContextHandler.jsx";
import "../styles.css";

const Search_Song = () => {
  const { songList, setSongList } = useContext(SongListContext);
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState({});

  const searchSongs = () => {
    let query = input.trim().toLowerCase();
    if (!query) return;
    const result = songList.filter(
      (song) => query === song.title.toLowerCase()
    );
    setSearchResult(result[0] || null);
    setInput("");
  };

  return (
    <div className="input-btn-result">
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
      {searchResult ? (
        <div>
          {searchResult.title}
          {searchResult.artist}
        </div>
      ) : (
        <p>No song found</p>
      )}
    </div>
  );
};

export default Search_Song;
