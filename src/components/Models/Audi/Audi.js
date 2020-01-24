import React from "react";

import modelAudi from "../../../data/model-audi.json";

const Audi = () => {
  return (
    <div>
      {modelAudi.map(item => (
        <label key={item.model_id}>
          <input type="radio" />
          {item.model_name}
        </label>
      ))}
    </div>
  );
};

export default Audi;
