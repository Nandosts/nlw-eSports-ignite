import React from "react";

interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg text-white">
      <img src={props.bannerUrl} alt={`Imagem do Jogo ${props.title}`} />
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="bg-game-gradient absolute inset-x-0 bottom-0 w-full px-4 pt-16 pb-4">
        <strong className="block font-bold">{props.title}</strong>
        <span className="mt-1 block text-sm text-zinc-300">
          {props.adsCount}
          {props.adsCount && props.adsCount === 1 ? " anúncio" : " anúncios"}
        </span>
      </div>
    </a>
  );
}
