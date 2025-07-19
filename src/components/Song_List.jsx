import React, { useState, useEffect } from "react";
import axios from "axios";

const Song_List = () => {
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await axios.get("/api/songs");
      let data = response.data;
      setSongList(data.songs);
      console.log(data.songs);
    };

    fetchSongs();
  }, []);

  return <div>Song_List</div>;
};

export default Song_List;
