# Robot Lab на главной + README профиля: план реализации

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Сделать `/` на adnan070.me форком Robot Lab с проектами Adnan (Val Qauym главным), освежить классические страницы и переписать README профиля `Nanda070/nanda070` по образцу yousefJooX.

**Architecture:** Astro-сайт остаётся. `src/pages/index.astro` отдаёт самостоятельную HTML-страницу — почти дословную копию `ref/robot-lab-portfolio-main/.../index.html` — а вместо `data.js` в неё на сборке вставляются глобальные `PROJECTS`, `CATS`, `EXPERIENCE`, `STACK`, `EMAIL`, `LINKS`, собранные из `src/data/site.ts` + нового `src/data/lab.ts`. README-баннер генерируется адаптированным Python-генератором из референса.

**Tech Stack:** Astro 7, Tailwind 4, Three.js r128 + GSAP 3.12.5 (cdnjs), hairline 0.5.0 (vendored, MIT), Python 3 + Pillow + NumPy + SciPy, Node + sharp + simple-icons (только для масок логотипов).

**Spec:** `docs/superpowers/specs/2026-11-14-robot-lab-redesign-design.md`

Пути ниже: `SITE` = `C:\Users\adnan\Documents\Coding\newnandagithub\adnan070.me-main\adnan070.me-main`, `PROFILE` = `C:\Users\adnan\Documents\Coding\newnandagithub\Nanda070-main`, `REF_LAB` = `C:\Users\adnan\Documents\Coding\newnandagithub\ref\robot-lab-portfolio-main\robot-lab-portfolio-main`, `REF_GH` = `C:\Users\adnan\Documents\Coding\newnandagithub\ref\yousefJooX-main\yousefJooX-main`.

## Global Constraints

- Папки не git-репозитории: шагов commit нет, Adnan пушит сам. Ничего не пушить.
- Палитра (везде, где был янтарь/голубой референса): bg `#060913`, surface `#0c1222`, surface-2 `#111a30`, line `#1f2a47`, fg `#e9eefc`, muted `#8793b3`, accent `#7c9bff` (signal), accent-ink `#060913`, cool `#5bf5b0` (mint), flare `#ff6b9a`. Шрифты: Unbounded (display), Hanken Grotesk (body), JetBrains Mono (mono).
- Никакой озвучки: ни mp3, ни `speechSynthesis`, ни кнопки Voice, ни клавиши M.
- Никаких данных yousef на итоговых страницах: имя, email, CV-ссылка, проекты, «Joox».
- MIT-копирайт референса сохраняется комментарием в `index.astro` и строкой в `SITE/README.md`; `hairline.LICENSE` копируется рядом с вендором.
- Цифры — только из `site.ts` и из спеки (Val Qauym: ~33 модуля бота, ~44 группы API, 3 поверхности, ~945 участников «на ноябрь 2026», RU/EN). Ничего не выдумывать.
- Не публиковать про Val Qauym: env-переменные, адреса серверов, контакты других людей, внутренние имена файлов.
- Роль везде: «Backend Developer — Discord & community platforms». Email: `adnan.huseynli1@gmail.com`. Резюме: `https://adnan070.me/resume`.
- Лаборатория только на EN; `/ru`, `/hu` — классические главные.

## Review Focus

1. Three.js с CDN не загрузился или WebGL запрещён → показывается сообщение и список проектов, модалки открываются (ветка `noscene` референса должна выжить после правок).
2. Телефон 375×812: джойстик, кнопки, сворачиваемая панель зоны, модалка прокручивается, нет горизонтального скролла.
3. `prefers-reduced-motion: reduce` → GSAP-анимации пропускаются, сцена работает.
4. Проект без разбора (пустые `kpis`/`flow`) открывается без JS-ошибки и показывает буллеты из `site.ts`.
5. После переезда главной: `/about`, `/work`, `/resume`, `/contact`, `/ru`, `/hu`, `/404` собираются, ссылки навигации и переключатель языка ведут куда надо.

Проверки для каждого пункта стоят в задачах 2, 3 и 6.

---

