import React from "react";

import Marka from "../Marka/Marka";
import ModelAudi from "../Models/Audi/Audi";
import ModelBmw from "../Models/Bmw/Bmw";
import AudiA4 from "../Modifications/AudiA4/AudiA4";
import AudiA6 from "../Modifications/AudiA6/AudiA6";
import BmwX5 from "../Modifications/BmwX5/BmwX5";

const Form = () => {
  return (
    <form>
      <label>
        <input type="radio" />
        Выберите марку
      </label>
      <label>
        <input type="radio" />
        Выберите модель
      </label>
      <label>
        <input type="radio" />
        Выберите двигатель
      </label>
      <Marka />
      <ModelAudi />
      <ModelBmw />
      <AudiA4 />
      <AudiA6 />
      <BmwX5 />
    </form>
  );
};

export default Form;
