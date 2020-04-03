import React from "react";

const Fighter = props => {
  console.log(props);
  const { name, moves } = props;
  return (
    <div>
      <h2>{name}</h2>
      {moves.map(move => {
        return (
          <p>
            {move.name}: {move.damage}
          </p>
        );
      })}
    </div>
  );
};

export default Fighter;
