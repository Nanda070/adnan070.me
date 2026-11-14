/**
 * Data for the Robot Lab on `/`, `/ru` and `/hu`.
 * Project copy comes from `site.ts`; this file adds the lab-only fields, keyed by project id.
 * `buildLabData(locale)` returns the shape the original robot-lab `data.js` had (plus `UI` strings),
 * so the forked page script can stay close to the original.
 */
import type { Locale } from '../i18n/ui';
import { withBase } from '../i18n/ui';
import { projects, siteMeta, resumeCopy, experienceForResume } from './site';

/** A string, or one per locale. Plain strings are the same in every language (names, numbers). */
export type Tr = string | Record<Locale, string>;
export const tr = (v: Tr, locale: Locale): string => (typeof v === 'string' ? v : v[locale]);

export type LabCat = 'valqauym' | 'bots' | 'web' | 'tools' | 'mobile' | 'minecraft';

export type LabExtra = {
  cat: LabCat;
  tag: Tr;
  big: Tr;
  status?: Tr;
  kpis?: [string, Tr][];
  flow?: [Tr, Tr][];
  notes?: Tr[];
  bars?: { cap: Tr; better: 'low' | 'high'; unit?: string; items: [Tr, number][] };
  fig?: string;
  /** Overrides for the buttons in the case study. */
  repoNote?: Tr;
  extra?: [Tr, string];
};

export const labCats: [LabCat, Record<Locale, string>][] = [
  ['valqauym', { en: 'Val Qauym', ru: 'Val Qauym', hu: 'Val Qauym' }],
  ['bots', { en: 'Bots & integrations', ru: 'Боты и интеграции', hu: 'Botok és integrációk' }],
  ['web', { en: 'Web & platforms', ru: 'Веб и платформы', hu: 'Web és platformok' }],
  ['tools', { en: 'Tools & AI', ru: 'Инструменты и AI', hu: 'Eszközök és AI' }],
  ['mobile', { en: 'Mobile', ru: 'Мобильные', hu: 'Mobil' }],
  ['minecraft', { en: 'Minecraft', ru: 'Minecraft', hu: 'Minecraft' }],
];

const live = { en: 'Live', ru: 'Работает', hu: 'Élő' };
const private_ = { en: 'Private repo', ru: 'Закрытый репозиторий', hu: 'Privát repó' };
const astraTag = { en: 'ASTRA plugin', ru: 'Плагин ASTRA', hu: 'ASTRA plugin' };

