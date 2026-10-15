import { useEffect, useRef, useState } from "react";
import { ChevronRight, X, Menu } from "lucide-react";
import Logo from "../components/ui/logo";

const links = [
    { nome: "Início", url: "#home" },
    { nome: "Sobre", url: "#about" },
    { nome: "Projetos", url: "#projects" },
    { nome: "Contato", url: "#contact" },
];

// Observa as seções da página para destacar, no menu, o link
// correspondente ao que a pessoa está vendo no momento.
function useActiveSection(ids) {
    const [active, setActive] = useState(ids[0]);

    useEffect(() => {
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visible) setActive(visible.target.id);
            },
            { rootMargin: "-45% 0px -45% 0px" }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [ids]);

    return active;
}

export default function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);
    const menuRef = useRef(null);
    const activeId = useActiveSection(links.map((item) => item.url.slice(1)));

    useEffect(() => {
        if (!menuAberto) return;

        function onKeyDown(e) {
            if (e.key === "Escape") setMenuAberto(false);
        }

        function onClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuAberto(false);
            }
        }

        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("pointerdown", onClickOutside);

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", onKeyDown);
            document.removeEventListener("pointerdown", onClickOutside);
        };
    }, [menuAberto]);

    return (
        <nav
            ref={menuRef}
            style={{ position: "fixed", top: 0, right: 0, left: 0, zIndex: 1000 }}
            className="w-full border-b border-white/10 bg-[#0b0b0f]/95 text-[#f8f8f2] shadow-lg shadow-black/10"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
                <a
                    href="#home"
                    aria-label="luix.dev — início"
                    className="group flex items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#bd93f9]"
                    onClick={() => setMenuAberto(false)}
                >
                    <Logo />
                </a>

                <div className="flex items-center gap-5">
                    <ul className="hidden items-center gap-1 md:flex">
                        {links.map((item) => {
                            const isActive = activeId === item.url.slice(1);

                            return (
                                <li key={item.url}>
                                    <a
                                        href={item.url}
                                        aria-current={isActive ? "page" : undefined}
                                        className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd93f9] ${
                                            isActive
                                                ? "text-[#f8f8f2]"
                                                : "text-white/55 hover:text-[#f8f8f2]"
                                        }`}
                                    >
                                        {item.nome}
                                        {isActive && (
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-x-4 -bottom-[1px] h-px bg-[#bd93f9]"
                                            />
                                        )}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <a
                        href="#contact"
                        className="hidden items-center gap-2 rounded-full border border-[#bd93f9]/35 bg-[#bd93f9]/10 px-4 py-2.5 text-sm font-medium text-[#f8f8f2] transition-all hover:border-[#bd93f9]/70 hover:bg-[#bd93f9]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd93f9] md:inline-flex"
                    >
                        Fale comigo
                        <ChevronRight
                            size={16}
                            className="text-[#bd93f9]"
                            aria-hidden="true"
                        />
                    </a>

                    <button
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-[#bd93f9]/40 hover:text-[#f8f8f2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd93f9] md:hidden"
                        type="button"
                        aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={menuAberto}
                        aria-controls="mobile-navigation"
                        onClick={() => setMenuAberto((aberto) => !aberto)}
                    >
                        {menuAberto ? <X size={21} /> : <Menu size={21} />}
                    </button>
                </div>
            </div>

            {menuAberto && (
                <ul
                    id="mobile-navigation"
                    className="absolute left-4 right-4 top-[calc(100%+0.5rem)] flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#17171f]/95 p-2 shadow-2xl shadow-black/40 md:hidden"
                >
                    {links.map((item) => {
                        const isActive = activeId === item.url.slice(1);

                        return (
                            <li key={item.url}>
                                <a
                                    href={item.url}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd93f9] ${
                                        isActive ? "text-[#f8f8f2]" : "text-white/65 hover:text-[#f8f8f2]"
                                    }`}
                                    onClick={() => setMenuAberto(false)}
                                >
                                    {item.nome}
                                </a>
                            </li>
                        );
                    })}
                    <li className="mt-1 border-t border-white/10 pt-2">
                        <a
                            href="#contact"
                            className="flex items-center justify-between rounded-xl bg-[#bd93f9]/10 px-4 py-3 text-sm font-medium text-[#f8f8f2] transition-colors hover:bg-[#bd93f9]/20"
                            onClick={() => setMenuAberto(false)}
                        >
                            Fale comigo
                            <ChevronRight
                                size={17}
                                className="text-[#bd93f9]"
                                aria-hidden="true"
                            />
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
}
