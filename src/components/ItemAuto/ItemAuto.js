import React, { useState, useEffect, useRef } from "react";

import s from "./ItemAuto.module.css";

const ItemAuto = ({ dataItemAuto, onPropsUp }) => {
  const [maxWidthSpan, setMaxWidthSpan] = useState(0);
  const [columns, setColumns] = useState(1);

  const main = useRef(null);
  const spans = useRef(dataItemAuto.map(() => React.createRef()));

  useEffect(() => {
    spans.current &&
      spans.current.map(span => {
        const widthSpan = span.current ? span.current.offsetWidth : 0;
        return maxWidthSpan < widthSpan && setMaxWidthSpan(widthSpan);
      });
  });

  useEffect(() => {
    const widthMain = main.current ? main.current.offsetWidth : 0;
    const maxWidthLabel = maxWidthSpan + 40;
    const maxColumns = Math.floor(widthMain / maxWidthLabel);
    if (maxColumns > dataItemAuto.length) {
      setColumns(dataItemAuto.length);
    } else if (maxColumns < 3) {
      setColumns(1);
    } else {
      setColumns(maxColumns);
    }
  }, [maxWidthSpan, dataItemAuto.length]);

  function handleChange({ target }) {
    const { id, name, value } = target;
    onPropsUp(id, name, value);
  }

  return (
    <div
      className={s.main}
      ref={main}
      style={{
        gridTemplateColumns: `repeat(${columns},  1fr)`
      }}
    >
      {dataItemAuto.map((item, idx) => {
        const id = item.marka_id || item.model_id || item.modification_id;
        const value =
          item.marka_name || item.model_name || item.modification_name;
        const name =
          (item.marka_name && "marka") ||
          (item.model_name && "model") ||
          (item.modification_name && "modification");
        return (
          <label className={s.label} key={id}>
            <input
              id={id}
              className={s.input}
              type="radio"
              name={name}
              value={value}
              onChange={handleChange}
            />
            <span ref={spans.current[idx]}>{value}</span>
          </label>
        );
      })}
    </div>
  );
};

export default ItemAuto;
