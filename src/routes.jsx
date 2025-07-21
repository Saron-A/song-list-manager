import React from "react";
import Homepage from "./pages/Homepage.js";
import SongPage from "./pages/SongPage.js";

const routes = [
  {
    path: "/",
    element: <Homepage />,
  },

  {
    index: true,
    path: "/songpage/:id",
    element: <SongPage />,
  },
];

export default routes;