export const labExtra: Record<string, LabExtra> = {
  valqauym: {
    cat: 'valqauym',
    tag: { en: 'Discord · community platform', ru: 'Discord · платформа сообщества', hu: 'Discord · közösségi platform' },
    big: '~945',
    status: live,
    fig: 'hub',
    repoNote: private_,
    extra: [{ en: 'Credits', ru: 'Авторы', hu: 'Készítők' }, 'https://valqauym.kz/credits'],
    kpis: [
      ['~945', { en: 'server members (Nov 2026)', ru: 'участников сервера (ноябрь 2026)', hu: 'szervertag (2026. november)' }],
      ['~33', { en: 'bot modules', ru: 'модулей бота', hu: 'botmodul' }],
      ['~44', { en: 'dashboard API groups', ru: 'групп API панели', hu: 'panel API-csoport' }],
      ['3', { en: 'surfaces: bot, panel, public site', ru: 'части: бот, панель, публичный сайт', hu: 'felület: bot, panel, nyilvános oldal' }],
    ],
    flow: [
      [
        { en: 'Lobby posted', ru: 'Лобби открыто', hu: 'Lobbi megnyitva' },
        {
          en: 'A host opens a 5v5 lobby from Discord, the panel or a schedule.',
          ru: 'Хост открывает лобби 5v5 из Discord, панели или по расписанию.',
          hu: 'A host 5v5-ös lobbit nyit Discordból, a panelről vagy ütemezve.',
        },
      ],
      [
        { en: 'Players join', ru: 'Игроки заходят', hu: 'Játékosok csatlakoznak' },
        {
          en: 'Solo with a button, or as a group with a friend code; extra players wait in reserve.',
          ru: 'Соло кнопкой или группой по коду для друзей; лишние ждут в запасе.',
          hu: 'Egyedül egy gombbal vagy csoportban baráti kóddal; a többiek tartalékban várnak.',
        },
      ],
      [
        { en: 'Rank resolved', ru: 'Ранг определён', hu: 'Rang meghatározva' },
        {
          en: 'Each player’s rank comes from their linked Riot ID, their last known rank or a role.',
          ru: 'Ранг игрока берётся из привязанного Riot ID, последнего известного ранга или роли.',
          hu: 'A játékos rangja a kapcsolt Riot ID-ból, az utolsó ismert rangból vagy egy szerepkörből jön.',
        },
      ],
      [
        { en: 'Teams balanced', ru: 'Баланс команд', hu: 'Csapatok kiegyenlítése' },
        {
          en: 'The bot splits the lobby into two teams of even strength.',
          ru: 'Бот делит лобби на две равные по силе команды.',
          hu: 'A bot két egyenlő erejű csapatra osztja a lobbit.',
        },
      ],
      [
        { en: 'Map vote', ru: 'Голосование за карту', hu: 'Pályaszavazás' },
        {
          en: 'Players vote on the map and bans right in the lobby message.',
          ru: 'Игроки голосуют за карту и баны прямо в сообщении лобби.',
          hu: 'A játékosok a lobbi üzenetében szavaznak a pályáról és a tiltásokról.',
        },
      ],
      [
        { en: 'Moved to voice', ru: 'Перенос в войсы', hu: 'Hangcsatornákba' },
        {
          en: 'Both teams are moved into their own temporary voice channels.',
          ru: 'Обе команды переносятся в свои временные голосовые каналы.',
          hu: 'Mindkét csapat saját ideiglenes hangcsatornába kerül.',
        },
      ],
      [
        { en: 'Match closed', ru: 'Матч закрыт', hu: 'Meccs lezárva' },
        {
          en: 'The result is picked up from the match data automatically; a manual score is the fallback.',
          ru: 'Результат подтягивается из данных матча автоматически; ручной счёт — запасной вариант.',
          hu: 'Az eredmény automatikusan jön a meccsadatokból; a kézi eredmény a tartalék.',
        },
      ],
      [
        { en: 'Rewards and cleanup', ru: 'Награды и уборка', hu: 'Jutalmak és takarítás' },
        {
          en: 'Elo, XP and season tokens are paid out; temporary roles and voice channels are removed.',
          ru: 'Начисляются Elo, XP и сезонные токены; временные роли и войсы удаляются.',
          hu: 'Elo, XP és szezonális tokenek járnak; az ideiglenes szerepkörök és hangcsatornák törlődnek.',
        },
      ],
    ],
    notes: [
      {
        en: '<b>One process, two front doors.</b> The Discord bot and the HTTP API for the site and panel run in the same process, so both see the same live state.',
        ru: '<b>Один процесс, два входа.</b> Discord-бот и HTTP API сайта и панели работают в одном процессе и видят одно и то же живое состояние.',
        hu: '<b>Egy folyamat, két bejárat.</b> A Discord-bot és az oldal meg a panel HTTP API-ja ugyanabban a folyamatban fut, így ugyanazt az élő állapotot látják.',
      },
      {
        en: '<b>Shared core logic.</b> Every module keeps its logic in a core layer that both the bot commands and the admin panel call. No feature is written twice.',
        ru: '<b>Общее ядро.</b> Логика каждого модуля живёт в слое core, который вызывают и команды бота, и админ-панель. Ни одна функция не написана дважды.',
        hu: '<b>Közös mag.</b> Minden modul logikája egy core rétegben van, amelyet a botparancsok és az admin panel is hív. Semmi sincs kétszer megírva.',
      },
      {
        en: '<b>Elo that rewards the individual.</b> Everyone starts each season at 1000; the change per game comes from the team’s win chance, adjusted by the player’s ACS and KDA against the match average.',
        ru: '<b>Elo, которое видит игрока.</b> Каждый сезон все начинают с 1000; изменение за игру считается от шанса команды на победу с поправкой на ACS и KDA игрока относительно среднего по матчу.',
        hu: '<b>Egyénre szabott Elo.</b> Minden szezonban mindenki 1000-ről indul; a meccsenkénti változás a csapat győzelmi esélyéből jön, a játékos ACS és KDA értékével korrigálva a meccsátlaghoz képest.',
      },
      {
        en: '<b>Fair games in the browser.</b> Game events such as Mafia and Bunker run on the site over WebSocket through a personal link; chance games publish a sha256 hash of the outcome before play.',
        ru: '<b>Честные игры в браузере.</b> Ивенты вроде Мафии и Бункера идут на сайте через WebSocket по личной ссылке; игры на удачу публикуют sha256-хеш исхода до начала.',
        hu: '<b>Tisztességes játékok a böngészőben.</b> A Maffia és a Bunker eseményei WebSocketen futnak az oldalon, személyes linken át; a szerencsejátékok játék előtt közzéteszik a kimenet sha256 hashét.',
      },
    ],
  },
  juniper: {
    cat: 'bots',
    tag: { en: 'Discord bot · at scale', ru: 'Discord-бот · большой масштаб', hu: 'Discord-bot · nagy léptékben' },
    big: '1.29M',
    fig: 'stack',
    kpis: [
      ['1,291,495', { en: 'servers served to date', ru: 'серверов за всё время', hu: 'kiszolgált szerver eddig' }],
      ['4,928,753', { en: 'users', ru: 'пользователей', hu: 'felhasználó' }],
      ['198M+', { en: 'commands processed', ru: 'обработанных команд', hu: 'feldolgozott parancs' }],
      ['85% → 15%', { en: 'peak database CPU', ru: 'пиковый CPU базы', hu: 'adatbázis csúcs CPU' }],
    ],
    flow: [
      [
        { en: 'Slow pages found', ru: 'Найдены медленные страницы', hu: 'Lassú oldalak' },
        {
          en: 'Deep history pages and season leaderboards were the slowest queries in production.',
          ru: 'Глубокие страницы истории и сезонные топы были самыми медленными запросами в проде.',
          hu: 'A mély előzményoldalak és a szezonális ranglisták voltak a leglassabb éles lekérdezések.',
        },
      ],
      [
        'EXPLAIN ANALYZE',
        {
          en: 'The plans showed a sequential scan on both.',
          ru: 'Планы показали Seq Scan в обоих случаях.',
          hu: 'A tervek mindkettőnél Seq Scant mutattak.',
        },
      ],
      [
        { en: 'Keyset pagination', ru: 'Keyset-пагинация', hu: 'Keyset lapozás' },
        {
          en: 'OFFSET paging replaced with WHERE id < last_seen_id.',
          ru: 'OFFSET заменён на WHERE id < last_seen_id.',
          hu: 'Az OFFSET helyett WHERE id < last_seen_id.',
        },
      ],
      [
        { en: 'Covering index', ru: 'Покрывающий индекс', hu: 'Fedő index' },
        {
          en: '(server_id, created_at DESC) INCLUDE (user_id, points), so the leaderboard reads only the index.',
          ru: '(server_id, created_at DESC) INCLUDE (user_id, points): топ читается только из индекса.',
          hu: '(server_id, created_at DESC) INCLUDE (user_id, points), így a ranglista csak az indexet olvassa.',
        },
      ],
      [
        { en: 'Result', ru: 'Результат', hu: 'Eredmény' },
        {
          en: 'p95 latency from 1.4 s to 18 ms, about 77× faster.',
          ru: 'p95 с 1,4 с до 18 мс, примерно в 77 раз быстрее.',
          hu: 'p95 1,4 s-ról 18 ms-ra, nagyjából 77× gyorsabb.',
        },
      ],
    ],
    notes: [
      {
        en: '<b>Measure before tuning.</b> EXPLAIN ANALYZE pointed at the two queries that mattered instead of guessing.',
        ru: '<b>Сначала измерить.</b> EXPLAIN ANALYZE указал на два важных запроса, без догадок.',
        hu: '<b>Előbb mérni.</b> Az EXPLAIN ANALYZE a két fontos lekérdezésre mutatott, találgatás nélkül.',
      },
      {
        en: '<b>Pagination by key, not offset.</b> Deep pages cost the same as the first page.',
        ru: '<b>Пагинация по ключу, а не по смещению.</b> Глубокие страницы стоят столько же, сколько первая.',
        hu: '<b>Kulcs szerinti lapozás, nem eltolás.</b> A mély oldalak ugyanannyiba kerülnek, mint az első.',
      },
      {
        en: '<b>Index for the read.</b> An INCLUDE index lets the hottest query skip the table entirely.',
        ru: '<b>Индекс под чтение.</b> INCLUDE-индекс позволяет самому горячему запросу вообще не трогать таблицу.',
        hu: '<b>Index az olvasáshoz.</b> Az INCLUDE index miatt a legforgalmasabb lekérdezés el sem éri a táblát.',
      },
    ],
    bars: {
      cap: { en: 'p95 query latency (ms)', ru: 'p95 времени запроса (мс)', hu: 'p95 lekérdezési idő (ms)' },
      better: 'low',
      unit: 'ms',
      items: [
        [{ en: 'Before', ru: 'До', hu: 'Előtte' }, 1400],
        [{ en: 'After', ru: 'После', hu: 'Utána' }, 18],
      ],
    },
  },
  orbs: {
    cat: 'bots',
    tag: { en: 'Discord Quests · partnership', ru: 'Discord Quests · партнёрство', hu: 'Discord Quests · partnerség' },
    big: { en: 'Partner', ru: 'Партнёр', hu: 'Partner' },
    fig: 'relay',
    repoNote: { en: 'Partner project', ru: 'Партнёрский проект', hu: 'Partnerprojekt' },
  },
  cheterin: {
    cat: 'bots',
    tag: { en: 'Discord bot · open source', ru: 'Discord-бот · open source', hu: 'Discord-bot · nyílt forráskód' },
    big: '518',
    fig: 'cabinet',
    kpis: [
      ['518', { en: 'servers running Cheterin', ru: 'серверов с Cheterin', hu: 'szerveren fut a Cheterin' }],
      ['358', { en: 'commits, Apache-2.0', ru: 'коммитов, Apache-2.0', hu: 'commit, Apache-2.0' }],
      ['~270k', { en: 'ChetMedia views per day (peak 370k)', ru: 'просмотров ChetMedia в день (пик 370 тыс.)', hu: 'ChetMedia napi megtekintés (csúcs 370 ezer)' }],
      ['EN / RU', { en: 'interface', ru: 'интерфейс', hu: 'felület' }],
    ],
    flow: [
      [
        { en: 'Admin opens the dashboard', ru: 'Админ открывает дашборд', hu: 'Az admin megnyitja a panelt' },
        {
          en: 'Modules are switched on per server in the browser.',
          ru: 'Модули включаются для каждого сервера в браузере.',
          hu: 'A modulokat szerverenként a böngészőben kapcsolja be.',
        },
      ],
      [
        { en: 'Each guild isolated', ru: 'Серверы изолированы', hu: 'Szerverek elkülönítve' },
        {
          en: 'Settings and data stay separate for every server.',
          ru: 'Настройки и данные у каждого сервера свои.',
          hu: 'A beállítások és az adatok szerverenként külön vannak.',
        },
      ],
      [
        { en: 'Members use slash commands', ru: 'Участники — слэш-команды', hu: 'A tagok slash-parancsokat használnak' },
        {
          en: 'Moderation, levels, economy, giveaways, polls and VALORANT tools.',
          ru: 'Модерация, уровни, экономика, розыгрыши, опросы и VALORANT-инструменты.',
          hu: 'Moderáció, szintek, gazdaság, nyereményjátékok, szavazások és VALORANT-eszközök.',
        },
      ],
      [
        { en: 'Lookup service', ru: 'Сервис Lookup', hu: 'Lookup szolgáltatás' },
        {
          en: 'A separate public SPA and API, running as its own process, resolves Discord IDs and profiles.',
          ru: 'Отдельные публичные SPA и API в своём процессе резолвят Discord ID и профили.',
          hu: 'Külön nyilvános SPA és API, saját folyamatban, Discord ID-kat és profilokat old fel.',
        },
      ],
      [
        { en: 'Shipped by CI', ru: 'Выкладка через CI', hu: 'Szállítás CI-jal' },
        {
          en: 'pytest and frontend builds on GitHub Actions; systemd units behind nginx.',
          ru: 'pytest и сборка фронтенда в GitHub Actions; systemd-юниты за nginx.',
          hu: 'pytest és frontend build GitHub Actionsben; systemd unitok nginx mögött.',
        },
      ],
    ],
    notes: [
      {
        en: '<b>Modules, not forks.</b> One bot serves every server; each admin picks what is on.',
        ru: '<b>Модули, а не форки.</b> Один бот на все серверы; каждый админ сам выбирает, что включить.',
        hu: '<b>Modulok, nem forkok.</b> Egy bot szolgál ki minden szervert; minden admin maga választ.',
      },
      {
        en: '<b>Separate processes for separate jobs.</b> Lookup runs on its own, so a spike there never slows the bot.',
        ru: '<b>Разные задачи — разные процессы.</b> Lookup работает отдельно, и всплеск нагрузки там не тормозит бота.',
        hu: '<b>Külön feladat, külön folyamat.</b> A Lookup önállóan fut, így egy terheléscsúcs ott nem lassítja a botot.',
      },
      {
        en: '<b>An ecosystem, not a single bot.</b> Lookup, Vencord userplugins and ChetMedia share the same stack.',
        ru: '<b>Экосистема, а не один бот.</b> Lookup, Vencord-плагины и ChetMedia работают на одном стеке.',
        hu: '<b>Ökoszisztéma, nem egyetlen bot.</b> A Lookup, a Vencord pluginok és a ChetMedia ugyanazon a stacken futnak.',
      },
    ],
  },
  'rp-state-mirror': {
    cat: 'bots',
    tag: { en: 'Discord bot · GTA5RP', ru: 'Discord-бот · GTA5RP', hu: 'Discord-bot · GTA5RP' },
    big: { en: 'In use', ru: 'В работе', hu: 'Használatban' },
  },
  'tg-ds-bridge': { cat: 'bots', tag: 'Telegram ↔ Discord', big: '2-way' },
  vencord: { cat: 'bots', tag: { en: 'Discord client plugins', ru: 'Плагины Discord-клиента', hu: 'Discord kliens pluginok' }, big: '5+' },
  lookup: { cat: 'bots', tag: { en: 'Discord lookup service', ru: 'Сервис поиска по Discord', hu: 'Discord kereső szolgáltatás' }, big: 'API' },
  chetmedia: { cat: 'web', tag: { en: 'Streaming', ru: 'Стриминг', hu: 'Streaming' }, big: { en: '270k/day', ru: '270k/день', hu: '270k/nap' } },
  sofra: {
    cat: 'web',
    tag: { en: 'Restaurant POS', ru: 'POS для ресторанов', hu: 'Éttermi POS' },
    big: { en: '4 langs', ru: '4 языка', hu: '4 nyelv' },
    status: { en: 'In progress', ru: 'В разработке', hu: 'Fejlesztés alatt' },
  },
  'card-site': { cat: 'web', tag: { en: 'Personal card', ru: 'Визитка', hu: 'Névjegy' }, big: 'Web' },
  'gta5rp-wiki-api': { cat: 'web', tag: { en: 'TypeScript client', ru: 'Клиент на TypeScript', hu: 'TypeScript kliens' }, big: 'MIT' },
  odysseus: { cat: 'tools', tag: { en: 'Self-hosted AI', ru: 'Self-hosted AI', hu: 'Saját hosztolású AI' }, big: 'MCP' },
  'reverse-proxy': {
    cat: 'tools',
    tag: { en: '.NET 8 · performance', ru: '.NET 8 · производительность', hu: '.NET 8 · teljesítmény' },
    big: '0 alloc',
    status: { en: 'Early stage', ru: 'Ранняя стадия', hu: 'Korai fázis' },
  },
  idus: { cat: 'tools', tag: { en: 'Home AI assistant', ru: 'Домашний AI-ассистент', hu: 'Otthoni AI-asszisztens' }, big: { en: 'Local', ru: 'Локально', hu: 'Helyi' } },
  neptun: { cat: 'mobile', tag: 'Flutter · ELTE', big: 'Flutter' },
  lumen: { cat: 'mobile', tag: { en: 'Flutter · local-first', ru: 'Flutter · local-first', hu: 'Flutter · local-first' }, big: 'Flutter' },
  pepegago: { cat: 'mobile', tag: { en: 'Location-based game', ru: 'Игра с геолокацией', hu: 'Helyalapú játék' }, big: 'GPS' },
  astra: { cat: 'minecraft', tag: { en: 'Plugin suite', ru: 'Набор плагинов', hu: 'Pluginkészlet' }, big: '4' },
  astrasmp: { cat: 'minecraft', tag: astraTag, big: 'SMP' },
  astrabuild: { cat: 'minecraft', tag: astraTag, big: 'Build' },
  astraop: { cat: 'minecraft', tag: astraTag, big: 'OP' },
  astraip: { cat: 'minecraft', tag: astraTag, big: 'IP' },
  arcana: { cat: 'minecraft', tag: { en: 'Minecraft mod', ru: 'Мод Minecraft', hu: 'Minecraft mod' }, big: 'Mod' },
  'casino-plugin': { cat: 'minecraft', tag: { en: 'Minecraft plugin', ru: 'Плагин Minecraft', hu: 'Minecraft plugin' }, big: '1.21' },
};

