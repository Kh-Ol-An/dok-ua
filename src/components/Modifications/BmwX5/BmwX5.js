import React from "react";

import modificationBmwX5 from "../../../data/modification-bmw-x5.json";

const BmwX5 = () => {
  return (
    <div>
      {modificationBmwX5.map(item => (
        <label key={item.modification_id}>
          <input type="radio" />
          {item.modification_name}
        </label>
      ))}
    </div>
  );
};

export default BmwX5;
