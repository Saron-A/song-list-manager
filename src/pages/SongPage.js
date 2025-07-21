import React from "react";
import { useNavigate } from "react-router-dom";
import Song_Page from "../components/Song_Page.jsx";

const SongPage = () => {
  const navigate = useNavigate();
  return (
    <div className="song-page-container">
      <Song_Page />
      <button className="btn" onClick={() => navigate("/")}>
        🔙
      </button>
    </div>
  );
};

export default SongPage;
