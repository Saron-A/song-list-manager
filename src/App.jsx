import React, { useOutletContext, Outlet } from "react";
import Homepage from "./pages/Homepage.js";
import SongPage from "./pages/SongPage.js";
import "./styles.css";

const App = () => {
  return <Outlet value={{ children }} />;
};

export default App;
