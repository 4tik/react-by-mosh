import React, { useState } from "react";

const GameObject = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    const newPlayer = {
      id: 2,
      player: {
        name: "atik",
      },
    };
    // setGame({ ...game, player: { ...game.player, name: "Bob" } });
    setGame(newPlayer);
  };
  return (
    <div>
      <pre>
        {game.id} | {game.player.name}
      </pre>
      <button onClick={handleClick} className="btn btn-primary">
        CLICK
      </button>
    </div>
  );
};

export default GameObject;
