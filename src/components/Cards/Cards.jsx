import React from "react";
import style from "./style.module.css";

const Cards = ({ produtos }) => {
  return (
    <>
      {produtos.map((produto, index) => {
        return (
          <div className={style.card} key={index}>
            <h3>{produto.name}</h3>
            <span>Tipo: {produto.type}</span>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
