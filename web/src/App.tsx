import React from "react";
import "./styles/main.css";

import LogoImg from "./assets/logo-nlw-esports.svg";

const App = () => {
  16;
  return (
    <div className="mx-auto my-20 flex max-w-[1344px] flex-col items-center">
      <img src={LogoImg} className="h-52 w-52" alt="Logo NLW e-sports" />
      <h1 className="mt-20 text-6xl font-black text-white">
        Seu {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
        <div className="mt-16 grid grid-cols-6 gap-6">
          {[1, 2, 3, 4, 5, 6].map(function (number, i) {
            return (
              <a href="" key={i}>
                <img
                  key={i}
                  src={`/game-${number}.png`}
                  alt={`Imagem do Jogo ${number}`}
                />
              </a>
            );
          })}
        </div>
      </h1>
    </div>
  );
};

export default App;
