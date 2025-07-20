import React, { useState, useContext, useEffect, useRef } from "react";
import axios from "axios";
import { SongListContext } from "../context/SongListContextHandler.jsx";
import "../styles.css";

const Search_Song = () => {
  const { songList, setSongList } = useContext(SongListContext);
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState({});
  const divRef = useRef(null);

  const searchSongs = (e) => {
    e.preventDefault();
    let query = input.trim().toLowerCase();
    if (!query) return;
    const result = songList.filter(
      (song) => query === song.title.toLowerCase()
    );
    setSearchResult(result[0] || null);

    setInput("");
  };
  useEffect(() => {
    if (searchResult) {
      const timer = setTimeout(() => {
        setSearchResult(null);
      }, 5000); // 5 seconds

      return () => clearTimeout(timer); // cleanup if component re-renders
    }
  }, [searchResult]);

  return (
    <div className="input-btn-result">
      <form action="" onSubmit={searchSongs} className="input-btn">
        <input
          type="text"
          placeholder="Search Song..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {searchResult ? (
        <div ref={divRef}>
          <h3>{searchResult.title}</h3>
          <p>{searchResult.artist}</p>
        </div>
      ) : (
        <p>No song found</p>
      )}
    </div>
  );
};

export default Search_Song;