### Task 1: Данные лаборатории `src/data/lab.ts`

**Files:**
- Create: `SITE/src/data/lab.ts`
- Modify: `SITE/src/data/site.ts` (порядок `projects`: `valqauym` первым; обновлённые `summary`/`bullets` у `valqauym`), `SITE/src/data/hu.ts` (венгерский текст `valqauym` под новые буллеты)

**Interfaces:**
- Produces:
  - `type LabCat = 'valqauym' | 'bots' | 'web' | 'tools' | 'mobile' | 'minecraft'`
  - `type LabExtra = { cat: LabCat; tag: string; big: string; status?: string; kpis?: [string, string][]; flow?: [string, string][]; notes?: string[]; bars?: { cap: string; better: 'low' | 'high'; unit?: string; items: [string, number][] }; fig?: string }`
  - `const labExtra: Record<string, LabExtra>` — ключи = `Project.id`
  - `type LabProject` — форма `PROJECTS` референса: `{ id, cat, tag, title, big, status?, summary, kpis, flow, notes, bars?, stack: string[], bullets: string[], repo: string | null, repoAlt?: [string, string], repoNote?: string, extra?: [string, string], fig?: string }`
  - `function buildLabData(): { PROJECTS: LabProject[]; CATS: [string, string][]; EXPERIENCE: { when: string; org: string; role: string; note: string; items: string[] }[]; STACK: [string, string[]][]; EMAIL: string; LINKS: Record<'resume' | 'github' | 'telegram' | 'discord' | 'site', string> }`
  - `function labDataScript(): string` — возвращает `const PROJECTS = …; const CATS = …; …` (JSON с экранированием `<` как `\u003c`).

- [ ] **Step 1: Заполнить `labExtra` для всех 25 проектов.** Распределение: `valqauym` → valqauym; `juniper, orbs, cheterin, rp-state-mirror, tg-ds-bridge, vencord, lookup` → bots; `chetmedia, sofra, card-site, gta5rp-wiki-api` → web; `odysseus, reverse-proxy, idus` → tools; `neptun, lumen, pepegago` → mobile; `astra, astrasmp, astrabuild, astraop, astraip, arcana, casino-plugin` → minecraft. `big` — короткая метка (число из `site.ts`, если оно есть у проекта, иначе стек/год, например `'Flutter'`).
- [ ] **Step 2: Полные разборы для 4 проектов.**
  - `valqauym`: `tag: 'Discord · community platform'`, `big: '~945'`, `status: 'Live'`, `kpis`: `['~945','server members (Nov 2026)']`, `['~33','bot modules']`, `['~44','dashboard API groups']`, `['3','surfaces: bot, panel, public site']`. `flow` (8 шагов): Lobby posted → Join solo or by code → Rank resolved → Teams balanced → Map vote → Moved to team voice → Match auto-closed from match data (manual score as fallback) → Elo, XP and season tokens, roles and voices cleaned up. `notes` (4): bot + HTTP API in one process; shared `*_core` logic used by both bot commands and the panel; Elo from team win chance adjusted by ACS/KDA; provably fair games (sha256 of the outcome published before play) + browser game events (Mafia, Bunker) over WebSocket via personal links. `stack`: Python, discord.py, aiohttp, React, Vite, TypeScript, SQLite, nginx, systemd. `extra: ['Credits', 'https://valqauym.kz/credits']`, сайт → `repoAlt: ['valqauym.kz', 'https://valqauym.kz/']`, `repoNote: 'Private repo'`. `fig: 'hub'`.
  - `juniper`, `cheterin`, `orbs`: `kpis`/`flow`/`notes` только из фактов в их `bullets`/`stats` в `site.ts` (1 291 495 серверов, 198 459 460 команд, p95 1.4 s → 18 ms, CPU 85% → 15%, 518 серверов Cheterin и т. п.). `fig`: juniper `'stack'`, cheterin `'cabinet'`, orbs `'relay'`.
