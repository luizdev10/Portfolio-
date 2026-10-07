import { useEffect, useState } from "react";
import { OrbitalHeroSection } from "@/components/ui/orbital-hero-section";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

function useNarrow(query = "(max-width: 767px)") {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const sync = () => setNarrow(m.matches);
    sync();
    m.addEventListener("change", sync);
    return () => m.removeEventListener("change", sync);
  }, [query]);
  return narrow;
}

const projects = [
  {
    id: "proj-tatuador",
    title: "Studio Tattoo",
    description: "Site para estúdio de tatuagem com galeria de trabalhos, agendamento e perfil do artista. Design sombrio e elegante.",
    tags: ["React", "Vite" ""JavaScript"],
    link: "#",
      github: "#",
      accent: "#a78bfa",
  },
  {
    id: "proj-barbearia",
    title: "Barbearia Clássica",
    description: "Landing page para barbearia com seção de serviços, depoimentos e botão de agendamento via WhatsApp.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "#",
    accent: "#fb923c",
  },
  {
    id: "proj-portfolio",
    title: "Este Portfólio",
    description: "Portfólio pessoal construído com React e Tailwind CSS v4. Foco em acessibilidade, tipografia e experiência do usuário.",
    tags: ["React", "Vite", "JavaScript", "Tailwind"],
    link: "#",
    github: "#",
    accent: "#5fd8ff",
  },
];

export default function Projects() {
  const narrow = useNarrow();

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative min-h-screen w-full"
    >

      <OrbitalHeroSection
        focus={narrow ? [0.5, 0.78] : [0.72, 0.44]}
        scrim={narrow ? "top" : "left"}
        scrimStrength={narrow ? 0.96 : 0.93}
        viewRadius={narrow ? 2.2 : 3.2}
        lead={narrow ? 0.04 : 0.1}
        glow={narrow ? 0.55 : 1}
        className="absolute inset-0"
      />


      <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 py-24 sm:px-10 lg:px-20">
        <div className="max-w-2xl">

          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
            Projetos
          </p>


          <h2
            id="projects-title"
            className="text-4xl font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]"
          >
            O que tenho
            <span className="block text-white/60">construído.</span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/50">
            Três sites desenvolvidos do zero, cada um com seu próprio conjunto de
            desafios e aprendizados.
          </p>

          <ul className="mt-10 flex flex-col gap-4" aria-label="Lista de projetos">
            {projects.map((proj) => (
              <li
                key={proj.id}
                id={proj.id}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-base font-semibold text-white">
                      {proj.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                      {proj.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full px-2.5 py-0.5 text-[11px] font-medium"
                          style={{ background: `${proj.accent}18`, color: proj.accent }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex shrink-0 gap-2">
                    <a
                      href={proj.github}
                      aria-label={`Código fonte de ${proj.title}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors hover:border-white/30 hover:text-white/80"
                    >
                      <Github size={14} />
                    </a>
                    <a
                      href={proj.link}
                      aria-label={`Ver ${proj.title} ao vivo`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors hover:border-white/30 hover:text-white/80"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-white/70 transition-all hover:border-white/40 hover:text-white"
          >
            Entre em contato
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
