import React, { useState, useEffect, useRef } from "react";

import s from "./ItemAuto.module.css";

const ItemAuto = ({ dataItemAuto }) => {
  const [maxWidthSpan, setMaxWidthSpan] = useState(0);
  const spans = useRef(dataItemAuto.map(() => React.createRef()));

  useEffect(() => {
    spans.current &&
      spans.current.map(span => {
        const widthSpan = span.current ? span.current.offsetWidth : 0;
        return maxWidthSpan < widthSpan && setMaxWidthSpan(widthSpan);
      });
  });

  return (
    <div
      className={s.main}
      style={{
        gridTemplateColumns: `repeat(auto-fill, minmax(${maxWidthSpan +
          40}px, 1fr))`
      }}
    >
      {dataItemAuto.map((item, idx) => {
        const id = item.marka_id || item.model_id || item.modification_id;
        const name =
          item.marka_name || item.model_name || item.modification_name;
        return (
          <label className={s.label} key={id}>
            <input className={s.input} type="radio" />
            <span ref={spans.current[idx]}>{name}</span>
          </label>
        );
      })}
    </div>
  );
};

export default ItemAuto;
