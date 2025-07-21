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
      coverImage:
        "https://upload.wikimedia.org/wikipedia/en/6/69/Adele_-_Easy_on_Me.png",
    });

    server.create("song", {
      title: "Peaches",
      artist: "Justin Bieber",
      album: "Justice",
      year: 2021,
      genre: "R&B",
      duration: "3:18",
      coverImage:
        "https://upload.wikimedia.org/wikipedia/en/8/8a/Justin_Bieber_-_Peaches.png",
    });

    server.create("song", {
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      year: 2020,
      genre: "Synth-pop",
      duration: "3:20",
      coverImage:
        "https://upload.wikimedia.org/wikipedia/en/0/09/Blinding_Lights.png",
    });

    server.create("song", {
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      year: 2020,
      genre: "Disco-pop",
      duration: "3:23",
      coverImage:
        "https://upload.wikimedia.org/wikipedia/en/e/ed/Dua_Lipa_-_Levitating.png",
    });

    server.create("song", {
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line",
      year: 2019,
      genre: "Pop rock",
      duration: "2:53",
      coverImage:
        "https://upload.wikimedia.org/wikipedia/en/e/ed/Dua_Lipa_-_Levitating.png",
    });

    server.create("song", {
      title: "Save Your Tears",
      artist: "The Weeknd",
      album: "After Hours",
      year: 2020,
      genre: "Synth-pop",
      duration: "3:35",
      coverImage:
        "https://upload.wikimedia.org/wikipedia/en/3/3f/The_Weeknd_-_Save_Your_Tears.png",
    });

    server.create("song", {
      title: "drivers license",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      year: 2021,
      genre: "Pop",
      duration: "4:02",
      coverImage:
        "https://upload.wikimedia.org/wikipedia/en/9/9e/Olivia_Rodrigo_-_drivers_license.png",
    });

    server.create("song", {
      title: "Still Here",
      artist: "Seungmin (StrayKids)",
      album: "SKZ-RECORD",
      year: 2023,
      genre: "K-Pop",
      duration: "3:30",
      coverImage: "",
    });

    server.create("song", {
      title: "good 4 u",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      year: 2021,
      genre: "Pop rock",
      duration: "2:58",
      coverImage:
        "https://upload.wikimedia.org/wikipedia/en/4/41/Olivia_Rodrigo_-_good_4_u.png",
    });

    server.create("song", {
      title: "Bad Habits",
      artist: "Ed Sheeran",
      album: "=",
      year: 2021,
      genre: "Dance-pop",
      duration: "3:50",
      coverImage:
        "https://upload.wikimedia.org/wikipedia/en/2/2a/Ed_Sheeran_-_Bad_Habits.png",
    });

    server.create("song", {
      title: "Face",
      artist: "GOT7",
      album: "Call My Name",
      year: 2019,
      genre: "K-Pop",
      duration: "3:12",
      coverImage: "",
    });

    server.create("song", {
      title: "Butter",
      artist: "BTS",
      album: "Butter",
      year: 2021,
      genre: "Dance-pop",
      duration: "2:44",
      coverImage:
        "https://upload.wikimedia.org/wikipedia/en/5/5e/BTS_-_Butter.png",
    });

    server.create("song", {
      title: "Shivers",
      artist: "Ed Sheeran",
      album: "=",
      year: 2021,
      genre: "Pop rock",
      duration: "3:27",
      coverImage:
        "https://upload.wikimedia.org/wikipedia/en/7/77/Ed_Sheeran_-_Shivers.png",
    });

    server.create("song", {
      title: "As It Was",
      artist: "Harry Styles",
      album: "Harry's House",
      year: 2022,
      genre: "Synth-pop",
      duration: "2:47",
      coverImage:
        "https://upload.wikimedia.org/wikipedia/en/3/3c/Harry_Styles_-_As_It_Was.png",
    });

    server.create("song", {
      title: "Anti-Hero",
      artist: "Taylor Swift",
      album: "Midnights",
      year: 2022,
      genre: "Synth-pop",
      duration: "3:20",
      coverImage:
        "https://upload.wikimedia.org/wikipedia/en/1/1e/Taylor_Swift_-_Anti-Hero.png",
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
