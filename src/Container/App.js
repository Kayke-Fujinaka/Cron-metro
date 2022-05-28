import React, { useState } from "react";
import "./styles.css";

import image from "../assets/cronometro.png";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [interval, setIntervaly] = useState(0);

  let [nameBtn, setNameBtn] = useState("Iniciar");

  const startTimer = (timer) => {
    if (nameBtn === "Iniciar") {
      const intervaly = setInterval(() => {
        timer += 0.1;
        setTimer(timer);
      }, 100);
      setNameBtn("Pausar");
      setIntervaly(intervaly);
    }

    if (nameBtn === "Pausar") {
      if (interval) clearInterval(interval); setNameBtn("Iniciar");
    }
  }

  const clearTimer = () => {
    clearInterval(interval);
    setNameBtn('Iniciar')
    setTimer(0)
  }

  return (
    <div className="container">
      <img className="img" src={image} />
      <p className="timer">{timer.toFixed(1)}</p>
      <div className="btnArea">
        <button className="btn" onClick={() => startTimer(timer)}>
          {nameBtn}
        </button>
        <button className="btn" onClick={() => clearTimer()}>Limpar</button>
      </div>
    </div>
  );
}
