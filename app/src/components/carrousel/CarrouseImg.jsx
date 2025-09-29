import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./CarrouselImg.css";

/** Se as imagens estiverem em /public/imagens/... */
const imagens = [
  { src: "../../../../dist/assets/imagens/faixada_cuiaba.jpg", title: "Cuiabá" },
  { src: "../../../../dist/assets/imagens/faixada_caceres.png",     title: "Cáceres" },
];

export default function CarrouselImg({
  items = imagens,        
  initialIndex = 0,
  autoplayMs = 0,
  loop = true,
  width,
  height,
  pauseOnHover = true,
  onIndexChange,
}) {
  const count = items.length;
  const [index, setIndex] = useState(() =>
    clamp(initialIndex, 0, Math.max(0, count - 1))
  );
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (i) => {
      if (count === 0) return;
      const next = loop ? mod(i, count) : clamp(i, 0, count - 1);
      setIndex(next);
      onIndexChange?.(next);
    },
    [count, loop, onIndexChange]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // autoplay
  useEffect(() => {
    if (!autoplayMs || autoplayMs <= 0 || paused) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) return;

    const id = setInterval(next, autoplayMs);
    return () => clearInterval(id);
  }, [autoplayMs, paused, next]);

  // swipe/drag com Pointer Events (mouse + touch unificados)
  const isPointerDown = useRef(false);
  const startX = useRef(0);
  const deltaX = useRef(0);
  const SwipeThreshold = 40;

  const onPointerDown = (e) => {
    isPointerDown.current = true;
    startX.current = e.clientX ?? 0;
    deltaX.current = 0;
  };
  const onPointerMove = (e) => {
    if (!isPointerDown.current) return;
    deltaX.current = (e.clientX ?? 0) - startX.current;
  };
  const onPointerUp = () => {
    if (!isPointerDown.current) return;
    isPointerDown.current = false;
    const dx = deltaX.current;
    deltaX.current = 0;
    if (Math.abs(dx) > SwipeThreshold) (dx < 0 ? next : prev)();
  };

  // cleanup defensivo
  useEffect(() => {
    const cancel = () => {
      isPointerDown.current = false;
      deltaX.current = 0;
    };
    window.addEventListener("pointerup", cancel);
    window.addEventListener("pointercancel", cancel);
    return () => {
      window.removeEventListener("pointerup", cancel);
      window.removeEventListener("pointercancel", cancel);
    };
  }, []);

  const neighbors = useMemo(
    () => (count ? [index, index + 1, index - 1].map((i) => mod(i, count)) : []),
    [index, count]
  );
  const active = items[index];

  return (
    <div
      className="ImageContainer"
      style={{ width, height }}
      onMouseEnter={pauseOnHover ? () => setPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setPaused(false) : undefined}
    >
      <div
        className="CarouselViewport"
        role="region"
        aria-roledescription="carousel"
        aria-label="Carrossel de imagens"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        {items.map((item, i) => {
          const isActive = i === index;
          const shouldLoad = neighbors.includes(i);
          return (
            <img
              key={item.id ?? i}
              src={item.src}
              alt={item.alt ?? item.title ?? `Imagem ${i + 1}`}
              loading={shouldLoad ? "eager" : "lazy"}
              decoding="async"
              fetchpriority={isActive ? "high" : "auto"}
              className={`CarouselSlide ${isActive ? "is-active" : ""}`}
              draggable={false}
            />
          );
        })}

        <div className="CarouselCaption" aria-live="polite">
          {active?.title ?? ""}
        </div>

        {count > 1 && (
          <>
            <button type="button" className="CarouselBtn prev" aria-label="Anterior" onClick={prev}>
              ◀
            </button>
            <button type="button" className="CarouselBtn next" aria-label="Próximo" onClick={next}>
              ▶
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="CarouselDots">
          {items.map((_, i) => (
            <button
              key={i}
              className={`Dot ${i === index ? "active" : ""}`}
              aria-label={`Ir para slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }
function mod(i, m) { return ((i % m) + m) % m; }
