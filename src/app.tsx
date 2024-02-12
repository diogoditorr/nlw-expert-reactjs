import Logo from "@/assets/logo-nlw-expert.svg";

import { clsx } from "clsx";
import { NoteCard } from "./components/note-card";
import { NewNoteCard } from "./components/new-note-card";

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={Logo} alt="NLW Expert" />

      <form className="w-full">
        <input
          type="text"
          name=""
          id=""
          placeholder="Busque em suas notas..."
          className={clsx(
            "w-full bg-transparent text-2xl font-semibold tracking-tight outline-none placeholder:text-slate-500 ",
          )}
        />
      </form>

      <div className="h-px bg-slate-700"></div>

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard />

        <NoteCard
          note={{ date: new Date(2024, 1, 2), content: "Hello World" }}
        />
      </div>
    </div>
  );
}
