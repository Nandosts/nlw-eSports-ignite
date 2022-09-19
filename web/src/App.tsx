import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import "./styles/main.css";

import LogoImg from "./assets/logo-nlw-esports.svg";
import { GameBanner } from "./components/GameBanner";

import { CreateAdBanner } from "./components/CreateAdBanner";
import { CreateAdModal } from "./components/CreateAdModal";

interface GameTypes {
  id: string;
  title: string;
  _count: {
    ads: number;
  };
  bannerUrl: string;
}

const App = () => {
  const [games, setGames] = useState<GameTypes[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games").then((response) =>
      setGames(response.data)
    );
  }, []);

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
        {games.map(function (game) {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
};

export default App;
