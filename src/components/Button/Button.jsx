import React from "react";
import style from "./style.module.css";

const Button = ({ onClick }) => {
  return (
    <button type="button" className={style.btn} onClick={onClick}>
      Buscar
    </button>
  );
};

export default Button;
