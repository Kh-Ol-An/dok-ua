import React from "react";

import modificationAudiA4 from "../../../data/modification-audi-a4.json";

const AudiA4 = () => {
  return (
    <div>
      {modificationAudiA4.map(item => (
        <label key={item.modification_id}>
          <input type="radio" />
          {item.modification_name}
        </label>
      ))}
    </div>
  );
};

export default AudiA4;
