import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, MessageCircle, Send } from "lucide-react";
import OrbitalGalaxy from "../components/ui/galaxy.jsx";


const WHATSAPP_NUMBER = "5588988853140"; 
const INSTAGRAM_USER = "";
const EMAIL = "";

const OTHER = "Outro";
const PROJECT_TYPES = [
  "Landing page",
  "Portfólio",
  "Site para negócio local",
  OTHER,
];

function InstagramIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none backdrop-blur-sm transition-colors focus:border-white/35";

const labelClass =
  "mb-1.5 block text-xs uppercase tracking-[0.14em] text-white/45";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    type: PROJECT_TYPES[0],
    otherType: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [otherError, setOtherError] = useState("");
  const otherRef = useRef(null);

  const isOther = form.type === OTHER;


  useEffect(() => {
    if (isOther) otherRef.current?.focus();
  }, [isOther]);

  function handleChange(e) {
    setSent(false);
    if (e.target.name === "otherType") setOtherError("");
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const otherText = form.otherType.trim();

    if (isOther && !otherText) {
      setOtherError("Descreva o que você precisa para continuar.");
      otherRef.current?.focus();
      return;
    }

    const interest = isOther ? otherText : form.type;

    const text =
      `Olá! Me chamo ${form.name.trim()}.\n` +
      `Tenho interesse em: ${interest}.\n\n` +
      `${form.message.trim()}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  }

  const channels = [
    {
      name: "WhatsApp",
      detail: "Resposta mais rápida",
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      icon: <MessageCircle size={20} aria-hidden="true" />,
      color: "#4ade80",
    },
    {
      name: "Instagram",
      detail: `@${INSTAGRAM_USER}`,
      href: `https://instagram.com/${INSTAGRAM_USER}`,
      icon: <InstagramIcon size={20} />,
      color: "#f472b6",
    },
    {
      name: "E-mail",
      detail: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: <Mail size={20} aria-hidden="true" />,
      color: "#7dd3fc",
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate min-h-screen w-full overflow-hidden bg-black px-6 py-24 text-white sm:px-10 lg:px-20"
    >
    
      <div className="absolute inset-0">
        <OrbitalGalaxy />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-12rem)] max-w-6xl flex-col justify-center">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* Coluna esquerda: texto + canais */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
              Contato
            </p>

            <h2
              id="contact-title"
              className="text-4xl font-light leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]"
            >
              Vamos criar o
              <span className="block text-white/60">seu site?</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/50">
              Tem uma ideia, um negócio ou um projeto pessoal que precisa de um
              lugar na web? Me conta o que você imagina e eu retorno o mais
              rápido possível para conversarmos.
            </p>

            <ul className="mt-9 flex flex-col gap-3" aria-label="Canais de contato">
              {channels.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                      style={{ background: `${c.color}1a`, color: c.color }}
                    >
                      {c.icon}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-white">
                        {c.name}
                      </span>
                      <span className="block truncate text-xs text-white/50">
                        {c.detail}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="shrink-0 text-white/30 transition-colors group-hover:text-white/80"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

       
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
            <h3 className="text-lg font-medium text-white">
              Conte sobre o seu projeto
            </h3>
            <p className="mt-1 text-sm text-white/45">
              Ao enviar, o WhatsApp abre com a mensagem já pronta.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-4">
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Seu nome
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Como posso te chamar?"
                  className={inputClass}
                />
              </div>

              <fieldset>
  <legend className={labelClass}>O que você precisa?</legend>

  <div className="flex flex-wrap gap-2">
    {PROJECT_TYPES.map((t) => {
      const active = form.type === t;

      return (
        <label
          key={t}
          className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-all duration-200 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-white/50 ${
            active
              ? "border-white bg-white font-medium text-black"
              : "border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:text-white"
          }`}
        >
          <input
            type="radio"
            name="type"
            value={t}
            checked={active}
            onChange={handleChange}
            className="sr-only"
          />
          {t}
        </label>
      );
    })}
  </div>
</fieldset>

              
              {isOther && (
                <div>
                  <label htmlFor="contact-other" className={labelClass}>
                    Qual tipo de projeto?
                  </label>
                  <input
                    id="contact-other"
                    ref={otherRef}
                    name="otherType"
                    type="text"
                    required
                    value={form.otherType}
                    onChange={handleChange}
                    placeholder="Ex.: Pagina para capitação de clientes"
                    aria-invalid={otherError ? "true" : "false"}
                    aria-describedby={otherError ? "contact-other-error" : undefined}
                    className={`${inputClass} ${
                      otherError ? "border-red-400/60 focus:border-red-400/80" : ""
                    }`}
                  />
                  {otherError && (
                    <p
                      id="contact-other-error"
                      role="alert"
                      className="mt-1.5 text-xs text-red-300"
                    >
                      {otherError}
                    </p>
                  )}
                </div>
              )}

              <div>
                <label htmlFor="contact-message" className={labelClass}>
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Descreva sua ideia, para que serve o site, prazo, referências..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-white/85"
              >
                Enviar pelo WhatsApp
                <Send size={15} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        <p className="mt-16 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Luiz Henrique · Feito com React e Tailwind
        </p>
      </div>
    </section>
  );
}