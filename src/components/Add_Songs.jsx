import React, { useState, useContext, useRef } from "react";
import SongListContext from "../context/SongListContextHandler.jsx";
import "../styles.css";

const Add_Songs = () => {
  const { songList, setSongList, newSong, setNewSong } =
    useContext(SongListContext);
  const [input, setInput] = useState({
    title: "",
    artist: "",
  });
  const dialogRef = useRef(null);

  const handleClick = () => {
    dialogRef.current.showModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <button onClick={handleClick}>Add Songs</button>
      <dialog ref={dialogRef}>
        <form action="">
          <input
            type="text"
            placeholder="Name of the song"
            value={input.title}
            onChange={(e) => setInput({ ...input, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Name of the artist"
            value={input.artist}
            onChange={(e) => setInput({ ...input, artist: e.target.value })}
          />
          <button onSubmit={(e) => handleSubmit()}>Add</button>
        </form>
      </dialog>
    </>
  );
};

export default Add_Songs;
