"use client";
import { CSSProperties, ReactNode, useEffect, useRef } from "react";
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const node = ref.current; if (!node) return; const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { node.classList.add("is-visible"); observer.unobserve(node); } }, { threshold: .12, rootMargin: "0px 0px -8%" }); observer.observe(node); return () => observer.disconnect(); }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
export function WordReveal({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => { const node = ref.current; if (!node) return; const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { node.classList.add("is-visible"); observer.unobserve(node); } }, { threshold: .2 }); observer.observe(node); return () => observer.disconnect(); }, []);
  return <h2 ref={ref} className={`word-reveal ${className}`} aria-label={text}>{text.split(" ").map((word, index) => <span key={`${word}-${index}`} style={{ "--i": index } as CSSProperties} aria-hidden="true">{word}&nbsp;</span>)}</h2>;
}

export function LineReveal({ lines, className = "" }: { lines: string[]; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => { const node = ref.current; if (!node) return; const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { node.classList.add("is-visible"); observer.unobserve(node); } }, { threshold: .25 }); observer.observe(node); return () => observer.disconnect(); }, []);
  const label = lines.join(" ");
  return <h2 ref={ref} className={`line-reveal ${className}`} aria-label={label}>{lines.map((line, index) => <span key={line} style={{ "--i": index } as CSSProperties} aria-hidden="true">{line}</span>)}</h2>;
}
