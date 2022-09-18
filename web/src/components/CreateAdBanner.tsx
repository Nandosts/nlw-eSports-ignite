import React from "react";
import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner() {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
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
  );
}
