import { HardDriveDownload, ArrowDown, ArrowUpRight } from "lucide-react";

export default function Home() {
  const codeLines = [
    <span className="text-red-400">&lt;ideia&gt;</span>,
    <span className="pl-4">criatividade</span>,
    <span className="pl-4">
      <span className="text-blue-300">+</span> dedicação
    </span>,
    <span className="text-red-400">&lt;/ideia&gt;</span>,
    <span aria-hidden="true">&nbsp;</span>,
    <>
      <span className="text-green-400">const</span>{" "}
      <span className="text-blue-300">caminho</span>{" "}
      <span className="text-white">=</span>
    </>,
    <span className="pl-4 text-orange-300">"sempre aprendendo"</span>,
    <span className="text-gray-500">// próximo passo: seu projeto</span>,
  ];

  return (
    <section
      id="home"
      className="bg-[#F4F1EA] px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-32 lg:min-h-full lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <div className="mb-6 flex items-center gap-2 text-xs font-medium tracking-wide sm:text-sm">
            <HardDriveDownload size={20} aria-hidden="true" />
            <p>DISPONÍVEL PARA APRENDER, COLABORAR E AJUDAR</p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Olá, eu sou
              <br />
              <span className="text-green-700">Luiz Henrique.</span>
            </h1>

            <p className="max-w-xl text-base font-light leading-relaxed text-gray-700 sm:text-lg">
              Estou evoluindo minha jornada como desenvolvedor web e transformo
              ideias em páginas simples e acessíveis.
            </p>
          </div>

          <div className="my-6 flex flex-col gap-3 min-[440px]:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-300 p-3 text-sm font-medium transition-colors hover:bg-gray-200"
            >
              Conheça meus projetos
              <ArrowDown size={20} aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg p-3 text-sm font-medium transition-colors hover:bg-gray-200"
            >
              Entre em contato
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </div>

          <p className="text-sm font-light text-gray-600 sm:text-base">
            Aprendendo, construindo e melhorando a cada projeto.
          </p>
        </div>

        <div className="flex min-w-0 justify-center px-1 py-2 sm:px-6 lg:p-8">
          <div className="w-full max-w-lg -rotate-1 overflow-hidden rounded-xl border border-gray-700/50 bg-[#252526] shadow-2xl">
            <div className="flex items-center border-b border-gray-800 bg-[#1e1e1e] px-4 py-3">
              <div className="flex gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <span className="flex-1 text-center font-mono text-xs tracking-wide text-gray-400 sm:text-sm">
                sobre-mim.html
              </span>
              <span className="w-[44px]" aria-hidden="true" />
            </div>

            <div className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-4 p-4 font-mono text-xs leading-7 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:p-6 sm:text-sm">
              {codeLines.map((line, index) => (
                <div key={index} className="contents">
                  <span className="select-none text-right text-gray-500 opacity-60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 text-gray-300">{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}