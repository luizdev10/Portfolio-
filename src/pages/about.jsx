import { ArrowUpRight } from "lucide-react";

const skills = [
    {
        name: "HTML",
        level: "Fundamento",
        icon: (
            <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden="true">
                <path fill="#E44D26" d="M19.037 113.876L8.934 1.292h110.13l-10.138 112.584-45.064 12.544z" />
                <path fill="#F16529" d="M64 116.8l36.378-10.086 8.668-97.037H64z" />
                <path fill="#EBEBEB" d="M64 52.455H45.788L44.47 38.361H64V24.599H29.989l.329 3.675 3.384 37.796H64zm0 35.893l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z" />
                <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.33 3.234-36.215.336-3.709zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z" />
            </svg>
        ),
    },
    {
        name: "CSS",
        level: "Fundamento",
        icon: (
            <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden="true">
                <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543z" />
                <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16z" />
                <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95z" />
                <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018z" />
                <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.6l28.354-7.858.208-2.337 2.406-26.09z" />
                <path fill="#EBEBEB" d="M64.048 51.429v13.831H45.78l-.338-3.797-1.026-11.064H29.62l1.937 21.717.063.001h32.428v.001l.072-.001H80.86l-1.666 18.522-15.195 4.108v14.6l28.354-7.858.208-2.337 3.5-39.493.337-3.712H64.048z" />
            </svg>
        ),
    },
    {
        name: "JavaScript",
        level: "Básico",
        icon: (
            <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden="true">
                <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
                <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z" />
            </svg>
        ),
    },
    {
        name: "React",
        level: "Aprendendo",
        icon: (
            <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden="true">
                <g fill="#61DAFB">
                    <circle cx="64" cy="64" r="11.4" />
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13-1.2-21.8-9.6-26.6-8.5-4.9-21.5-2.4-34.4 6.4-3.1 2.1-6.1 4.5-9 7.2-1.9-1.8-3.9-3.5-5.9-5C32.2 6.4 19.1 3.7 10.6 8.6 2.1 13.5-1.5 22.6.7 35.5c.9 5.1 2.8 10.7 5.7 16.7-.3.7-.5 1.4-.7 2.1-2.5 9.1-2.5 17.8 0 25.5 2.3 7.4 6.9 12 13.6 13.3 1.9.4 3.9.5 6 .5 4.4 0 9.3-.8 14.6-2.6.6.5 1.2.9 1.8 1.4 6.5 4.8 13.7 8.1 20.4 8.8.8.1 1.5.1 2.3.1 7.2 0 13.8-3.1 18.8-9.4 5-6.2 6.8-15 5.3-26-.5-3.2-1.3-6.5-2.4-9.9 2.2-.9 4.4-1.8 6.5-2.8 12.5-6.1 19.5-14.1 19.5-22.4 0-8.4-7.3-16.4-19.7-22.2z" />
                </g>
            </svg>
        ),
    },
    {
        name: "Git",
        level: "Básico",
        icon: (
            <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden="true">
                <path fill="#F34F29" d="M124.742 58.378L69.625 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.685 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.463 6.609 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.109c-2.862-2.861-3.551-7.06-2.083-10.576L40.836 20.333 3.229 57.939a8.127 8.127 0 000 11.499l55.117 55.114c3.172 3.174 8.32 3.174 11.497 0l54.899-54.894a8.135 8.135 0 000-11.28" />
            </svg>
        ),
    },
    {
        name: "Tailwind",
        level: "Básico",
        icon: (
            <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden="true">
                <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64z" fill="#38bdf8" />
            </svg>
        ),
    },
    {
        name: "Vite",
        level: "Básico",
        icon: (
            <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden="true">
                <defs>
                    <linearGradient id="vite-a" x1="6" x2="235" y1="33" y2="344" gradientTransform="translate(0 -.002) scale(.3122)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#41d1ff" />
                        <stop offset="1" stopColor="#bd34fe" />
                    </linearGradient>
                    <linearGradient id="vite-b" x1="194.651" x2="236.076" y1="8.818" y2="292.989" gradientTransform="translate(0 -.002) scale(.3122)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#ff3e00" />
                        <stop offset=".562" stopColor="#ff3e00" />
                        <stop offset="1" stopColor="#ff6711" />
                    </linearGradient>
                </defs>
                <path fill="url(#vite-a)" d="M124.766 19.52 67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.09 3.09 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594Z" />
                <path fill="url(#vite-b)" d="M91.46 1.43 48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968 34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.562 1.562 0 0 1-1.793-1.965l7.95-27.562A1.562 1.562 0 0 0 91.46 1.43Z" />
            </svg>
        ),
    },
    {
        name: "Figma",
        level: "Básico",
        icon: (
            <svg viewBox="0 0 128 128" className="h-8 w-8" aria-hidden="true">
                <path fill="#0acf83" d="M45.5 129c12.98 0 23.5-10.52 23.5-23.5V82H45.5C32.52 82 22 92.52 22 105.5S32.52 129 45.5 129z" />
                <path fill="#a259ff" d="M22 64c0-12.98 10.52-23.5 23.5-23.5H69v47H45.5C32.52 87.5 22 76.98 22 64z" />
                <path fill="#f24e1e" d="M22 22.5C22 9.52 32.52-1 45.5-1H69v47H45.5C32.52 46 22 35.48 22 22.5z" />
                <path fill="#ff7262" d="M69-1h23.5C105.48-1 116 9.52 116 22.5S105.48 46 92.5 46H69V-1z" />
                <path fill="#1abcfe" d="M116 64c0 12.98-10.52 23.5-23.5 23.5S69 76.98 69 64s10.52-23.5 23.5-23.5S116 51.02 116 64z" />
            </svg>
        ),
    },
];

