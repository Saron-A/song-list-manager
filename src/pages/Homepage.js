import React from "react";
import Header from "../components/Header.jsx";
import Song_List from "../components/Song_List.jsx";
import Search_Song from "../components/Search_Song.jsx";
import Add_Songs from "../components/Add_Songs.jsx";
import "../styles.css";

const Homepage = () => {
  return (
    <div className="container">
      <Header />
      <Search_Song />
      <Song_List />
      <Add_Songs />
    </div>
  );
};

export default Homepage;
