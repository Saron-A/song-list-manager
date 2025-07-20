import React, { createContext, useState } from "react";

export const SongListContext = createContext();

const SongListContextHandler = ({ children }) => {
  const [songList, setSongList] = useState([]);
  return (
    <SongListContext.Provider value={{ songList, setSongList }}>
      {children}
    </SongListContext.Provider>
  );
};
export default SongListContextHandler;
