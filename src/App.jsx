import React from "react";
import { SongListContext } from "./context/SongListContextHandler.jsx";
import Header from "./components/Header.jsx";
import Song_List from "./components/Song_List.jsx";
import Search_Song from "./components/Search_Song.jsx";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Search_Song />
      <Song_List />
    </div>
  );
};

export default App;
