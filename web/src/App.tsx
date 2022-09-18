import React, { useState, useEffect } from "react";
import "./styles/main.css";

import LogoImg from "./assets/logo-nlw-esports.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import { Input } from "./components/Form/Input";

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
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
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

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60" />

          <Dialog.Content className="fixed top-1/2 left-1/2 w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#2A2634] py-8 px-10 text-white shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black text-white">
              Publique Um anúncio
            </Dialog.Title>

            <form className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">
                  Qual o Game?
                </label>
                <Input
                  id="game"
                  placeholder="Selecione o game que deseja jogar"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input id="name" placeholder="Como te chamam no game?" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                  <Input
                    id="yearsPlaying"
                    type="number"
                    placeholder="Tudo bem ser ZERO"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual o seu discord?</label>{" "}
                  <Input id="discord" type="text" placeholder="Usuario#0000" />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar?</label>

                  <div className="grid grid-cols-4 gap-2">
                    <button
                      className="h-8 w-8 rounded bg-zinc-900"
                      title="Domingo"
                    >
                      D
                    </button>
                    <button
                      className="h-8 w-8 rounded bg-zinc-900"
                      title="Segunda"
                    >
                      S
                    </button>
                    <button
                      className="h-8 w-8 rounded bg-zinc-900"
                      title="Terça"
                    >
                      T
                    </button>
                    <button
                      className="h-8 w-8 rounded bg-zinc-900"
                      title="Quarta"
                    >
                      Q
                    </button>
                    <button
                      className="h-8 w-8 rounded bg-zinc-900"
                      title="Quinta"
                    >
                      Q
                    </button>
                    <button
                      className="h-8 w-8 rounded bg-zinc-900"
                      title="Sexta"
                    >
                      S
                    </button>
                    <button
                      className="h-8 w-8 rounded bg-zinc-900"
                      title="Sábado"
                    >
                      S
                    </button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <Input id="hourStart" />
                  <div className="grid grid-cols-2 gap-2">
                    <Input id="hourStart" type="time" placeholder="De" />
                    <Input id="hourEnd" type="time" placeholder="Até" />
                  </div>
                </div>
              </div>

              <div className="mt-2 flex gap-2 text-sm">
                <Input type="checkbox" />
                Costumo me conectar ao chat de voz
              </div>

              <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close
                  type="button"
                  className="h-12 rounded-md bg-zinc-500 px-5 font-semibold hover:bg-zinc-600"
                >
                  Cancelar
                </Dialog.Close>
                <button
                  type="submit"
                  className="flex h-12 items-center gap-3 rounded-md bg-violet-500 px-5 font-semibold hover:bg-violet-600"
                >
                  <GameController size={24} /> Encontrar duo!
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default App;
