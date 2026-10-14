import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";


export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setVisible(window.scrollY > window.innerHeight * 0.75);
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <a
      href="#home"
      aria-label="Voltar ao topo"
      className={`fixed bottom-6 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0b0b0f]/90 text-white/70 shadow-lg shadow-black/30 backdrop-blur-xl transition-all duration-300 hover:border-[#bd93f9]/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd93f9] sm:right-8 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </a>
  );
}
