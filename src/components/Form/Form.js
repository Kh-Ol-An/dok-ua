import React from "react";

import ItemAuto from "../ItemAuto/ItemAuto";
import marka from "../../data/marka.json";
import modelAudi from "../../data/model-audi.json";
import modelBmw from "../../data/model-bmw.json";
import modificationAudiA4 from "../../data/modification-audi-a4.json";
import modificationAudiA6 from "../../data/modification-audi-a6.json";
import modificationBmwX5 from "../../data/modification-bmw-x5.json";
import s from "./Form.module.css";

const Form = () => {
  return (
    <form className={s.form}>
      <div className={s.header}>
        <label className={s.label}>
          <input className={s.input} type="radio" />
          Выберите марку <span className={s.span} />
        </label>
        <label className={s.label}>
          <input className={s.input} type="radio" />
          Выберите модель <span className={s.span} />
        </label>
        <label className={s.label}>
          <input className={s.input} type="radio" />
          Выберите двигатель <span className={s.span} />
        </label>
      </div>

      <ItemAuto dataItemAuto={modificationBmwX5} />
    </form>
  );
};

export default Form;
