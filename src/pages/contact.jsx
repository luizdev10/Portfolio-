import { Mail, MapPin, Linkedin, Send } from "lucide-react";

const contactLinks = [
  {
    id: "contact-email",
    label: "E-mail",
    value: "luiz@email.com",
    href: "mailto:luiz@email.com",
    icon: Mail,
    accent: "#5fd8ff",
    desc: "Respondo em ate 24h",
  },
  {
    id: "contact-linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/luizhenrique",
    href: "https://linkedin.com/in/luizhenrique",
    icon: Linkedin,
    accent: "#a78bfa",
    desc: "Conecte-se comigo",
  },
  {
    id: "contact-local",
    label: "Localizacao",
    value: "Brasil",
    href: null,
    icon: MapPin,
    accent: "#84986b",
    desc: "Disponivel remotamente",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      style={{ background: "#080808", position: "relative", overflow: "hidden" }}
      className="px-6 py-28 sm:px-10 lg:px-20 lg:py-36"
    >
      {/* Subtle radial glow in background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(ellipse at center, rgba(132,152,107,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">

          {/* Left: heading */}
          <div className="lg:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/30">
              Contato
            </p>
            <h2
              id="contact-title"
              className="text-4xl font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.25rem]"
            >
              Vamos
              <span className="block" style={{ color: "#84986b" }}>
                conversar.
              </span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/45">
              Estou disponivel para colaborar em projetos, tirar duvidas ou
              apenas trocar uma ideia sobre desenvolvimento web.
            </p>

            {/* Status badge */}
            <div
              className="mt-8 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium"
              style={{ background: "rgba(132,152,107,0.12)", color: "#84986b" }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#84986b",
                  display: "inline-block",
                  boxShadow: "0 0 0 3px rgba(132,152,107,0.25)",
                }}
                aria-hidden="true"
              />
              Disponivel para oportunidades
            </div>
          </div>

          {/* Right: contact cards */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              const inner = (
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: item.accent + "18" }}
                  >
                    <Icon size={18} style={{ color: item.accent }} aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-widest text-white/30">
                      {item.label}
                    </p>
                    <p className="mt-0.5 truncate text-sm font-medium text-white">
                      {item.value}
                    </p>
                    <p className="text-xs text-white/35">{item.desc}</p>
                  </div>
                  {item.href && (
                    <Send
                      size={14}
                      style={{ color: item.accent, opacity: 0.6, flexShrink: 0 }}
                      aria-hidden="true"
                    />
                  )}
                </div>
              );

              const cardClass =
                "rounded-2xl border p-5 transition-all duration-200";
              const cardStyle = {
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              };

              return item.href ? (
                <a
                  key={item.id}
                  id={item.id}
                  href={item.href}
                  className={cardClass + " hover:border-white/16 hover:bg-white/6"}
                  style={cardStyle}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {inner}
                </a>
              ) : (
                <div key={item.id} id={item.id} className={cardClass} style={cardStyle}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
