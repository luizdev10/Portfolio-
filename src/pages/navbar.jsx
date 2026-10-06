import { useState } from "react"
import { CodeXml, ChevronRight, X, Menu } from "lucide-react"

export default function navbar() {
    const [menu, setmenu] = useState(false)
    const Links = [
        {
            nome: "Início",
            url: "#home"
        },
        {
            nome: "Sobre",
            url: "#about"
        },
        {
            nome: "Projetos",
            url: "#projects"
        },
        {
            nome: "Habilidades",
            url: "#habilidades"
        }
    ]

    return (
        <nav className="top-0 left-0 fixed w-full z-500 bg-[#F4F1EA]">
            <div className="flex items-center justify-between p-3 border-b border-gray-300 ">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gray-300 items-center flex justify-center rounded-md">
                        <CodeXml size={30} color="#0F172A " />
                    </div>
                    <h1 className="font-['Inter'] text-lg font-bold">
                        luix.dev
                    </h1>
                </div>
                <div className="flex items-center gap-3">
                    <ul className="md:flex hidden justify-around items-center gap-5">
                        {Links.map((items, index) => (
                            <li key={index}>
                                <a href={items.url} className="cursor-pointer font-['Inter'] font-medium">
                                    {items.nome}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="#contact" className="md:flex hidden items-center border border-gray-300 rounded-lg p-3 gap-1 hover:border-gray-500 transition-colors duration-300 cursor-pointer font-['Inter'] font-medium">
                        Fale Comigo <ChevronRight size={20} />
                    </a>

                    <button
                        className="md:hidden"
                        type="button"
                        aria-label={menu ? "Fechar menu" : "Abrir menu"}
                        onClick={() => {
                            setmenu(!menu)
                        }}
                    >
                        {menu ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </div>
            {menu && (
                <ul className=" fixed border border-gray-300 rounded-lg p-3 gap-3 flex flex-col items-start justify-end w-30 left-65">
                    {
                        Links.map((items, index) => (
                            <li key={index}>
                                {items.nome}
                            </li>
                        ))
                    }
                </ul>
            )
            }
        </nav>
    )
}