- [ ] **Step 3: Обновить `valqauym` в `site.ts`** (EN/RU) и `hu.ts` (HU): summary «Bot, website, admin panel and economy for the Val Qauym VALORANT community in Kazakhstan»; 3 буллета — роль (создатель, руководит разработкой, указано в credits), кастомки 5v5 с Elo, сайт + панель + экономика/ивенты. Переставить объект `valqauym` первым в массиве `projects`.
- [ ] **Step 4: `buildLabData()`** — `title` = `name`, `summary`/`bullets` = EN-версии, `stack` = `stack.split(/,\s*|\s·\s/)` или `[]`, `repo` = `github ?? (href начинается с https://github.com/ ? href : null)`, `repoAlt` = `['<host>', href]` для не-GitHub `href`. Бросать `Error(\`Missing lab data for project "${id}"\`)`, если у проекта нет `labExtra`. `CATS`: `[['all','All projects'],['valqauym','Val Qauym'],['bots','Discord bots'],['web','Web & platforms'],['tools','Tools & AI'],['mobile','Mobile'],['minecraft','Minecraft']]`. `EXPERIENCE` из `experienceForResume()` (+ строка ELTE, Computer Science). `STACK` из `marqueeStack`, сгруппированный в 4 группы.
- [ ] **Step 5: Проверка.** Временный `SITE/src/pages/lab-data.json.ts` (GET → `JSON.stringify(buildLabData())`), `npm run build`, затем:
  Run: `node -e "const d=require('./dist/lab-data.json');console.log(d.PROJECTS.length,d.PROJECTS[0].id,d.PROJECTS.filter(p=>!p.cat).length)"`
  Expected: `25 valqauym 0`. Удалить временный эндпоинт.

### Task 2: Форк Robot Lab на `/`

**Files:**
- Modify (полная замена): `SITE/src/pages/index.astro`
- Create: `SITE/public/lab/vendor/hairline-0.5.0.js`, `SITE/public/lab/vendor/hairline.LICENSE` (копии из `REF_LAB/vendor/`)
- Modify: `SITE/README.md` (строка про MIT-атрибуцию)

**Interfaces:**
- Consumes: `labDataScript()` из Task 1.

- [ ] **Step 1: Перенести `REF_LAB/index.html` в `index.astro`** дословно: `<head>`, `<style is:inline>`, разметку и основной `<script is:inline>`. Без `Layout.astro`. Данные: `<script is:inline set:html={labDataScript()}></script>` на месте `<script src="data.js">`. Импорт hairline → `/lab/vendor/hairline-0.5.0.js`. Комментарий в начале: оригинал Robot Lab © 2026 Yousef Mohammed Abdelkareem, MIT.
- [ ] **Step 2: Палитра и шрифты** по Global Constraints: `:root`-переменные, `--hairline-*`, Google Fonts на Unbounded/Hanken Grotesk/JetBrains Mono, цвета Three.js-материалов через `V('--…')`. Meta: title «Adnan Huseynli — Robot Lab», description, canonical `https://adnan070.me/`, og, favicon `/favicon.svg`, `hreflang` на `/ru`, `/hu`.
- [ ] **Step 3: Удалить озвучку** — модуль `voice`, `#voice-btn`, клавишу M, вызовы `voice.*`, подсказку «M voice».
- [ ] **Step 4: Зоны.** 8 зон: start (0,0), **valqauym (0,-11, r 6)** с одной колонной масштаба ×1.8 и постоянным маяком, bots (-14,-4), web (14,-4), tools (-13,10), mobile (13,10), minecraft (0,-22), hq (0,18). Клавиши `1–8`. Тексты `zonePanel` для start/hq — Adnan (имя, роль, город из `siteMeta.location.en`, `EMAIL`, кнопки Resume/GitHub/Telegram/Discord).
- [ ] **Step 5: HUD и интро.** `hud-tl`: «Adnan <span>Robot Lab</span>». `hud-tr`: мини-карта, «All projects ☰», «Resume ↗» (`/resume`), ссылки «RU»/«HU». Интро: роль, текст о лаборатории, кнопки «Start →», «Just show me the projects» (открывает список), «Classic site» (`/work`), «Resume».
- [ ] **Step 6: `caseHTML` без разбора:** если `kpis` пустой — блок не выводится; если `flow` пустой — заголовок «What I did» и `bullets` списком.
- [ ] **Step 7: Проверка.** `npm run build` без ошибок → `preview_start` с `npm run preview`: (а) десктоп — интро, Start, езда, вход в зону Val Qauym, `E` открывает разбор, `Escape` закрывает, «All projects» показывает 6 категорий; (б) `read_console_messages onlyErrors` пусто; (в) `resize_window mobile` — нет горизонтального скролла (`document.documentElement.scrollWidth <= innerWidth`), джойстик виден; (г) временно поменять src three.js на неверный URL, пересобрать, убедиться, что виден `.noscene` и «All projects» открывает список, вернуть URL; (д) reduced motion эмулировать нельзя — проверить по коду, что все вызовы `gsap` остались под `!reduce`.

