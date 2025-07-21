import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createServer, Model } from "miragejs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";
import SongListContextHandler from "./context/SongListContextHandler.jsx";
createServer({
  models: {
    song: Model,
  },

  seeds(server) {
    server.create("song", {
      title: "Easy On Me",
      artist: "Adele",
      album: "30",
      year: 2021,
      genre: "Pop",
      duration: "3:44",
    });

    server.create("song", {
      title: "Peaches",
      artist: "Justin Bieber",
      album: "Justice",
      year: 2021,
      genre: "R&B",
      duration: "3:18",
    });

    server.create("song", {
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      year: 2020,
      genre: "Synth-pop",
      duration: "3:20",
    });

    server.create("song", {
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      year: 2020,
      genre: "Disco-pop",
      duration: "3:23",
    });

    server.create("song", {
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line",
      year: 2019,
      genre: "Pop rock",
      duration: "2:53",
    });

    server.create("song", {
      title: "Save Your Tears",
      artist: "The Weeknd",
      album: "After Hours",
      year: 2020,
      genre: "Synth-pop",
      duration: "3:35",
    });

    server.create("song", {
      title: "drivers license",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      year: 2021,
      genre: "Pop",
      duration: "4:02",
    });

    server.create("song", {
      title: "Still Here",
      artist: "Seungmin (StrayKids)",
      album: "SKZ-RECORD",
      year: 2023,
      genre: "K-Pop",
      duration: "3:30",
    });

    server.create("song", {
      title: "good 4 u",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      year: 2021,
      genre: "Pop rock",
      duration: "2:58",
    });

    server.create("song", {
      title: "Bad Habits",
      artist: "Ed Sheeran",
      album: "=",
      year: 2021,
      genre: "Dance-pop",
      duration: "3:50",
    });

    server.create("song", {
      title: "Face",
      artist: "GOT7",
      album: "Call My Name",
      year: 2019,
      genre: "K-Pop",
      duration: "3:12",
    });

    server.create("song", {
      title: "Butter",
      artist: "BTS",
      album: "Butter",
      year: 2021,
      genre: "Dance-pop",
      duration: "2:44",
    });

    server.create("song", {
      title: "Shivers",
      artist: "Ed Sheeran",
      album: "=",
      year: 2021,
      genre: "Pop rock",
      duration: "3:27",
    });

    server.create("song", {
      title: "As It Was",
      artist: "Harry Styles",
      album: "Harry's House",
      year: 2022,
      genre: "Synth-pop",
      duration: "2:47",
    });

    server.create("song", {
      title: "Anti-Hero",
      artist: "Taylor Swift",
      album: "Midnights",
      year: 2022,
      genre: "Synth-pop",
      duration: "3:20",
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/songs", (schema) => {
      return schema.songs.all();
    });

    this.get("/songs/:id", (schema, request) => {
      let id = request.params.id;
      return schema.songs.find(id);
    });

    this.post("/songs", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      return schema.songs.create(attrs);
    });

    this.put("/songs/:id", (schema, request) => {
      const newAttrs = JSON.parse(request.requestBody);
      const id = request.params.id;
      const song = schema.songs.find(id);
      return song.update(newAttrs);
    });

    this.delete("/songs/:id", (schema, request) => {
      const id = request.params.id;
      return schema.songs.find(id).destroy();
    });
  },
});

const root = createRoot(document.getElementById("root"));

const route = createBrowserRouter(routes);
root.render(
  <SongListContextHandler>
    <RouterProvider router={route} />
  </SongListContextHandler>
);
