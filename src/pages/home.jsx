import { ArrowDown, ArrowUpRight, HardDriveDownload } from "lucide-react";
import OrbitalGalaxy from "../components/ui/galaxy.jsx";
import { useState, useEffect } from "react";

export default function Home() {
  function useNarrow(query = "(max-width: 767px)") {
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

  const narrow = useNarrow();

  const codeLines = [
    <span key="open-idea" className="text-[#ff79c6]">&lt;ideia&gt;</span>,
    <span key="creativity" className="pl-4 text-[#f8f8f2]">
      criatividade
    </span>,
    <span key="dedication" className="pl-4">
      <span className="text-[#8be9fd]">+</span>{" "}
      <span className="text-[#f8f8f2]">dedicação</span>
    </span>,
    <span key="close-idea" className="text-[#ff79c6]">&lt;/ideia&gt;</span>,
    <span key="blank-line" aria-hidden="true">
      &nbsp;
    </span>,
    <span key="path-assignment">
      <span className="text-[#ff79c6]">const</span>{" "}
      <span className="text-[#8be9fd]">caminho</span>{" "}
      <span className="text-[#f8f8f2]">=</span>
    </span>,
    <span key="learning" className="pl-4 text-[#f1fa8c]">
      "sempre aprendendo"
    </span>,
    <span key="next-project" className="text-[#6272a4]">
      // próximo passo: seu projeto
    </span>,
  ];

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-black px-6 pb-20 pt-28 text-white sm:px-10 lg:px-20"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <OrbitalGalaxy
          focus={narrow ? [0.5, 0.78] : [0.72, 0.44]}
          scrim={narrow ? "top" : "left"}
          scrimStrength={narrow ? 0.96 : 0.93}
          viewRadius={narrow ? 2.2 : 3.2}
          lead={narrow ? 0.04 : 0.1}
          glow={narrow ? 0.55 : 1}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#bd93f9]/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

        <div className="absolute right-[-18rem] top-1/2 aspect-square w-[min(88vw,56rem)] -translate-y-1/2 sm:right-[-15rem] lg:right-[-12rem]">
          <div className="absolute inset-[8%] rounded-full border border-[#bd93f9]/[0.12]" />
          <div className="absolute inset-[20%] rounded-full border border-[#8be9fd]/[0.14]" />
          <div className="absolute inset-[33%] rounded-full border border-[#bd93f9]/[0.18]" />
          <div className="absolute inset-[12%] rotate-[-24deg] rounded-full border border-[#ff79c6]/[0.12]" />
          <div className="absolute inset-[25%] rotate-[38deg] rounded-full border border-[#8be9fd]/[0.12]" />
          <div className="absolute inset-[28%] rounded-full bg-[radial-gradient(circle,rgba(189,147,249,0.14),rgba(40,42,54,0.04)_50%,transparent_72%)] blur-sm" />
          <span className="absolute left-[18%] top-[30%] h-2 w-2 rounded-full bg-[#8be9fd]/70 shadow-[0_0_18px_rgba(139,233,253,0.8)]" />
          <span className="absolute right-[23%] top-[22%] h-1.5 w-1.5 rounded-full bg-[#ff79c6]/80 shadow-[0_0_16px_rgba(255,121,198,0.8)]" />
          <span className="absolute bottom-[20%] left-[44%] h-1.5 w-1.5 rounded-full bg-[#bd93f9]/80 shadow-[0_0_18px_rgba(189,147,249,0.8)]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="min-w-0">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white/60 backdrop-blur-sm sm:text-xs">
            <HardDriveDownload
              size={15}
              className="text-emerald-300"
              aria-hidden="true"
            />
            Disponível para aprender e colaborar
          </div>

          <h1 className="max-w-3xl text-5xl font-light leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Olá, eu sou
            <span className="mt-2 block bg-gradient-to-r from-white via-white to-white/45 bg-clip-text font-medium text-transparent text-hover">
              Luiz Henrique.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
            Desenvolvedor web em evolução, transformando ideias em experiências
            digitais simples, acessíveis e feitas com cuidado.
          </p>

          <div className="mt-9 flex flex-col gap-3 min-[440px]:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-white/85"
            >
              Conheça meus projetos
              <ArrowDown size={16} aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/70 transition-colors hover:border-white/35 hover:text-white"
            >
              Vamos conversar
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 text-xs text-white/35 sm:text-sm">
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-300"
              aria-hidden="true"
            />
            Aprendendo, construindo e melhorando a cada projeto.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div
            className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#bd93f9]/15 via-transparent to-[#ff79c6]/10 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative rotate-[-1deg] overflow-hidden rounded-2xl border border-[#bd93f9]/20 bg-[#282a36] text-[#f8f8f2] shadow-2xl shadow-[#bd93f9]/10 backdrop-blur-xl transition-transform duration-500 hover:rotate-0">
            <div className="flex items-center gap-3 border-b border-[#44475a] bg-[#21222c] px-5 py-4">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5555]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f1fa8c]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#50fa7b]" />
              </div>

              <span className="flex-1 text-center font-mono text-xs text-[#bd93f9]/75">
                sobre-mim.jsx
              </span>

              <span className="rounded-full border border-[#6272a4]/50 bg-[#44475a]/50 px-2 py-1 font-mono text-[9px] text-[#8be9fd]">
                JSX
              </span>
            </div>

            <div className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-4 px-4 py-6 font-mono text-xs leading-8 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:px-7 sm:py-8 sm:text-sm">
              {codeLines.map((line, index) => (
                <div key={index} className="contents">
                  <span className="select-none text-right text-[#6272a4]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">{line}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-[#44475a] bg-[#21222c]/80 px-5 py-3 text-[10px] text-[#bd93f9]/70 sm:px-7">
              <span className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#50fa7b]"
                  aria-hidden="true"
                />
                compilando novas ideias
              </span>
              <span className="font-mono">UTF-8</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}