### Task 3: Переезд главной, навигация

**Files:**
- Create: `SITE/src/pages/about.astro` (`<HomePage locale="en" />`)
- Modify: `SITE/src/components/Nav.astro` (ссылка «Lab» → `/`, бренд на EN ведёт на `/about`), `SITE/src/components/HomePage.astro` (на `ru`/`hu` — кнопка «3D Lab (EN)» → `/`), `SITE/src/i18n/ui.ts` (ключи `nav.lab`, `home.labCta` на 3 языках; `switchLocalePath` для `/` и `/about`: EN `/` ↔ `/ru` ↔ `/hu`)

- [ ] **Step 1:** Сделать правки выше.
- [ ] **Step 2: Проверка.** `npm run build`, затем:
  Run: `ls dist/index.html dist/about/index.html dist/work/index.html dist/resume/index.html dist/contact/index.html dist/ru/index.html dist/hu/index.html dist/404.html`
  Expected: все 8 файлов есть. В превью пройти по навигации EN/RU/HU с `/about` и `/work`: ни одна ссылка не 404.

### Task 4: Редизайн классических страниц

**Files:**
- Modify: `SITE/src/styles/global.css`, `SITE/src/components/WorkPage.astro`, `SITE/src/components/HomePage.astro`, `SITE/src/components/ProjectLinks.astro` (при необходимости)

**Interfaces:**
- Consumes: `labExtra` (для `big`, `tag`, `kpis` в карточках).

- [ ] **Step 1: HUD-язык в стилях:** моно-метки `zone · …` над секциями, панели с рамкой и скруглением как `.modal-in`/`.panel` лаборатории, кнопки в стиле `.tbtn`/`.btn`. Токены — те же, что в `@theme`.
- [ ] **Step 2: WorkPage:** Val Qauym — отдельная широкая карточка сверху: `big`, `tag`, 4 `kpis`, ссылки (valqauym.kz, credits). Остальные featured — карточки «big + tag + summary». Группировка по `labExtra.cat` с подписями из `CATS` (EN/RU/HU-подписи в `ui.ts`).
- [ ] **Step 3: HomePage (`/about`, `/ru`, `/hu`):** блок «Featured» начинается с Val Qauym.
- [ ] **Step 4: Проверка.** `npm run build`; превью `/work`, `/ru/work`, `/hu/work`, `/about` на десктопе и `mobile`: Val Qauym сверху, нет горизонтального скролла, нет ошибок консоли. Скриншоты показать Adnan.

### Task 5: Баннер README

**Files:**
- Create: `PROFILE/tools/generate_profile_assets.py` (из `REF_GH/tools/`), `PROFILE/tools/logo-masks/{python,discord,typescript}.png`, `PROFILE/tools/make_logo_masks.mjs`, `PROFILE/assets/source-avatar.jpg` (копия `C:\Users\adnan\Pictures\Pfp\Pfp\55.jpg`), `PROFILE/assets/dark.svg`, `PROFILE/assets/light.svg`

