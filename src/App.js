import "./App.css";
import Button from "./components/Button/Button";
import Card from "./components/Cards/Cards";
import Label from "./components/Label/Label";
import style from "./input.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [produtos, setProdutos] = useState([]);

  const [busca, setBusca] = useState();

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${busca}&source=nanook`
      )
      .then((resposta) => {
        setProdutos(resposta.data.products);
        console.log(resposta.data);
        console.log(resposta.data.products[0]._meta.score);
      });
  }, [update]);

  function handlebusca(e) {
    let value = e.target.value;
    setBusca(value);
  }

  return (
    <>
      <div className="div">
        <Label />
        <input
          type="text"
          placeholder="Sugestão: camisa, iphone, maquina de lavar..."
          className={style.input}
          value={busca}
          onChange={handlebusca}
        />
      </div>
      <div className="div">
        <Button onClick={() => setUpdate(!update)} />
      </div>
      <div className="produtos">
        <Card produtos={produtos} />
      </div>
    </>
  );
}

export default App;
