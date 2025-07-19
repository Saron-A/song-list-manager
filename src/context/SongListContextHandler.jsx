import React, { createContext, useState } from "react";

export const SongListContext = createContext();

const SongListContextHandler = () => {
  const [songList, setSongList] = useState([]);
  return (
    <SongListContext.Provider values={{ songList, setSongList }}>
      {children}
    </SongListContext.Provider>
  );
};
export default SongListContextHandler;