- [ ] **Step 1: Маски логотипов.** В scratchpad: `npm i sharp simple-icons`; `make_logo_masks.mjs` рендерит `siPython`, `siDiscord`, `siTypescript` в PNG 512×512 белым по прозрачному → `tools/logo-masks/`.
- [ ] **Step 2: Генератор.** `PORTRAIT = assets/source-avatar.jpg`. Без вырезания силуэта: `mask = np.ones(...)` (аватар — рисунок без однотонного фона). Логотипы: python → discord → typescript. Цвета: dark — bg `#060913`, panel `#0c1222`, border `#1f2a47`, text `#e9eefc`, muted `#8793b3`, portrait `#7c9bff`, chrome `#5bf5b0`, accent `#ff6b9a`; light — инверсия на светлый фон с теми же акцентами потемнее. Тексты `info_panel`: `@Nanda070`, бейдж `DISCORD · BACKEND`, имя «Adnan Huseynli», роль, 2 строки описания из `homeCopy.en.lede`, LOCATION «Budapest, Hungary», EDUCATION «ELTE, Computer Science», чипы Python, TypeScript, discord.py, aiohttp, PostgreSQL, React, Docker; нижняя строка: `adnan.huseynli1@gmail.com` · `adnan070.me` · `t.me/nanda070`; подпись снизу `PYTHON · TYPESCRIPT · DISCORD // BUDAPEST, HU`.
- [ ] **Step 3: Запуск.** `python -m pip install pillow numpy scipy` (scipy сейчас нет), затем:
  Run: `python -I tools/generate_profile_assets.py`
  Expected: `Generated …dark.svg …light.svg`; оба файла < 3 MB.
- [ ] **Step 4: Проверка.** Открыть оба SVG в браузерной панели: портрет узнаваем, анимация логотипов идёт, текст не вылезает за панель. Показать Adnan.

### Task 6: README профиля и финальная проверка

**Files:**
- Modify (полная замена): `PROFILE/README.md`
- Keep: `PROFILE/.github/workflows/snake.yml` (имена `github-contribution-grid-snake*.svg` не менять)
- Create: `PROFILE/SETUP.md` (короткий чеклист: залить файлы, права Actions для змейки, проверить обе темы)

- [ ] **Step 1: README** по структуре `REF_GH/README.md`: `<picture>` с `assets/dark.svg`/`light.svg` (raw URL `Nanda070/nanda070/main/assets/...?v=1`); typing-строки (JetBrains Mono, цвет `7C9BFF`): «Backend Developer — Discord & community platforms», «Val Qauym: bot, site, panel and economy», «Juniper: 1.29M servers served», «Drive my robot through my portfolio →»; кнопки Portfolio (`https://adnan070.me`) и Resume (`https://adnan070.me/resume`); About me (5 пунктов из `homeCopy`/`resumeCopy` EN); таблица Featured projects: Val Qauym, Juniper, Cheterin, Discord Quests × VALORANT, ChetMedia, Sofra, Zero-Allocation Reverse Proxy, Neptun ELTE — колонки «Project | What it does | Stack», цифры только из `site.ts`; skillicons (текущие наборы из старого README, одной сеткой `perline=12`); streak `streak-stats.demolab.com` (палитра сайта), `github-profile-summary-cards` stats и repos-per-language (`tokyonight`) для `Nanda070`; змейка; контакты: Portfolio, Email `adnan.huseynli1@gmail.com`, Telegram `nanda070`, Discord-профиль `https://discord.com/users/1219803151180370021`.
- [ ] **Step 2: Проверка ссылок.**
  Run: `for u in "https://streak-stats.demolab.com/?user=Nanda070" "https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Nanda070&theme=tokyonight" "https://skillicons.dev/icons?i=python"; do curl -s -o /dev/null -w "%{http_code} $u\n" "$u"; done`
  Expected: `200` для каждого.
- [ ] **Step 3: Финальная проверка сайта.** `npm run build` чистый; превью: `/`, `/about`, `/work`, `/resume`, `/contact`, `/ru`, `/hu`, несуществующий путь → 404; консоль без ошибок; мобильный размер на `/` и `/work`. Отчитаться Adnan: что изменено, что пушить в какой репозиторий, что проверить после деплоя (змейка, обе темы GitHub).
