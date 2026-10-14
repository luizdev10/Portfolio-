import { useEffect, useState } from "react";

// Usado pelas seções com fundo animado para ajustar foco/zoom da cena
// conforme a tela é estreita (celular) ou larga (desktop).
export default function useNarrow(query = "(max-width: 767px)") {
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const sync = () => setNarrow(mediaQuery.matches);

    sync();
    mediaQuery.addEventListener("change", sync);
    return () => mediaQuery.removeEventListener("change", sync);
  }, [query]);

  return narrow;
}
