import React from "react";
import "../styles.css";

const Add_Songs = () => {
  return (
    <>
      <button onClick={handleClick}>Add Songs</button>
      <dialog>
        <form action="">
          <input type="text" placeholder="Name of the song" />
          <input type="text" placeholder="Name of the artist" />
          <button onSubmit={handleSubmit}>Add</button>
        </form>
      </dialog>
    </>
  );
};

export default Add_Songs;
