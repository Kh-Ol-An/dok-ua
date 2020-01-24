import React from "react";

import modificationAudiA6 from "../../../data/modification-audi-a6.json";

const AudiA6 = () => {
  return (
    <div>
      {modificationAudiA6.map(item => (
        <label key={item.modification_id}>
          <input type="radio" />
          {item.modification_name}
        </label>
      ))}
    </div>
  );
};

export default AudiA6;
