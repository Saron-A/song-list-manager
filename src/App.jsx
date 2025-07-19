import React from "react";
import { SongListContext } from "./context/SongListContextHandler.jsx";
import Header from "./components/Header.jsx";
import Song_List from "./components/Song_List.jsx";

const App = ({ children }) => {
  return (
    <SongListContext.Provider>
      <div>
        <Header />
        <Song_List />
      </div>
    </SongListContext.Provider>
  );
};

export default App;
