import React from "react";

function Specials({ type, specials }) {
  return (
    <div>
      <h5>{type}:</h5>
      <ul>
        {specials.map(obj => {
          return <li>{obj.special.description}</li>;
        })}
      </ul>
    </div>
  );
}

export default Specials;
