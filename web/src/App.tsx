import React from "react";
import "./styles/main.css";

import LogoImg from "./assets/logo-nlw-esports.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";

const App = () => {
  const games = [
    { title: "League of Legends", adsCount: 4, bannerUrl: "/game-1.png" },
    { title: "Apex Legends", adsCount: 4, bannerUrl: "/game-2.png" },
    { title: "Counter Strike", adsCount: 4, bannerUrl: "/game-3.png" },
    { title: "World of Warcraft", adsCount: 4, bannerUrl: "/game-4.png" },
    { title: "Dota 2", adsCount: 4, bannerUrl: "/game-5.png" },
    { title: "Fortnite", adsCount: 4, bannerUrl: "/game-6.png" },
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
            <GameBanner
              key={i}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game.adsCount}
            />
          );
        })}
      </div>
      <CreateAdBanner />
    </div>
  );
};

export default App;
