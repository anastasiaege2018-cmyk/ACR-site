import { EcosystemStage, MethodStage, SiteHeader } from "./experience";
import { LineReveal, Reveal } from "./reveal";

export default function Home() {
  return <main>
    <SiteHeader />

    <section className="acr-hero hero-immersion" id="top">
      <div className="immersion-field" aria-hidden="true" />
      <div className="immersion-core" aria-hidden="true" />
      <div className="immersion-signal signal-one" aria-hidden="true">
        <span>РЕАЛЬНОСТЬ НЕ ДАНА</span><span>РЕАЛЬНОСТЬ НЕ ДАНА</span><span>РЕАЛЬНОСТЬ НЕ ДАНА</span><span>РЕАЛЬНОСТЬ НЕ ДАНА</span><strong>РЕАЛЬНОСТЬ НЕ ДАНА</strong>
      </div>
      <div className="immersion-signal signal-two" aria-hidden="true">
        <span>ОНА СОЗДАЁТСЯ ТОБОЙ</span><span>ОНА СОЗДАЁТСЯ ТОБОЙ</span><span>ОНА СОЗДАЁТСЯ ТОБОЙ</span><span>ОНА СОЗДАЁТСЯ ТОБОЙ</span><strong>ОНА СОЗДАЁТСЯ ТОБОЙ</strong>
      </div>
      <div className="hero-lockup">
        <p className="acr-kicker">ACR · Холдинг метода</p>
        <h1><span>ART OF</span><span>CREATIVE REALITY</span></h1>
        <div className="acr-hero-bottom">
          <p>Увидеть игру, которую вы уже играете.<br />Создать следующую. Начать действовать из неё.</p>
          <a className="acr-enter" href="#about-acr"><span>Начать свою игру</span><b aria-hidden="true">↓</b></a>
        </div>
      </div>
    </section>

    <section className="about-acr" id="about-acr">
      <div className="section-index"><span>01</span><p>Что такое ACR</p></div>
      <LineReveal className="about-acr-title" lines={["Art of Creative Reality —", "авторский метод создания", "реальности, которой ещё нет."]} />
      <Reveal className="about-acr-definition">
        <p>Не мотивация. Не набор правильных ответов. Не попытка точнее предсказать будущее.</p>
        <h2>ACR помогает увидеть, как прошлое продолжает создавать настоящее — и выйти из этой логики в авторство.</h2>
      </Reveal>
      <div className="about-acr-principles">
        <Reveal className="principle-card p-one"><small>Свобода</small><p>Отделить факты от истории о них и заметить будущее по умолчанию.</p></Reveal>
        <Reveal className="principle-card p-two"><small>Создание</small><p>Сформулировать возможность, которая не является продолжением прошлого.</p></Reveal>
        <Reveal className="principle-card p-three"><small>Доказательство</small><p>Сделать новые ходы и увидеть новую реальность в наблюдаемых результатах.</p></Reveal>
      </div>
    </section>

    <MethodStage />

    <section className="fit" id="fit">
      <div className="fit-head"><div className="section-index"><span>03</span><p>Для каких задач</p></div><h2>Войти можно<br />из разных <em>ситуаций.</em></h2></div>
      <div className="fit-grid">
        <Reveal className="fit-card fit-life"><small>Жизнь / лидерство</small><h3>Всё работает.<br />Но продолжение<br />не вдохновляет.</h3><p>Следующий этап нельзя собрать простой экстраполяцией прошлого.</p></Reveal>
        <Reveal className="fit-card fit-idea"><small>Идея / продукт</small><h3>Замысел есть.<br />Формы пока нет.</h3><p>Идее нужен язык, действие и встреча с реальностью.</p></Reveal>
        <Reveal className="fit-card fit-team"><small>Организация / команда</small><h3>Стратегия новая.<br />Игра — прежняя.</h3><p>Системе нужен не лозунг, а другой способ видеть и действовать.</p></Reveal>
      </div>
    </section>

    <EcosystemStage />

    <section className="flagship" id="main-game">
      <div className="flagship-number" aria-hidden="true">01</div>
      <div className="flagship-copy">
        <div className="section-index light"><span>05</span><p>Флагманская программа</p></div>
        <p className="flagship-code">SEE · CREATE · PLAY</p>
        <h2>Главная<br /><em>игра</em></h2>
        <p>Глубокая групповая программа для зрелых людей, которые готовы увидеть текущую игру, создать следующую и превратить её в практику — не в обещание себе.</p>
        <a href="#contact">Обсудить участие <span>↗</span></a>
      </div>
      <div className="flagship-note"><span>Не про улучшение версии прошлого</span><p>Про реальность, которой ещё не было, и ответственность начать действовать из неё.</p></div>
    </section>

    <section className="companies" id="companies">
      <div className="companies-heading"><div className="section-index light"><span>06</span><p>Для компаний</p></div><h2>Новая стратегия становится реальностью, когда меняется способ действовать.</h2></div>
      <div className="company-proof"><p>Метод работает с собственником, первым лицом, лидерской командой и системой — от новой возможности до практики между встречами.</p><div className="logos" aria-label="Организации в профессиональном опыте Тины"><span>МТС</span><span>X5</span><span>Точка</span><span>АСИ</span><span>Шоколадница</span><span>Inssmart</span></div></div>
      <div className="company-steps"><article><small>01</small><h3>Увидеть</h3><p>Что система воспроизводит сейчас.</p></article><article><small>02</small><h3>Создать</h3><p>Что должно стать правдой для людей и бизнеса.</p></article><article><small>03</small><h3>Встроить</h3><p>Какие действия удержат новую игру.</p></article></div>
      <a className="pill-cta" href="https://t.me/tina_girei" target="_blank" rel="noreferrer">Обсудить задачу компании <span>↗</span></a>
    </section>

    <section className="proof" id="proof">
      <p className="proof-ghost" aria-hidden="true">PROOF</p>
      <div className="proof-copy"><div className="section-index"><span>07</span><p>Критерий метода</p></div><h2>Инсайт ещё<br />не результат.</h2><p>Результат становится видимым в новых решениях, отношениях и действиях, которые продолжаются после программы.</p></div>
    </section>

    <section className="architect" id="tina">
      <div className="architect-index"><div className="section-index"><span>08</span><p>Автор и архитектор</p></div><strong>29</strong><span>лет операционного и предпринимательского опыта</span></div>
      <div className="architect-copy"><h2>Тина Гирей — автор метода и архитектор развивающейся экосистемы.</h2><p>Её роль — видеть потребности человека и бизнеса, создавать философию и продукты метода, соединять глубину с реальностью решений, денег и людей.</p><blockquote>Сильная система должна уметь жить без постоянного присутствия автора.</blockquote></div>
    </section>

    <section className="contact" id="contact">
      <div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div>
      <div className="section-index light"><span>09</span><p>Следующий ход</p></div>
      <h2>С чего начнётся<br />ваша следующая <em>игра?</em></h2>
      <div className="contact-actions"><a className="pill-cta" href="https://t.me/tina_girei" target="_blank" rel="noreferrer">Найти точку входа <span>↗</span></a><a href="#method">Вернуться к методу</a></div>
    </section>

    <footer><a className="footer-mark" href="#top">ACR</a><p>Art of Creative Reality</p><span>Тина Гирей · 2026</span></footer>
  </main>;
}
