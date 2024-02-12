import * as Dialog from "@radix-ui/react-dialog";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { clsx } from "clsx";
import { X } from "lucide-react";
import { Note } from "@/app";

interface NoteCardProps {
  note: Note;
  onNoteDelete: (id: string) => void;
}

export function NoteCard({ note, onNoteDelete }: NoteCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className={clsx(
          "flex flex-col p-5 gap-3 rounded-md overflow-hidden relative text-left outline-none bg-slate-800",
          "hover:ring-2 hover:ring-slate-600",
          "focus-visible:ring-2 focus-visible:ring-lime-400",
        )}
      >
        <span className="text-sm font-medium text-slate-200">
          {formatDistanceToNow(note.date, { locale: ptBR })}
        </span>
        <p className="text-sm leading-5 text-slate-400">{note.content}</p>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60" />

        <Dialog.Content
          className={clsx(
            "fixed overflow-hidden inset-0 w-full",
            "flex flex-col outline-none bg-slate-700",
            "md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2",
            "md:max-w-[640px] md:h-[60vh] md:rounded-md",
          )}
        >
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-sm font-medium text-slate-200">
              {formatDistanceToNow(note.date, {
                locale: ptBR,
                addSuffix: true,
              })}
            </span>

            <p className="text-sm leading-5 text-slate-400">{note.content}</p>
          </div>

          <button
            type="button"
            onClick={() => onNoteDelete(note.id)}
            className="group w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none font-medium"
          >
            Deseja{" "}
            <span className="text-red-400 group-hover:underline">
              apagar essa nota
            </span>
            ?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
