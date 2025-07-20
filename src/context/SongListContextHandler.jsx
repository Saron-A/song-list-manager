import React, { createContext, useState } from "react";

export const SongListContext = createContext();

const SongListContextHandler = ({ children }) => {
  const [songList, setSongList] = useState([]);
  const [newSong, setNewSong] = useState({});
  return (
    <SongListContext.Provider
      value={{ songList, setSongList, newSong, setNewSong }}
    >
      {children}
    </SongListContext.Provider>
  );
};
export default SongListContextHandler;
