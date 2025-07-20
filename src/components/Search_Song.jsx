import React, { useState, useContext, useRef } from "react";
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
    if (searchResult) {
      divRef.current.classList.add("search-result");
    } else {
      divRef.current.setAttribute("style", "display: none");
    }
    setInput("");
  };

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
