import React from "react";

import { clsx } from "clsx";

export function NoteCard() {
  return (
    <button
      className={clsx(
        "p-5 space-y-3 rounded-md overflow-hidden relative text-left outline-none bg-slate-800",
        "hover:ring-2 hover:ring-slate-600",
        "focus-visible:ring-2 focus-visible:ring-lime-400",
      )}
    >
      <span className="text-sm font-medium text-slate-200">há 4 dias</span>
      <p className="text-sm leading-5 text-slate-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, illo
        asperiores amet incidunt vel adipisci reprehenderit maiores minima
        dignissimos qui placeat earum, voluptas pariatur quasi cumque ullam
        necessitatibus saepe! Neque? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Sint, illo asperiores amet incidunt vel adipisci
        reprehenderit maiores minima dignissimos qui placeat earum, voluptas
        pariatur quasi cumque ullam necessitatibus saepe! Neque? Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Sint, illo asperiores amet
        incidunt vel adipisci reprehenderit maiores minima dignissimos qui
        placeat earum, voluptas pariatur quasi cumque ullam necessitatibus
        saepe! Neque? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Sint, illo asperiores amet incidunt vel adipisci reprehenderit maiores
        minima dignissimos qui placeat earum, voluptas pariatur quasi cumque
        ullam necessitatibus saepe! Neque?
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
    </button>
  );
}
