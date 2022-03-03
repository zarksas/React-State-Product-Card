import React, { useState } from "react";
import cart from "./cart.jpg";
import style from "./App.module.css";

function App() {
  const [addCard, setAddCard] = useState(false);
  const [window, setWindow] = useState(false);
  const [switchWindow, setSwitchWindow] = useState(false);

  const handleClick = () => {
    setAddCard(true);
  };

  const handleClickWindow = () => {
    setWindow(true);
    switchWindow ? setSwitchWindow(false) : setSwitchWindow(true);
    window ? setWindow(false) : setWindow(true);
  };

  const deleteClick = () => {
    setAddCard(false);
  };

  return (
    <div className={style.main}>
      <div className={style.img}>
        <img src={cart} alt="no" />
      </div>
      <div>
        <p className={style.p}>Nike Sneaker</p>
        <button className={style.detal} onClick={handleClickWindow}>
          {switchWindow ? "Убрать" : "Детали"}
        </button>
        <p className={style.window}>{window ? "Lorem ipsum bla bla" : ""}</p>
        <p className={style.p}>$120</p>
      </div>
      <div className={style.line}></div>
      <div className={style.footer}>
        <p className={style.lorem}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          quos.
        </p>
        <button
          className={style.card}
          onClick={handleClick}
          disabled={addCard ? true : false}
        >
          {addCard ? "Добавлено в корзину" : "Добавить в корзину"}
        </button>
        <p className={style.outputCard} onClick={deleteClick}>
          {addCard ? "Удалить из корзины!" : ""}
        </p>
      </div>
    </div>
  );
}

export default App;
