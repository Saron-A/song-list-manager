import React from "react";
import { useNavigate } from "react-router-dom";
import Song_Page from "../components/Song_Page.jsx";
import "../styles.css";

const SongPage = () => {
  const navigate = useNavigate();
  return (
    <div class="song-page-container">
      <Song_Page />
      <button onClick={() => navigate("/")}>🔙</button>
    </div>
  );
};

export default SongPage;
