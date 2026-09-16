# ACR — motion specification

> Первый экран — медленное погружение в духе сохранённого референса Studio Dumbar: из тёмно-винного поля по горизонтали расходится яркий розовый свет. Сначала появляется тезис «Реальность не дана», затем ответ «Она создаётся тобой». Обе фразы оставляют мягкий оптический след и растворяются. Только после этого в созданном цветовом поле собирается название ART OF CREATIVE REALITY и приглашение начать игру. Дальше движение становится спокойным и функциональным. Нативный скролл не перехватывается.
>
> Every motion number, easing curve, transform, phase, and failure mode is fixed below so another agent can reproduce the experience from this specification alone.

## 1 · Summary

- Роли motion: ориентация в hero, сторителлинг в методе, непрерывность при переключении входов, обратная связь в кнопках.
- Контейнер hero: `min-height: 100svh`, overflow hidden, без изображения и без параллакса.
- Главный эффект: розовое поле раскрывается из узкого центрального шва в обе стороны; две последовательные смысловые фразы создают мини-сюжет «данность → авторство». Анимируются только `transform` и `opacity`.
- Tech: CSS keyframes + React state для методологии и экосистемы. Без GSAP, canvas, WebGL и перехвата wheel.

## 2 · File map

- `app/page.tsx` — семантическая последовательность сайта и дословные смысловые якоря.
- `app/experience.tsx` — меню, MethodStage и EcosystemStage, клавиатурное управление.
- `app/reveal.tsx` — одноразовое появление редакционных блоков.
- `app/globals.css` — палитра, layout, motion tokens, states, responsive, reduced motion.

## 3 · Fonts & type

- Display: Cormorant Garamond 400/500; interface: Manrope 400/500/600.
- Hero title: `clamp(4rem, 9.4vw, 9.5rem)`, line-height `.82`, без соприкосновения знаков и с фиксированным двухстрочным ритмом.
- ACR mark: Manrope 600, uppercase, tracked.
- Method slides: display `clamp(4.8rem, 9vw, 10rem)`.

## 4 · Data (verbatim)

- `РЕАЛЬНОСТЬ НЕ ДАНА`
- `ОНА СОЗДАЁТСЯ ТОБОЙ`
- `ART OF CREATIVE REALITY`
- `Метод создания реальности`
- `Начать свою игру`
- `Реальность не дана. Она создаётся.`
- Method: `Увидеть / SEE`, `Создать / CREATE`, `Играть / PLAY`.
- Ecosystem entries: `Программы`, `Выезды`, `Книги`, `Тренажёры`.
- Program entries: `Discovery`, `Главная игра`, `Organizations`, `Creativists`.

## 5 · Layout & motion constants

```css
--motion-instant: 100ms;      /* immediate press feedback */
--motion-fast: 180ms;         /* link and arrow response */
--motion-base: 360ms;         /* active tab/content continuity */
--motion-panel: 680ms;        /* full navigation panel */
--motion-reveal: 760ms;       /* editorial section arrival */
--motion-bloom: 4600ms;       /* цвет раскрывается на протяжении всего смыслового вступления */
--motion-line-one: 1800ms;    /* первая фраза успевает прочитаться и раствориться */
--motion-line-two: 1800ms;    /* вторая фраза появляется только после первой */
--motion-copy-delay: 3900ms;  /* lockup появляется после обеих фраз */
--motion-step-stagger: 90ms;  /* hierarchy between hero copy lines */
--motion-ease-standard: cubic-bezier(.2,0,0,1);
--motion-ease-editorial: cubic-bezier(.22,1,.36,1);
--motion-ease-exit: cubic-bezier(.4,0,1,1);
--motion-offset-sm: 10px;
--motion-offset-md: 28px;
--motion-offset-lg: 54px;
--bloom-width: 180vmax;       /* запас для покрытия широкого экрана */
--bloom-start-scale-x: .012;  /* стартует как вертикальный световой шов */
--trail-step-x: 5.5vw;        /* дистанция между оптическими следами текста */
```

## 6 · Motion by state

