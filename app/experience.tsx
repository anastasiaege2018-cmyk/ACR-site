"use client";

import { useEffect, useRef, useState } from "react";

const menuItems = [
  { href: "#about-acr", number: "01", title: "Что такое ACR", tone: "paper" },
  { href: "#method", number: "02", title: "Метод", tone: "ink" },
  { href: "#ecosystem", number: "04", title: "Экосистема", tone: "pink" },
  { href: "#companies", number: "06", title: "Для компаний", tone: "blue" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    if (open) closeRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return <>
    <header className="site-nav">
      <a className="brand brand-wordmark" href="#top" aria-label="Art of Creative Reality — к началу">Art of Creative Reality</a>
      <button className="menu-trigger" type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-label="Открыть меню"><span>Меню</span><i aria-hidden="true" /></button>
    </header>
    <div className={`menu-overlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <div className="menu-panel" role="dialog" aria-modal="true" aria-label="Навигация по сайту">
        <div className="menu-side"><a className="brand brand-wordmark" href="#top" onClick={() => setOpen(false)}>Art of Creative Reality</a><button ref={closeRef} className="menu-close" type="button" onClick={() => setOpen(false)}>Закрыть <span>×</span></button><p>Реальность не дана.<br />Она создаётся тобой.</p></div>
        <nav className="menu-grid" aria-label="Разделы">{menuItems.map((item, index) => <a key={item.href} href={item.href} className={`menu-card ${item.tone}`} style={{"--i": index} as React.CSSProperties} onClick={() => setOpen(false)}><small>{item.number}</small><strong>{item.title}</strong><span>Перейти ↗</span></a>)}</nav>
      </div>
    </div>
  </>;
}

const method = [
  { code: "SEE", ru: "Увидеть", text: "Отделить наблюдаемые факты от привычной истории. Увидеть правила, ходы, результаты и цену игры, которая уже идёт.", question: "Что происходит — до того, как вы это объяснили?" },
  { code: "CREATE", ru: "Создать", text: "Сделать разрыв с будущим по умолчанию. Сформулировать возможность, которая не вытекает из прошлого.", question: "Какой реальности ещё нет — и почему она стоит создания?" },
  { code: "PLAY", ru: "Играть", text: "Начать совершать ходы из новой игры. Собирать практику и наблюдаемые доказательства вместо одних инсайтов.", question: "Какой следующий ход докажет, что игра уже началась?" },
];

export function MethodStage() {
  const [active, setActive] = useState(0);
  const change = (delta: number) => setActive((value) => Math.max(0, Math.min(method.length - 1, value + delta)));
  const onKeys = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowRight") { event.preventDefault(); change(1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); change(-1); }
  };

  return <section className="method-stage-section" id="method" onKeyDown={onKeys}>
    <div className="method-title"><div className="section-index light"><span>02</span><p>Как работает метод</p></div><h2>От будущего<br />по умолчанию —<br />к созданной реальности.</h2><p>Одна дуга, которая повторяется на каждом масштабе: в жизни, идее, команде и организации.</p></div>
    <div className="method-board">
      <div className={`method-visual step-${active}`} aria-hidden="true">
        <div className="method-visual-meta"><span>Этап {active + 1} из {method.length}</span><span>Видеть · Создавать · Играть</span></div>
        <div className="method-orbit"><i /><b /></div>
        <strong className="method-visual-word" key={method[active].code}>{method[active].code}</strong>
      </div>
      <div className="method-copy">{method.map((item, index) => <article key={item.code} className={active === index ? "is-active" : ""} aria-hidden={active !== index}><small>{item.code}</small><h3>{item.ru}</h3><p>{item.text}</p><blockquote>{item.question}</blockquote></article>)}</div>
    </div>
    <div className="stage-controls" role="group" aria-label="Этапы метода">{method.map((item, index) => <button key={item.code} type="button" aria-pressed={active === index} onClick={() => setActive(index)}><span>{item.code}</span><strong>{item.ru}</strong></button>)}<div className="arrow-pair"><button type="button" onClick={() => change(-1)} disabled={active === 0} aria-label="Предыдущий этап">←</button><button type="button" onClick={() => change(1)} disabled={active === method.length - 1} aria-label="Следующий этап">→</button></div></div>
  </section>;
}

const ecosystem = [
  { key: "programs", number: "01", title: "Программы", status: "Точки входа сейчас", text: "Форматы разной глубины — от первого знакомства с текущей игрой до флагманской работы и трансформации организаций.", names: ["Discovery", "Главная игра", "Organizations", "Creativists"] },
  { key: "expeditions", number: "02", title: "Выезды", status: "Развиваемое направление", text: "Смена контекста как практика видения: экспедиции, Лаборатория будущего и совместные события с партнёрами.", names: ["Expeditions", "Лаборатория будущего", "События"] },
  { key: "books", number: "03", title: "Книги", status: "В разработке", text: "Планируемая издательская линия: фундамент метода, «Главная игра» и ежедневные практики создания реальности.", names: ["Art of Creative Reality", "Главная игра", "Практики на каждый день"] },
  { key: "trainers", number: "04", title: "Тренажёры", status: "В разработке", text: "Цифровые практики и «карманные коучи», которые помогают переносить метод в ежедневные решения человека и компании.", names: ["Лидерство", "Креативность", "Продажи", "Для компаний"] },
];

export function EcosystemStage() {
  const [active, setActive] = useState(0);
  const move = (delta: number) => setActive((value) => (value + delta + ecosystem.length) % ecosystem.length);
  const item = ecosystem[active];
  const onKeys = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
  };

  return <section className={`ecosystem-stage eco-${item.key}`} id="ecosystem" onKeyDown={onKeys}>
    <div className="eco-heading"><div className="section-index light"><span>04</span><p>Экосистема ACR</p></div><h2>Один метод.<br />Разные способы<br />войти в систему.</h2></div>
    <div className="eco-stage">
      <div className="eco-shape" aria-hidden="true"><span>{item.number}</span><i /><b /></div>
      <div className="eco-copy" key={item.key}><small>{item.status}</small><h3>{item.title}</h3><p>{item.text}</p><ul>{item.names.map((name) => <li key={name}>{name}</li>)}</ul><a href={item.key === "programs" ? "#main-game" : "#contact"}>{item.key === "programs" ? "Смотреть флагман" : "Оставить интерес"} <span>↗</span></a></div>
    </div>
    <div className="eco-controls" role="group" aria-label="Направления экосистемы">{ecosystem.map((entry, index) => <button key={entry.key} type="button" aria-pressed={active === index} onClick={() => setActive(index)}><span>{entry.number}</span><strong>{entry.title}</strong></button>)}<div className="arrow-pair"><button type="button" onClick={() => move(-1)} aria-label="Предыдущее направление">←</button><button type="button" onClick={() => move(1)} aria-label="Следующее направление">→</button></div></div>
  </section>;
}