/** Interface strings of the lab page. Strings with `{n}` or HTML are filled in by the page script. */
export const labUi = {
  en: {
    title: 'Adnan Huseynli · Robot Lab',
    description: 'Adnan Huseynli (Nanda), backend developer in Budapest. Drive a robot through a 3D lab of projects.',
    ogDescription: 'Drive a robot through a 3D lab of my platforms, services and tools: Val Qauym, Juniper, Cheterin and more.',
    sceneLabel: '3D lab. Drive the robot with WASD or arrow keys, or tap the floor.',
    allProjects: 'All projects',
    resume: 'Resume',
    classic: 'Regular site',
    move: 'move', sprint: 'sprint', jumpFlip: 'jump + flip', runNext: 'run to next project', zones: 'zones', open: 'open', zoom: 'zoom',
    tapFloor: 'tap the floor to walk',
    joyLabel: 'Move the robot', controlsLabel: 'Robot controls', nextLabel: 'Run to next project', runLabel: 'Toggle sprint', run: 'run', jumpLabel: 'Jump and flip',
    openE: 'Open · E',
    introKicker: 'Backend developer · Budapest',
    introText: 'Drive, sprint and flip around the lab. Each zone is an area I build in, and every pillar is a project you can open to see how it works. The big one in the middle is <b style="color:var(--fg)">Val Qauym</b>.',
    keysDesk: ['WASD move', 'Shift sprint', 'Space jump + flip', 'Tab next project', 'E open'],
    keysTouch: ['Left stick: walk (push far to run)', '⤴ jump + flip', '⏭ next project'],
    start: 'Start →', skip: 'Just show me the projects',
    back: 'Back to the lab',
    zone: 'zone', openFloor: 'open floor', aboutMe: 'about me', expContact: 'experience · contact', mainProject: 'main project',
    plural: { one: '{n} project', few: '{n} projects', many: '{n} projects', other: '{n} projects' },
    howItWorks: 'How it works', whatIDid: 'What I did', decisions: 'Decisions', stack: 'Stack', numbers: 'Numbers',
    viewCode: 'View code on GitHub', project: 'project', index: 'index', figHint: 'move your pointer over it',
    hi: "Hi, I'm Adnan",
    aboutDrive: 'Drive north to <b style="color:var(--fg)">Val Qauym HQ</b>, or south to <b style="color:var(--fg)">HQ</b> for experience and contact.',
    experience: 'Experience', contact: 'Contact',
    no3d: '3D could not load. Use “All projects”.', noWebgl: 'Your browser blocked WebGL. Use “All projects”.',
    zoneNames: { start: 'Start pad', valqauym: 'Val Qauym HQ', bots: 'Bots & integrations', web: 'Web & platforms', minecraft: 'Minecraft', tools: 'Tools & AI', mobile: 'Mobile', hq: 'HQ' },
    role: 'Backend developer',
    lede: 'I build backend systems, platforms and tools: Val Qauym, Juniper (1.29M servers served), Cheterin and more.',
  },
  ru: {
    title: 'Adnan Huseynli · Robot Lab',
    description: 'Adnan Huseynli (Nanda), backend-разработчик из Будапешта. Проведите робота по 3D-лаборатории проектов.',
    ogDescription: 'Проведите робота по 3D-лаборатории моих платформ, сервисов и инструментов: Val Qauym, Juniper, Cheterin и другие.',
    sceneLabel: '3D-лаборатория. Управляйте роботом клавишами WASD или стрелками либо нажмите на пол.',
    allProjects: 'Все проекты',
    resume: 'Резюме',
    classic: 'Обычный сайт',
    move: 'ехать', sprint: 'ускорение', jumpFlip: 'прыжок + сальто', runNext: 'к следующему проекту', zones: 'зоны', open: 'открыть', zoom: 'масштаб',
    tapFloor: 'нажмите на пол, чтобы идти',
    joyLabel: 'Управление роботом', controlsLabel: 'Кнопки робота', nextLabel: 'К следующему проекту', runLabel: 'Ускорение', run: 'бег', jumpLabel: 'Прыжок и сальто',
    openE: 'Открыть · E',
    introKicker: 'Backend-разработчик · Будапешт',
    introText: 'Ездите, ускоряйтесь и делайте сальто по лаборатории. Каждая зона — направление, в котором я работаю, каждая колонна — проект, который можно открыть и посмотреть, как он устроен. Большая в центре — <b style="color:var(--fg)">Val Qauym</b>.',
    keysDesk: ['WASD ехать', 'Shift ускорение', 'Space прыжок + сальто', 'Tab следующий проект', 'E открыть'],
    keysTouch: ['Левый стик: идти (до края — бег)', '⤴ прыжок + сальто', '⏭ следующий проект'],
    start: 'Старт →', skip: 'Просто покажите проекты',
    back: 'Назад в лабораторию',
    zone: 'зона', openFloor: 'открытое поле', aboutMe: 'обо мне', expContact: 'опыт · контакты', mainProject: 'главный проект',
    plural: { one: '{n} проект', few: '{n} проекта', many: '{n} проектов', other: '{n} проекта' },
    howItWorks: 'Как это работает', whatIDid: 'Что я сделал', decisions: 'Решения', stack: 'Стек', numbers: 'Цифры',
    viewCode: 'Код на GitHub', project: 'проект', index: 'список', figHint: 'наведите курсор',
    hi: 'Привет, я Аднан',
    aboutDrive: 'На север — <b style="color:var(--fg)">Val Qauym HQ</b>, на юг — <b style="color:var(--fg)">HQ</b> с опытом и контактами.',
    experience: 'Опыт', contact: 'Контакты',
    no3d: '3D не загрузилось. Откройте «Все проекты».', noWebgl: 'Браузер заблокировал WebGL. Откройте «Все проекты».',
    zoneNames: { start: 'Старт', valqauym: 'Val Qauym HQ', bots: 'Боты и интеграции', web: 'Веб и платформы', minecraft: 'Minecraft', tools: 'Инструменты и AI', mobile: 'Мобильные', hq: 'HQ' },
    role: 'Backend-разработчик',
    lede: 'Строю бэкенд-системы, платформы и инструменты: Val Qauym, Juniper (1,29 млн серверов), Cheterin и другие.',
  },
  hu: {
    title: 'Adnan Huseynli · Robot Lab',
    description: 'Adnan Huseynli (Nanda), budapesti backend fejlesztő. Vezess egy robotot a projektek 3D laborjában.',
    ogDescription: 'Vezess egy robotot a platformjaim, szolgáltatásaim és eszközeim 3D laborjában: Val Qauym, Juniper, Cheterin és mások.',
    sceneLabel: '3D labor. Irányítsd a robotot WASD-vel vagy a nyilakkal, vagy koppints a padlóra.',
    allProjects: 'Minden projekt',
    resume: 'Önéletrajz',
    classic: 'Normál oldal',
    move: 'mozgás', sprint: 'sprint', jumpFlip: 'ugrás + szaltó', runNext: 'a következő projekthez', zones: 'zónák', open: 'megnyitás', zoom: 'nagyítás',
    tapFloor: 'koppints a padlóra a sétához',
    joyLabel: 'A robot mozgatása', controlsLabel: 'Robotvezérlés', nextLabel: 'A következő projekthez', runLabel: 'Sprint be/ki', run: 'fut', jumpLabel: 'Ugrás és szaltó',
    openE: 'Megnyitás · E',
    introKicker: 'Backend fejlesztő · Budapest',
    introText: 'Vezess, sprintelj és szaltózz a laborban. Minden zóna egy terület, amelyen dolgozom, minden oszlop egy projekt, amelyet megnyitva láthatod, hogyan működik. A nagy középen a <b style="color:var(--fg)">Val Qauym</b>.',
    keysDesk: ['WASD mozgás', 'Shift sprint', 'Space ugrás + szaltó', 'Tab következő projekt', 'E megnyitás'],
    keysTouch: ['Bal kar: séta (a szélén futás)', '⤴ ugrás + szaltó', '⏭ következő projekt'],
    start: 'Indulás →', skip: 'Csak a projekteket kérem',
    back: 'Vissza a laborba',
    zone: 'zóna', openFloor: 'szabad terület', aboutMe: 'rólam', expContact: 'tapasztalat · kapcsolat', mainProject: 'fő projekt',
    plural: { one: '{n} projekt', few: '{n} projekt', many: '{n} projekt', other: '{n} projekt' },
    howItWorks: 'Hogyan működik', whatIDid: 'Amit csináltam', decisions: 'Döntések', stack: 'Stack', numbers: 'Számok',
    viewCode: 'Kód a GitHubon', project: 'projekt', index: 'lista', figHint: 'vidd fölé az egeret',
    hi: 'Szia, Adnan vagyok',
    aboutDrive: 'Északra a <b style="color:var(--fg)">Val Qauym HQ</b>, délre a <b style="color:var(--fg)">HQ</b> a tapasztalattal és az elérhetőségekkel.',
    experience: 'Tapasztalat', contact: 'Kapcsolat',
    no3d: 'A 3D nem töltődött be. Használd a „Minden projekt” gombot.', noWebgl: 'A böngésző letiltotta a WebGL-t. Használd a „Minden projekt” gombot.',
    zoneNames: { start: 'Start', valqauym: 'Val Qauym HQ', bots: 'Botok és integrációk', web: 'Web és platformok', minecraft: 'Minecraft', tools: 'Eszközök és AI', mobile: 'Mobil', hq: 'HQ' },
    role: 'Backend fejlesztő',
    lede: 'Backend rendszereket, platformokat és eszközöket építek: Val Qauym, Juniper (1,29 millió szerver), Cheterin és mások.',
  },
} satisfies Record<Locale, unknown>;

