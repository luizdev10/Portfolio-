import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, MessageCircle, Send } from "lucide-react";
import OrbitalGalaxy from "../components/ui/galaxy.jsx";

const WHATSAPP_NUMBER = "5588988853140";
const MENSAGE_WHATS = "Olá tudo bem? gostaria de criar um site com você.";
const INSTAGRAM_USER = "luizdev2";
const EMAIL = "luizxdeveloper@gmail.com";

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
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [errors, setErrors] = useState({});
  const nameRef = useRef(null);
  const otherRef = useRef(null);
  const messageRef = useRef(null);

  const isOther = form.type === OTHER;
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    if (isOther) otherRef.current?.focus();
  }, [isOther]);

  function handleChange(e) {
    setSent(false);
    setWhatsappUrl("");
    setErrors((previous) => ({ ...previous, [e.target.name]: "" }));
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const name = form.name.trim();
    const otherText = form.otherType.trim();
    const message = form.message.trim();
    const nextErrors = {};

    if (!name) nextErrors.name = "Informe seu nome para continuar.";

    if (isOther && !otherText) {
      nextErrors.otherType = "Descreva o que você precisa para continuar.";
    }

    if (!message) {
      nextErrors.message = "Escreva uma mensagem sobre seu projeto.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = Object.keys(nextErrors)[0];
      const refs = {
        name: nameRef,
        otherType: otherRef,
        message: messageRef,
      };

      refs[firstInvalidField].current?.focus();
      return;
    }

    const interest = isOther ? otherText : form.type;
    const text =
      `Olá! Me chamo ${name}.\n` +
      `Tenho interesse em: ${interest}.\n\n` +
      `${message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    setWhatsappUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  async function handleCopyEmail() {
    let copySucceeded = false;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
        copySucceeded = true;
      }
    } catch {
      // Tenta o método alternativo se o navegador bloquear a cópia.
    }

    if (!copySucceeded) {
      const textArea = document.createElement("textarea");
      textArea.value = EMAIL;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();

      try {
        copySucceeded = document.execCommand("copy");
      } catch {
        copySucceeded = false;
      } finally {
        textArea.remove();
      }
    }

    setCopied(copySucceeded);
    setCopyError(!copySucceeded);

    if (copySucceeded) {
      setTimeout(() => setCopied(false), 2500);
    }
  }

  const channels = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      detail: "Resposta mais rápida",
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MENSAGE_WHATS)}`,
      icon: <MessageCircle size={20} aria-hidden="true" />,
      color: "#4ade80",
      isExternal: true,
    },
    {
      id: "instagram",
      name: "Instagram",
      detail: `@${INSTAGRAM_USER}`,
      href: `https://instagram.com/${INSTAGRAM_USER}`,
      icon: <InstagramIcon size={20} />,
      color: "#f472b6",
      isExternal: true,
    },
    {
      id: "email",
      name: "E-mail",
      detail: EMAIL,
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
          <div>
            <p data-reveal className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
              Contato
            </p>

            <h2
              data-reveal
              style={{ "--reveal-delay": "100ms" }}
              id="contact-title"
              className="text-4xl font-light leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]"
            >
              Vamos criar o
              <span className="block text-white/60">seu site?</span>
            </h2>

            <p data-reveal style={{ "--reveal-delay": "200ms" }} className="mt-5 max-w-md text-sm leading-relaxed text-white/50">
              Tem uma ideia, um negócio ou um projeto pessoal que precisa de um
              lugar na web? Me conta o que você imagina e eu retorno o mais
              rápido possível para conversarmos.
            </p>

            <ul
              className="mt-9 flex flex-col gap-3"
              aria-label="Canais de contato"
            >
              {channels.map((c, index) => {
                const channelContent = (
                  <>
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                      style={{ background: `${c.color}1a`, color: c.color }}
                    >
                      {c.icon}
                    </span>

                    <span className="min-w-0 flex-1 text-left">
                      <span className="flex items-center gap-2 text-sm font-semibold text-white">
                        {c.name}
                        {c.id === "email" && copied && (
                          <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[10px] font-medium text-sky-300">
                            Copiado!
                          </span>
                        )}
                      </span>
                      <span className="block truncate text-xs text-white/50">
                        {c.detail}
                      </span>
                    </span>

                    {c.id === "email" ? (
                      copied ? (
                        <Check
                          size={16}
                          className="shrink-0 text-emerald-400"
                          aria-hidden="true"
                        />
                      ) : (
                        <Copy
                          size={16}
                          className="shrink-0 text-white/30"
                          aria-hidden="true"
                        />
                      )
                    ) : (
                      <ArrowUpRight
                        size={16}
                        aria-hidden="true"
                        className="shrink-0 text-white/30"
                      />
                    )}
                  </>
                );

                return (
                  <li
                    key={c.name}
                    data-reveal="left"
                    style={{ "--reveal-delay": `${300 + index * 100}ms` }}
                  >
                    {c.id === "email" ? (
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        aria-label={
                          copied ? "E-mail copiado" : `Copiar e-mail ${EMAIL}`
                        }
                        className="group flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-left backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                      >
                        {channelContent}
                      </button>
                    ) : (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                      >
                        {channelContent}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>

            {copyError && (
              <p role="status" className="mt-2 text-xs text-red-300">
                Não foi possível copiar o e-mail. Você pode selecioná-lo e copiar
                manualmente.
              </p>
            )}
          </div>

          <div data-reveal="right" style={{ "--reveal-delay": "200ms" }} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
            <h3 className="text-lg font-medium text-white">
              Conte sobre o seu projeto
            </h3>
            <p className="mt-1 text-sm text-white/45">
              Ao enviar, o WhatsApp abre com a mensagem já pronta.
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-6 flex flex-col gap-4"
            >
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Seu nome
                </label>
                <input
                  id="contact-name"
                  ref={nameRef}
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Como posso te chamar?"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? "contact-name-error" : undefined
                  }
                  className={`${inputClass} ${
                    errors.name
                      ? "border-red-400/60 focus:border-red-400/80"
                      : ""
                  }`}
                />
                {errors.name && (
                  <p
                    id="contact-name-error"
                    role="alert"
                    className="mt-1.5 text-xs text-red-300"
                  >
                    {errors.name}
                  </p>
                )}
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
                    aria-invalid={Boolean(errors.otherType)}
                    aria-describedby={
                      errors.otherType ? "contact-other-error" : undefined
                    }
                    className={`${inputClass} ${
                      errors.otherType
                        ? "border-red-400/60 focus:border-red-400/80"
                        : ""
                    }`}
                  />
                  {errors.otherType && (
                    <p
                      id="contact-other-error"
                      role="alert"
                      className="mt-1.5 text-xs text-red-300"
                    >
                      {errors.otherType}
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
                  ref={messageRef}
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Descreva sua ideia, para que serve o site, prazo, referências..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                  className={`${inputClass} resize-none ${
                    errors.message
                      ? "border-red-400/60 focus:border-red-400/80"
                      : ""
                  }`}
                />
                {errors.message && (
                  <p
                    id="contact-message-error"
                    role="alert"
                    className="mt-1.5 text-xs text-red-300"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-white/85"
              >
                Enviar pelo WhatsApp
                <Send size={15} aria-hidden="true" />
              </button>

              {sent && (
                <p
                  role="status"
                  className="text-sm leading-relaxed text-emerald-300"
                >
                  Mensagem pronta! Se o WhatsApp não abrir automaticamente,{" "}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-emerald-200"
                  >
                    clique aqui para continuar
                  </a>
                  .
                </p>
              )}
            </form>
          </div>
        </div>

        <p data-reveal className="mt-16 text-center text-xs text-white/40">
          © {year} Luiz Henrique · Feito com React e Tailwind
        </p>
      </div>
    </section>
  );
}