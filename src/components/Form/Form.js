import React, { useState } from "react";
import ReactGA from "react-ga";

// import { fetchInDocUa } from "../../services/api";
import ItemAuto from "../ItemAuto/ItemAuto";
import marka from "../../data/marka.json";
import Audi from "../../data/model-audi.json";
import BMW from "../../data/model-bmw.json";
import A4 from "../../data/modification-audi-a4.json";
import A6 from "../../data/modification-audi-a6.json";
import X5 from "../../data/modification-bmw-x5.json";
import s from "./Form.module.css";

const trackingId = "UA-157277826-1";
ReactGA.initialize(trackingId);

let infoAuto = "";
let prevDataItemAuto = null;
let nowDataItemAuto = null;

const Form = () => {
  const [dataItemAuto, setDataItemAuto] = useState(marka);
  const [id, setID] = useState("");
  const [name, setName] = useState("");

  const [formClasses, setFormClasses] = useState([s.form]);
  const [itemAutoClasses, setItemAutoClasses] = useState([s.itemAuto]);

  const [checkedMarka, setCheckedMarka] = useState(true);
  const [checkedModel, setCheckedModel] = useState(false);
  const [checkedModification, setCheckedModification] = useState(false);

  const allDataItemAuto = { Audi, BMW, A4, A6, X5 };
  const notFound = [
    {
      marka_name: "Для данного выбора отсутствуют данные",
      marka_id: "1"
    }
  ];

  function addStyles(height, scale) {
    const arrFormClasses = formClasses;
    arrFormClasses.push(height);
    const strFormClasses = arrFormClasses.join(" ");
    setFormClasses(strFormClasses);

    const arrItemAutoClasses = itemAutoClasses;
    arrItemAutoClasses.push(scale);
    const strItemAutoClasses = arrItemAutoClasses.join(" ");
    setItemAutoClasses(strItemAutoClasses);
  }

  function deleteStyles() {
    const arrFormClasses = formClasses.split(" ");
    arrFormClasses.pop();
    setFormClasses(arrFormClasses);

    const arrItemAutoClasses = itemAutoClasses.split(" ");
    arrItemAutoClasses.pop();
    setItemAutoClasses(arrItemAutoClasses);
  }

  function handleChangeMarka() {
    if (checkedMarka) {
      typeof formClasses !== "string" && addStyles(s.height, s.scale);
      typeof formClasses === "string" && deleteStyles();
    }

    setDataItemAuto(marka);

    if (name === "marka") {
      setCheckedMarka(true);
      setCheckedModel(true);
      setCheckedModification(false);
    } else if (name === "model") {
      setCheckedMarka(true);
      setCheckedModel(false);
      setCheckedModification(true);
    }
  }

  function handleChangeModel() {
    if (checkedModel) {
      typeof formClasses !== "string" && addStyles(s.height, s.scale);
      typeof formClasses === "string" && deleteStyles();
    }

    if (name === "marka" || name === "model") {
      if (name === "marka") {
        setDataItemAuto(nowDataItemAuto);
        setCheckedMarka(false);
        setCheckedModel(true);
        setCheckedModification(false);
      } else if (name === "model") {
        setDataItemAuto(prevDataItemAuto);
        setCheckedMarka(false);
        setCheckedModel(true);
        setCheckedModification(true);
      }
    }
  }

  function handleChangeModification() {
    if (checkedModification) {
      typeof formClasses !== "string" && addStyles(s.height, s.scale);
      typeof formClasses === "string" && deleteStyles();
    }

    if (name === "model") {
      setDataItemAuto(nowDataItemAuto);
      setCheckedMarka(false);
      setCheckedModel(false);
      setCheckedModification(true);
    }
  }

  function onPropsUp(id, name, value) {
    if (name === "marka") {
      setID(id);
      setName(name);

      if (allDataItemAuto[value]) {
        prevDataItemAuto = dataItemAuto; // чтобы можно было гулять между выбором марки, модели и двигателя
        setDataItemAuto(allDataItemAuto[value]);
        //  AXIOS ЗАПРОС
        // fetchInDocUa(value)
        //   .then(({ data }) => setDataItemAuto(data))
        //   .catch(err => console.log(err));
        nowDataItemAuto = allDataItemAuto[value]; // чтобы можно было гулять между выбором марки, модели и двигателя

        setCheckedMarka(false);
        setCheckedModel(true);
        setCheckedModification(false);

        infoAuto = infoAuto + value + "; ";
      } else {
        setDataItemAuto(notFound);
      }
    } else if (name === "model") {
      setID(id);
      setName(name);

      if (allDataItemAuto[value]) {
        prevDataItemAuto = dataItemAuto; // чтобы можно было гулять между выбором марки, модели и двигателя
        setDataItemAuto(allDataItemAuto[value]);
        //  AXIOS ЗАПРОС
        // fetchInDocUa(value)
        //   .then(({ data }) => setDataItemAuto(data))
        //   .catch(err => console.log(err));
        nowDataItemAuto = allDataItemAuto[value]; // чтобы можно было гулять между выбором марки, модели и двигателя

        setCheckedModel(false);
        setCheckedModification(true);

        infoAuto = infoAuto + value + "; ";
      } else {
        setDataItemAuto(notFound);
      }
    } else if (name === "modification") {
      setID(id);
      setName(name);
      setCheckedModel(false);
      setCheckedModification(true);

      alert(infoAuto + value);
    }
  }

  ReactGA.event({
    category: "FVA",
    action: name,
    label: id
  });

  return (
    <form className={formClasses}>
      <div className={s.header}>
        <input
          id="marka"
          className={s.input}
          type="checkbox"
          name="point"
          value="marka"
          checked={checkedMarka}
          onChange={handleChangeMarka}
        />
        <label className={s.label} htmlFor="marka">
          Выберите марку <span className={s.span} />
        </label>
        <input
          id="model"
          className={s.input}
          type="checkbox"
          name="point"
          value="model"
          checked={checkedModel}
          onChange={handleChangeModel}
        />
        <label className={s.label} htmlFor="model">
          Выберите модель <span className={s.span} />
        </label>
        <input
          id="modification"
          className={s.input}
          type="checkbox"
          name="point"
          value="modification"
          checked={checkedModification}
          onChange={handleChangeModification}
        />
        <label className={s.label} htmlFor="modification">
          Выберите двигатель <span className={s.span} />
        </label>
      </div>

      <div className={itemAutoClasses}>
        <ItemAuto dataItemAuto={dataItemAuto} onPropsUp={onPropsUp} />
      </div>
    </form>
  );
};

export default Form;
