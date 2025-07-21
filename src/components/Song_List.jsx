import React, { useState, useEffect, useContext, useRef } from "react";
import { SongListContext } from "../context/SongListContextHandler.jsx";
import axios from "axios";
import musicNotes from "../assets/musical-notes.png";
import "../styles.css";

const Song_List = () => {
  const { songList, setSongList } = useContext(SongListContext);
  const [editedSong, setEditedSong] = useState({
    id: "",
    title: "",
    artist: "",
  });
  const dialogRef = useRef(null);

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await axios.get("/api/songs");
      let data = response.data;
      setSongList(data.songs);
      console.log(data.songs);
    };

    fetchSongs();
  }, []);

  const handleEdit = (item) => {
    setEditedSong({ ...item });
    dialogRef.current.showModal();
  };

  const implementEdit = async (e) => {
    e.preventDefault();
    // const updatedSongList = songList.map((song) =>
    //   song.id === editedSong.id ? editedSong : song
    // );
    // setSongList(updatedSongList);
    // dialogRef.current.close();

    try {
      const response = await axios.put(
        `/api/songs/${editedSong.id}`,
        editedSong
      );
      const updated = response.data.song;

      const updatedSongList = songList.map((song) =>
        song.id === updated.id ? updated : song
      );
      setSongList(updatedSongList);
      dialogRef.current.close();
    } catch (err) {
      console.error("Error editing song:", err);
    }
  };

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
          <li key={song.id}>
            <div className="song-tile">
              <img src={musicNotes} alt="music notes icon" />
              <div className="song-info">
                {" "}
                <h4>{song.title}</h4>
                <p>By: {song.artist}</p>
              </div>
              <div className="btns">
                <button onClick={() => handleEdit(song)}>✏️</button>
                <button onClick={() => handleDelete(song)}>🗑️</button>
              </div>
              <dialog ref={dialogRef}>
                <h2>Edit Song Information</h2>
                <form onSubmit={(e) => implementEdit(e, song)}>
                  <input
                    type="text"
                    placeholder="Song title"
                    value={editedSong.title}
                    onChange={(e) =>
                      setEditedSong({ ...editedSong, title: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Song Artist"
                    value={editedSong.artist}
                    onChange={(e) =>
                      setEditedSong({ ...editedSong, artist: e.target.value })
                    }
                  />
                  <button type="submit">Edit</button>
                  <button
                    type="button"
                    onClick={() => dialogRef.current.close()}
                  >
                    Cancel
                  </button>
                </form>
              </dialog>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Song_List;
