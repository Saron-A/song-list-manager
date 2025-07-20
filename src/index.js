import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createServer, Model } from "miragejs";
import SongListContextHandler from "./context/SongListContextHandler.jsx";
createServer({
  models: {
    song: Model,
  },

  seeds(server) {
    server.create("song", { title: "Easy On Me", artist: "Adele" });
    server.create("song", { title: "Peaches", artist: "Justin Bieber" });
    server.create("song", { title: "Blinding Lights", artist: "The Weeknd" });
    server.create("song", { title: "Levitating", artist: "Dua Lipa" });
    server.create("song", {
      title: "Watermelon Sugar",
      artist: "Harry Styles",
    });
    server.create("song", { title: "Save Your Tears", artist: "The Weeknd" });
    server.create("song", {
      title: "drivers license",
      artist: "Olivia Rodrigo",
    });
    server.create("song", {
      title: "Stay",
      artist: "The Kid LAROI & Justin Bieber",
    });
    server.create("song", { title: "good 4 u", artist: "Olivia Rodrigo" });
    server.create("song", { title: "Bad Habits", artist: "Ed Sheeran" });
    server.create("song", {
      title: "MONTERO (Call Me By Your Name)",
      artist: "Lil Nas X",
    });
    server.create("song", { title: "Butter", artist: "BTS" });
    server.create("song", { title: "Shivers", artist: "Ed Sheeran" });
    server.create("song", { title: "As It Was", artist: "Harry Styles" });
    server.create("song", { title: "Anti-Hero", artist: "Taylor Swift" });
  },

  routes() {
    this.namespace = "api";

    this.get("/songs", (schema) => {
      return schema.songs.all();
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

root.render(
  <SongListContextHandler>
    <App />
  </SongListContextHandler>
);