- Hero initial: винное поле; розовый слой scaleX `.012`; шапка и контрастная кнопка меню уже доступны.
- Hero phase 1, `300–2100ms`: `РЕАЛЬНОСТЬ НЕ ДАНА` проявляется, четыре дубля расходятся по X на `±5.5/±11vw`, затем фраза растворяется.
- Hero phase 2, `1900–3700ms`: `ОНА СОЗДАЁТСЯ ТОБОЙ` проходит тот же оптический путь, но остаётся читаемой дольше в центральной точке.
- Hero settled: розовое поле с тёмным вертикальным ядром; lockup ART OF CREATIVE REALITY и CTA появляются после `3900ms` за `1000ms`. Анимация не зацикливается.
- Method idle: active step opacity `1`; distant step opacity `.28`; в визуальном поле показан крупный код SEE / CREATE / PLAY и компактный счётчик этапа. Декоративной огромной цифры в углу нет.
- Method incoming: opacity `0 → 1`, translateY `10px → 0` over `360ms`.
- Ecosystem active: content opacity `1`, transform none; leaving/distant opacity `0`, translateY `10px`; only active content receives pointer events.
- Hover: arrows translate `4px`; tabs gain opacity; stage shape scales to `1.015` maximum.
- Press: interactive control scale `.985` for `100ms`.
- Focus: 2px high-contrast outline, no movement.
- Loading/success/error: not applicable; all content is local and server-rendered.

## 7 · Interaction model

- Hero CTA uses native anchor navigation to `#about-acr`.
- Method and ecosystem tabs are semantic buttons with `aria-pressed`; click/tap activates.
- ArrowLeft/ArrowRight moves one item and clamps at both ends.
- Previous/next arrow buttons wrap for ecosystem browsing and expose full accessible labels.
- Native vertical scroll remains authoritative; no snap and no scroll-jacking.

## 8 · Easing & timing table

| Event | Curve | Duration |
| --- | --- | --- |
| Press | standard | 100ms |
| Link/arrow hover | standard | 180ms |
| Method/product switch | standard | 360ms |
| Full menu | editorial | 680ms |
| Editorial reveal | editorial | 760ms |
| Hero colour bloom | editorial | 4600ms |
| Hero statement 1 | exit | 1800ms, delay 300ms |
| Hero statement 2 | exit | 1800ms, delay 1900ms |
| Hero lockup | editorial | 1000ms, delay 3900ms |

## 9 · Performance & architecture invariants

- Animate only `transform` and `opacity`; never animate width, height, top, left, blur, gradient stops or clip-path.
- Цветовой слой заранее имеет ширину `180vmax`; layout box никогда не меняется.
- All final content exists in server HTML; JS only changes active presentation.
- Z-index: base `0`, bloom `1`, soft field `2`, copy `3`, header `20`, menu overlay `40`.
- DO NOT loop the hero, tie it to cursor movement, or delay usability until animation ends.

## 10 · Platform gotchas

- Use `svh` so iOS browser chrome cannot crop the CTA.
- `180vmax` must be positioned via transform origin; do not recalculate viewport geometry in JS.
- Hidden stage panels remain in the same reserved layout box to prevent jumping.
- Body overflow is not locked; the menu owns its own scroll on mobile.

## 11 · Color palette

| Token | Use |
| --- | --- |
| `#17110F` | hero first frame / source point |
| `#F12BC4` | principal bloom / authored possibility |
| `#8E172B` | depth field / break with default future |
| `#F1EEE5` | paper / readable ground |
| `#151515` | ink / institutional contrast |
| `#B8C6FF` | secondary ecosystem field |
| `#DCEB58` | precise action accent |

No gradient text, neon glow, glassmorphism, gold, animated shadow, or stock imagery in the first screen.

## 12 · Responsive diff

| Element | Desktop | Mobile |
| --- | --- | --- |
| Hero title | two-line editorial lockup | compact three-line lockup |
| Bloom origin | 52% / 48% | 54% / 42% |
| Header | mark + section links + menu | mark + menu |
| Method stage | shape + copy, two columns | shape above copy |
| Ecosystem stage | copy + large visual field | copy and controls stacked |
| Product rail | four equal controls | horizontally scrollable controls |

## 13 · Reduced motion

- Bloom renders at final scale from the first frame.
- Copy starts visible with no translation.
- Stage switches may crossfade for `100ms` only; large transforms and reveal offsets are disabled.
- Every CTA, tab and text remains fully usable.

## 14 · Reproduction checklist

1. Before animation the viewport is dark, but all copy remains available in HTML.
2. Розовый свет расходится из центрального вертикального шва в обе стороны; сначала читается «Реальность не дана», затем «Она создаётся тобой».
3. После обеих фраз `ART OF CREATIVE REALITY` становится итоговым смыслом; Tina is not the hero subject.
4. The CTA scrolls directly to a plain-language definition of ACR.
5. Method stage visibly moves through SEE → CREATE → PLAY with click and keyboard.
6. Ecosystem stage presents one active entrance at a time and supports arrows/tabs.
7. No component changes page height when its active state changes.
8. Reduced motion shows the stable final composition immediately.

## 15 · Why this is good

The expanding field makes the promise physically legible as a complete sentence: reality does not arrive finished; it is authored by the viewer. The name of the method appears as the resolution, not as a simultaneous advertising layer. The rest of the motion is deliberately quieter, so the page moves from emotion to comprehension and then to choice without becoming an effects reel.
