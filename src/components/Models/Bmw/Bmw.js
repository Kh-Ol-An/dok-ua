import React from "react";

import modelBmw from "../../../data/model-bmw.json";

const Bmw = () => {
  return (
    <div>
      {modelBmw.map(item => (
        <label key={item.model_id}>
          <input type="radio" />
          {item.model_name}
        </label>
      ))}
    </div>
  );
};

export default Bmw;