export type LabProject = {
  id: string;
  cat: LabCat;
  tag: string;
  title: string;
  big: string;
  status?: string;
  summary: string;
  kpis: [string, string][];
  flow: [string, string][];
  notes: string[];
  bars?: { cap: string; better: 'low' | 'high'; unit?: string; items: [string, number][] };
  stack: string[];
  bullets: string[];
  repo: string | null;
  repoAlt?: [string, string];
  repoNote?: string;
  extra?: [string, string];
  fig?: string;
};

export type LabData = {
  PROJECTS: LabProject[];
  CATS: [string, string][];
  EXPERIENCE: { when: string; org: string; role: string; note: string; items: string[]; open?: string }[];
  STACK: [string, string[]][];
  EMAIL: string;
  LINKS: Record<'resume' | 'github' | 'telegram' | 'discord' | 'classic' | 'work', string>;
  ABOUT: { name: string; role: string; location: string; lede: string };
  UI: (typeof labUi)[Locale];
};

const isGithub = (u?: string) => !!u && u.startsWith('https://github.com/');
const host = (u: string) => u.replace(/^https?:\/\//, '').replace(/\/$/, '');

export function getLabExtra(id: string): LabExtra {
  const x = labExtra[id];
  if (!x) throw new Error(`Missing lab data for project "${id}" in src/data/lab.ts`);
  return x;
}

export function buildLabData(locale: Locale, base = '/'): LabData {
  const T = (v: Tr) => tr(v, locale);
  const PROJECTS: LabProject[] = projects.map((p) => {
    const x = getLabExtra(p.id);
    const repo = p.github ?? (isGithub(p.href) ? p.href! : null);
    const site = p.href && !isGithub(p.href) ? p.href : undefined;
    const out: LabProject = {
      id: p.id,
      cat: x.cat,
      tag: T(x.tag),
      title: p.name,
      big: T(x.big),
      summary: p.summary[locale] ?? p.summary.en,
      kpis: (x.kpis ?? []).map(([v, l]) => [v, T(l)]),
      flow: (x.flow ?? []).map(([h, d]) => [T(h), T(d)]),
      notes: (x.notes ?? []).map(T),
      stack: p.stack ? p.stack.split(/,\s*|\s·\s/).map((s) => s.trim()).filter(Boolean) : [],
      bullets: p.bullets[locale] ?? p.bullets.en,
      repo,
    };
    if (x.status) out.status = T(x.status);
    if (x.bars) out.bars = { ...x.bars, cap: T(x.bars.cap), items: x.bars.items.map(([l, v]) => [T(l), v]) };
    if (x.fig) out.fig = x.fig;
    if (site) {
      if (repo) out.extra = [host(site), site];
      else out.repoAlt = [host(site), site];
    }
    if (x.extra) out.extra = [T(x.extra[0]), x.extra[1]];
    if (!repo && !site) out.repoNote = T(x.repoNote ?? private_);
    else if (x.repoNote && !repo) out.repoNote = T(x.repoNote);
    return out;
  });

  const edu = resumeCopy[locale].education;
  const EXPERIENCE: LabData['EXPERIENCE'] = [
    ...experienceForResume().map((p) => ({
      when: p.dates[locale] ?? p.dates.en,
      org: p.name,
      role: p.role[locale] ?? p.role.en,
      note: p.summary[locale] ?? p.summary.en,
      items: p.bullets[locale] ?? p.bullets.en,
      open: p.id,
    })),
    { when: edu.dates, org: edu.school, role: edu.detail.split(' · ')[0], note: edu.detail, items: [] },
  ];

  const STACK: [string, string[]][] = resumeCopy[locale].skillGroups.map((g) => [
    g.name.toLowerCase(),
    g.items.split(/,\s*/).map((s) => s.trim()),
  ]);

  return {
    PROJECTS,
    CATS: [['all', labUi[locale].allProjects], ...labCats.map(([k, l]) => [k, l[locale]] as [string, string])],
    EXPERIENCE,
    STACK,
    EMAIL: siteMeta.email,
    LINKS: {
      resume: withBase(base, locale, 'resume'),
      classic: withBase(base, locale, 'about'),
      work: withBase(base, locale, 'work'),
      github: siteMeta.githubHref,
      telegram: siteMeta.telegramHref,
      discord: siteMeta.discordProfile,
    },
    ABOUT: {
      name: siteMeta.name,
      role: labUi[locale].role,
      location: siteMeta.location[locale],
      lede: labUi[locale].lede,
    },
    UI: labUi[locale],
  };
}

/** Inline script that defines the globals the lab page expects. */
export function labDataScript(locale: Locale, base = '/'): string {
  const d = buildLabData(locale, base);
  // Escape '<' and the JS line separators so the JSON is safe inside a <script>.
  // Escape '<' and the JS line separators so the JSON is safe inside a <script>.
  const j = (v: unknown) =>
    JSON.stringify(v)
      .replace(/</g, '\\u003c')
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029');
  return Object.entries(d)
    .map(([k, v]) => `const ${k} = ${j(v)};`)
    .join('\n');
}
