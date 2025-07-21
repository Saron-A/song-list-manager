import React, { useState, useContext, useRef } from "react";
import axios from "axios";
import { SongListContext } from "../context/SongListContextHandler.jsx";
import "../styles.css";

const Add_Songs = () => {
  const { songList, setSongList } = useContext(SongListContext);
  const [input, setInput] = useState({
    title: "",
    artist: "",
  });
  const dialogRef = useRef(null);

  const handleClick = () => {
    dialogRef.current.showModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/songs", input);
      setSongList((prevList) => [...prevList, response.data.song]);
      setInput({
        title: "",
        artist: "",
      });
      dialogRef.current.close();
    } catch (err) {
      console.error("Error adding song:", err);
    }
  };

  return (
    <div className="add-songs-btn">
      <button onClick={handleClick} className="btn">
        Add Songs
      </button>
      <dialog ref={dialogRef}>
        <form onSubmit={handleSubmit}>
          <h2>New Song</h2>
          <input
            type="text"
            placeholder="Name of the song"
            value={input.title}
            onChange={(e) => setInput({ ...input, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Name of the artist"
            value={input.artist}
            onChange={(e) => setInput({ ...input, artist: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Album of the song"
            value={input.album}
            onChange={(e) => setInput({ ...input, album: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Year of release"
            value={input.year}
            onChange={(e) => setInput({ ...input, year: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Genre of the song"
            value={input.genre}
            onChange={(e) => setInput({ ...input, genre: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Duration of the song"
            value={input.duration}
            onChange={(e) => setInput({ ...input, duration: e.target.value })}
            required
          />
          <button type="submit">Add</button>
          <button type="button" onClick={() => dialogRef.current.close()}>
            Cancel
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default Add_Songs;
