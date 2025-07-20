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
