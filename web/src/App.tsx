import React from "react";
import "./styles/main.css";

import LogoImg from "./assets/logo-nlw-esports.svg";
import { MagnifyingGlassPlus } from "phosphor-react";

const App = () => {
  const games = [
    "League of Legends",
    "Apex Legends",
    "Counter Strike",
    "World of Warcraft",
    "Dota 2",
    "Fortnite",
  ];
  16;
  return (
    <div className="mx-auto my-20 flex max-w-[1344px] flex-col items-center">
      <img src={LogoImg} className="h-[30%] w-[30%]" alt="Logo NLW e-sports" />
      <h1 className="mt-20 text-6xl font-black text-white">
        Seu {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>
      <div className="mt-16 grid grid-cols-6 gap-6">
        {games.map(function (game, i) {
          return (
            <a href="" key={i} className="relative rounded-lg text-white">
              <img
                key={i}
                src={`/game-${i + 1}.png`}
                alt={`Imagem do Jogo ${game}`}
              />
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
              <div className="bg-game-gradient absolute inset-x-0 bottom-0 w-full px-4 pt-16 pb-4">
                <strong className="block font-bold">{game}</strong>
                <span className="mt-1 block text-sm text-zinc-300">
                  4 anúncios
                </span>
              </div>
            </a>
          );
        })}
      </div>
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="bg-nlw-gradient mt-8 self-stretch overflow-hidden rounded-lg pt-1">
        <div className=" flex items-center justify-between bg-[#2A2634] px-8 py-6">
          <div>
            <strong className="block text-2xl font-black text-white">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400">
              Publique um anúncio pra encontrar novos players!
            </span>
          </div>
          <button className="flex items-center gap-3 rounded bg-violet-500 py-3 px-4 text-white hover:bg-violet-600">
            <MagnifyingGlassPlus size={24} />
            Publicar Anúncio
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