const levelColors = {
    Fundamento: {
        bg: "bg-white/10",
        text: "text-white/70",
        dot: "bg-[#a3c586]",
    },
    Básico: {
        bg: "bg-white/10",
        text: "text-white/70",
        dot: "bg-[#7abce0]",
    },
    Aprendendo: {
        bg: "bg-white/10",
        text: "text-white/70",
        dot: "bg-[#f2b477]",
    },
};

export default function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-title"
            className="min-h-screen bg-black px-6 py-24 text-white sm:px-10 lg:px-20"
        >
            <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center">
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
                    Um pouco sobre mim
                </p>

                <div>
                    <h2
                        id="about-title"
                        className="max-w-3xl text-4xl font-light leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]"
                    >
                        Pequenos passos.
                        <span className="block text-white/60">
                            Boas experiências na web.
                        </span>
                    </h2>

                    <div className="mt-5 grid max-w-3xl gap-5 text-sm leading-relaxed text-white/50 sm:grid-cols-2 sm:gap-8">
                        <p>
                            Crio sites claros, acessíveis e agradáveis de usar, combinando
                            atenção aos detalhes com soluções práticas para cada projeto.
                        </p>

                        <p>
                            Desenvolvi três sites estáticos para diferentes segmentos.
                            Cada projeto ampliou minhas habilidades e me permitiu explorar
                            novas formas de criar experiências digitais.
                        </p>
                    </div>

                    <div className="mt-10">
                        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
                            Tecnologias
                        </p>
                        <ul
                            className="grid grid-cols-2 gap-3 sm:grid-cols-3"
                            aria-label="Lista de habilidades"
                        >
                            {skills.map((skill) => {
                                const colors = levelColors[skill.level];

                                return (
                                    <li
                                        key={skill.name}
                                        className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
                                    >
                                        <span className="shrink-0">{skill.icon}</span>

                                        <div className="min-w-0">
                                            <p className="truncate text-sm font-semibold text-white">
                                                {skill.name}
                                            </p>
                                            <span
                                                className={`mt-1 inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-medium ${colors.bg} ${colors.text}`}
                                            >
                                                <span
                                                    className={`h-1.5 w-1.5 rounded-full ${colors.dot}`}
                                                    aria-hidden="true"
                                                />
                                                {skill.level}
                                            </span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <a
                        href="#projects"
                        className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-white/70 transition-all hover:border-white/40 hover:text-white"
                    >
                        Veja o que tenho criado
                        <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    );
}