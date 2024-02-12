import * as Dialog from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { X } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

export function NewNoteCard() {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
  const [content, setContent] = useState("");

  function handleStartEditor() {
    setShouldShowOnboarding(false);
  }

  function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const newValue = event.target.value;

    if (newValue === "") {
      setShouldShowOnboarding(true);
    }

    setContent(newValue);
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault();

    console.log(content);

    toast.success("Nota criada com sucesso!");
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger
        className={clsx(
          "rounded-md flex flex-col bg-slate-700 p-5 gap-3 text-left outline-none",
          "hover:ring-2 hover:ring-slate-600",
          "focus-visible:ring-2 focus-visible:ring-lime-400",
        )}
      >
        <span className="text-sm font-medium text-slate-200">
          Adicionar nota
        </span>

        <p className="text-sm leading-5 text-slate-400">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60" />

        <Dialog.Content
          className={clsx(
            "fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            "max-w-[640px] w-full h-[60vh] rounded-md flex flex-col outline-none bg-slate-700",
          )}
        >
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <form onSubmit={handleSaveNote} className="flex-1 flex flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-medium text-slate-200">
                Adicionar nota
              </span>

              {shouldShowOnboarding ? (
                <p className="text-sm leading-5 text-slate-400">
                  Comece{" "}
                  <button className="font-medium text-lime-400 hover:underline">
                    gravando uma nota
                  </button>{" "}
                  em áudio ou se preferir{" "}
                  <button
                    onClick={handleStartEditor}
                    className="font-medium text-lime-400 hover:underline"
                  >
                    utilize apenas texto
                  </button>
                  .
                </p>
              ) : (
                <textarea
                  autoFocus
                  onChange={handleContentChange}
                  className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                />
              )}
            </div>

            <button
              type="submit"
              disabled={shouldShowOnboarding}
              className={clsx(
                "w-full py-4 text-center text-sm font-medium",
                "bg-lime-400 text-lime-950 outline-none hover:enabled:bg-lime-500",
                "disabled:bg-slate-400 disabled:text-slate-200 disabled:cursor-not-allowed",
              )}
            >
              Salvar nota
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
