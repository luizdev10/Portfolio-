import * as React from "react";
import { useEffect, useRef } from "react";

function mulberry32(seed) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let x = t;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

export function OrbitalGalaxy({
  driftSpeed = 1.5,
  starCount = 1500,
  paused = false,
  className = "",
  children,
  // props antigas são aceitas e ignoradas, para não quebrar quem já usa o componente
  yearSeconds,
  apex,
  viewRadius,
  tilt,
  spin,
  roll,
  lead,
  focus,
  scrim,
  scrimStrength,
  interactive,
  planets,
  trailYears,
  compress,
  maxTurns,
  planeSpread,
  eccentricity,
  alignToCourse,
  glow,
  showOrbits,
  showSunTrack,
  sunColor,
  ...rest
}) {
  const hostRef = useRef(null);
  const canvasRef = useRef(null);
  const props = useRef({});
  props.current = { driftSpeed, starCount, paused };

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0, height = 0, dpr = 1;
    let running = true, visible = true, raf = 0, lastFrame = 0;
    let time = 0;
    let offset = 0;

    // posições normalizadas (0 a 1) para cobrir a tela inteira
    let starN = 0;
    let sx = new Float32Array(0);
    let sy = new Float32Array(0);
    let sz = new Float32Array(0);
    let sPhase = new Float32Array(0);
    let sTint = new Uint8Array(0);

    function buildStars() {
      const rand = mulberry32(0xc0ffee);
      const area = (width * height) / (1440 * 900);
      starN = Math.max(
        120,
        Math.min(3000, Math.round(props.current.starCount * area))
      );
      sx = new Float32Array(starN);
      sy = new Float32Array(starN);
      sz = new Float32Array(starN);
      sPhase = new Float32Array(starN);
      sTint = new Uint8Array(starN);
      for (let k = 0; k < starN; k++) {
        sx[k] = rand();
        sy[k] = rand();
        sz[k] = Math.pow(rand(), 2.2); // maioria pequena e fraca, poucas grandes
        sPhase[k] = rand() * Math.PI * 2;
        const t = rand();
        sTint[k] = t > 0.9 ? 1 : t < 0.08 ? 2 : 0;
      }
    }

    function resize() {
      const rect = host.getBoundingClientRect();
      const w = Math.max(1, rect.width);
      const h = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (w === width && h === height) return;
      width = w;
      height = h;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
    }

    function wrap(v) {
      return v - Math.floor(v);
    }

    function render() {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      for (let s = 0; s < starN; s++) {
        const z = sz[s];
        const layer = 0.25 + z * 1.2; // estrelas maiores se movem mais rápido
        // movimento diagonal suave (esquerda e um pouco para baixo)
        const x = wrap(sx[s] - offset * layer) * width;
        const y = wrap(sy[s] + offset * layer * 0.45) * height;

        const twinkle = 0.78 + 0.22 * Math.sin(time * 2.2 + sPhase[s]);
        const alpha = Math.min(1, (0.22 + z * 0.8) * twinkle);
        const size = 0.6 + z * 1.6;

        const col =
          sTint[s] === 1 ? "175,205,255" : sTint[s] === 2 ? "255,214,170" : "255,255,255";
        ctx.fillStyle = `rgba(${col},${alpha.toFixed(3)})`;

        if (size < 1.2) {
          ctx.fillRect(x, y, size, size);
        } else {
          ctx.beginPath();
          ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function tick(now) {
      if (!running) return;
      raf = requestAnimationFrame(tick);
      if (!visible) { lastFrame = now; return; }
      const dt = lastFrame ? Math.min(0.05, (now - lastFrame) / 1000) : 0;
      lastFrame = now;
      if (!props.current.paused) {
        time += dt;
        offset += dt * 0.006 * props.current.driftSpeed;
      }
      render();
    }

    resize();
    render();
    if (!reduced) raf = requestAnimationFrame(tick);

    const ro = new ResizeObserver(() => {
      resize();
      render();
    });
    ro.observe(host);

    const io = new IntersectionObserver(
      (e) => { visible = e[0]?.isIntersecting ?? true; },
      { threshold: 0 }
    );
    io.observe(host);

    const onVis = () => { visible = !document.hidden; lastFrame = 0; };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className={`relative isolate h-full w-full overflow-hidden bg-black ${className}`}
      {...rest}
    >
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />
      {children ? <div className="relative z-10 h-full w-full">{children}</div> : null}
    </div>
  );
}

export default OrbitalGalaxy;