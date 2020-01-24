import React from "react";

import marka from "../../data/marka.json";

const Marka = () => {
  return (
    <div>
      {marka.map(item => (
        <label key={item.marka_id}>
          <input type="radio" />
          {item.marka_name}
        </label>
      ))}
    </div>
  );
};

export default Marka;
