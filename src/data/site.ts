import type { Locale } from '../i18n/ui';
import { huProjects, huStats, huContacts } from './hu';

export const siteMeta = {
  name: 'Adnan Huseynli',
  shortName: 'Adnan',
  aka: 'Nanda',
  githubUser: 'Nanda070',
  location: {
    en: 'Budapest, Hungary · open to EU, remote',
    ru: 'Будапешт, Венгрия · открыт к EU, remote',
    hu: 'Budapest, Magyarország · nyitott az EU-ra és a távmunkára',
  },
  email: 'adnan.huseynli1@gmail.com',
  phoneDisplay: '+36 30 406 2072',
  phoneHref: 'tel:+36304062072',
  telegram: 'nanda070',
  telegramHref: 'https://t.me/nanda070',
  githubHref: 'https://github.com/Nanda070',
  discord: 'nandak070',
  discordId: '1219803151180370021',
  discordProfile: 'https://discord.com/users/1219803151180370021',
  cardHref: 'https://nanda.is-a.dev/',
} as const;

/** en and ru are written inline; hu is merged in from `hu.ts` at the bottom of this file. */
type Copy = { en: string; ru: string; hu?: string };

export const homeCopy: Record<
  Locale,
  { role: string; lede: string; about: string }
> = {
  en: {
    role: 'Backend Developer — Discord & community platforms',
    lede: 'I design and ship Discord products used by large communities. Former core developer of Juniper (2019–2025), a Discord bot that served 1.29M servers; founder of Cheterin. Based in Budapest, Hungary.',
    about:
      'Born in Azerbaijan. Based in Budapest, Hungary, reading Computer Science at ELTE, open to the EU and remote. I build bots, community platforms, and the systems around them.',
  },
  ru: {
    role: 'Backend Developer — Discord и платформы сообществ',
    lede: 'Проектирую и выпускаю Discord-продукты для больших сообществ. Бывший core-разработчик Juniper (2019–2025), Discord-бота, обслужившего 1,29 млн серверов; основатель Cheterin. Живу в Будапеште, Венгрия.',
    about:
      'Родился в Азербайджане. Живу в Будапеште, Венгрия, бакалавриат Computer Science в ELTE, открыт к EU и remote. Делаю ботов, платформы для сообществ и системы вокруг них.',
  },
  hu: {
    role: 'Backend fejlesztő — Discord- és közösségi platformok',
    lede: 'Nagy közösségek által használt Discord-termékeket tervezek és építek. A Juniper egykori core fejlesztője (2019–2025), amelyet 1,29 millió szerver használt; a Cheterin alapítója. Budapesten élek.',
    about:
      'Azerbajdzsánban születtem. Budapesten élek, az ELTE-n tanulok informatikát, nyitott vagyok az EU-s és a távmunka lehetőségekre. Botokat, közösségi platformokat és a körülöttük lévő rendszereket építem.',
  },
};

export const resumeCopy: Record<
  Locale,
  {
    title: string;
    summary: string;
    education: { school: string; detail: string; dates: string };
    skillGroups: { name: string; items: string }[];
    languages: { name: string; level: string }[];
  }
> = {
  en: {
    title: 'Resume',
    summary:
      'Backend developer focused on Discord platforms at community scale. Core developer of Juniper 2019–2025 (1.29M servers and 4.9M users served to date); cut p95 query time from 1.4 s to 18 ms and peak database CPU from 85% to 15%. Founder of Cheterin, an open-source multi-server Discord bot with a web dashboard, and partner developer on Discord Quests for VALORANT. Looking for part-time backend / platform roles in Hungary, the EU, or remote (up to 30 hours per week) alongside full-time CS studies at ELTE.',
    education: {
      school: 'Eötvös Loránd University (ELTE)',
      detail: 'BSc, Computer Science · Faculty of Informatics · Budapest, Hungary',
      dates: '2026 — 2029 (expected)',
    },
    skillGroups: [
      { name: 'Primary', items: 'Python, TypeScript / Node.js, Go, Java, SQL (PostgreSQL)' },
      { name: 'Familiar', items: 'Dart (Flutter), C#, C++' },
      { name: 'Platforms', items: 'Discord API, Linux, nginx, systemd, GitHub Actions, React' },
      { name: 'Focus', items: 'Database performance, bot architecture, community infrastructure' },
    ],
    languages: [
      { name: 'Azerbaijani', level: 'Native' },
      { name: 'Russian', level: 'Native' },
      { name: 'German', level: 'C1' },
      { name: 'English', level: 'B2 (IELTS)' },
      { name: 'Turkish', level: 'B2' },
    ],
  },
  ru: {
    title: 'Резюме',
    summary:
      'Backend-разработчик, Discord-платформы для больших сообществ. Core-разработчик Juniper 2019–2025 (за всё время 1,29 млн серверов и 4,9 млн пользователей); сократил p95 времени запроса с 1,4 с до 18 мс и пиковую нагрузку на CPU базы с 85% до 15%. Основатель Cheterin, open-source мульти-серверного Discord-бота с веб-дашбордом, и партнёр-разработчик Discord Quests для VALORANT. Ищу part-time backend / platform роли в Венгрии, EU или remote (до 30 часов в неделю), параллельно с очным обучением на CS в ELTE.',
    education: {
      school: 'Университет Этвеша Лоранда (ELTE)',
      detail: 'Бакалавриат, Computer Science · Faculty of Informatics · Будапешт, Венгрия',
      dates: '2026 — 2029 (ожидается)',
    },
    skillGroups: [
      { name: 'Основные', items: 'Python, TypeScript / Node.js, Go, Java, SQL (PostgreSQL)' },
      { name: 'Знаком', items: 'Dart (Flutter), C#, C++' },
      { name: 'Платформы', items: 'Discord API, Linux, nginx, systemd, GitHub Actions, React' },
      { name: 'Фокус', items: 'Производительность БД, архитектура ботов, инфраструктура сообществ' },
    ],
    languages: [
      { name: 'Азербайджанский', level: 'родной' },
      { name: 'Русский', level: 'родной' },
      { name: 'Немецкий', level: 'C1' },
      { name: 'Английский', level: 'B2 (IELTS)' },
      { name: 'Турецкий', level: 'B2' },
    ],
  },
  hu: {
    title: 'Önéletrajz',
    summary:
      'Backend fejlesztő, aki Discord-platformokra specializálódott közösségi léptékben. A Juniper core fejlesztője 2019–2025 között (eddig 1,29 millió szervert és 4,9 millió felhasználót szolgált ki); a p95 lekérdezési időt 1,4 s-ról 18 ms-ra, az adatbázis csúcs CPU-terhelését 85%-ról 15%-ra csökkentettem. A Cheterin alapítója, egy nyílt forráskódú, több szerveres Discord-bot webes vezérlőpulttal, valamint partnerfejlesztő a VALORANT Discord Quests projektjében. Részmunkaidős backend / platform szerepeket keresek Magyarországon, az EU-ban vagy távmunkában (heti 30 óráig), a nappali tagozatos ELTE-s informatikai tanulmányaim mellett.',
    education: {
      school: 'Eötvös Loránd Tudományegyetem (ELTE)',
      detail: 'BSc, Informatika · Informatikai Kar · Budapest, Magyarország',
      dates: '2026 — 2029 (várható)',
    },
    skillGroups: [
      { name: 'Elsődleges', items: 'Python, TypeScript / Node.js, Go, Java, SQL (PostgreSQL)' },
      { name: 'Ismerős', items: 'Dart (Flutter), C#, C++' },
      { name: 'Platformok', items: 'Discord API, Linux, nginx, systemd, GitHub Actions, React' },
      { name: 'Fókusz', items: 'Adatbázis-teljesítmény, botarchitektúra, közösségi infrastruktúra' },
    ],
    languages: [
      { name: 'Azerbajdzsáni', level: 'Anyanyelvi' },
      { name: 'Orosz', level: 'Anyanyelvi' },
      { name: 'Német', level: 'C1' },
      { name: 'Angol', level: 'B2 (IELTS)' },
      { name: 'Török', level: 'B2' },
    ],
  },
};

export type Project = {
  id: string;
  name: string;
  href?: string;
  featured: boolean;
  group: 'lead' | 'other';
  dates: Copy;
  role: Copy;
  summary: Copy;
  bullets: { en: string[]; ru: string[]; hu?: string[] };
  /** Public repository, when it differs from `href` (e.g. `href` is the live site). */
  github?: string;
  stack?: string;
  /** Keep on the portfolio pages but leave off the printed resume. */
  offResume?: boolean;
};

export type ProjectLink = { kind: 'site' | 'github'; url: string; label: string; text: string };

export function projectLinks(p: Project): ProjectLink[] {
  const bare = (u: string) => u.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const isGithub = (u: string) => u.startsWith('https://github.com/');
  const links: ProjectLink[] = [];
  if (p.href) {
    const kind = isGithub(p.href) ? 'github' : 'site';
    links.push({ kind, url: p.href, label: kind === 'github' ? 'GitHub' : bare(p.href), text: bare(p.href) });
  }
  if (p.github && p.github !== p.href) {
    links.push({ kind: 'github', url: p.github, label: 'GitHub', text: bare(p.github) });
  }
  return links;
}

export type Stat = { value: number; suffix?: string; label: Copy };

/** Headline numbers shown on the home page. */
export const stats: Stat[] = [
  {
    value: 1291495,
    label: { en: 'Servers served by Juniper to date', ru: 'Серверов обслужил Juniper за всё время' },
  },
  {
    value: 198459460,
    label: { en: 'Commands processed by Juniper to date', ru: 'Команд обработал Juniper за всё время' },
  },
  {
    value: 518,
    label: { en: 'Servers running Cheterin', ru: 'Серверов с Cheterin' },
  },
  {
    value: 270000,
    label: { en: 'ChetMedia views per day (peak 370k)', ru: 'Просмотров ChetMedia в день (пик 370 тыс.)' },
  },
];

export const marqueeStack = [
  'Python',
  'TypeScript',
  'Node.js',
  'Go',
  'Java',
  'PostgreSQL',
  'discord.py',
  'discord.js',
  'Next.js',
  'React',
  'Prisma',
  'Docker',
  'nginx',
  'systemd',
  'GitHub Actions',
  'Flutter',
];

export const projects: Project[] = [
  {
    id: 'juniper',
    name: 'Juniper',
    href: 'https://juniper.bot/',
    stack: 'Python, discord.py, PostgreSQL · GalaxyGate',
    featured: true,
    group: 'lead',
    dates: { en: '2019 — 2025', ru: '2019 — 2025' },
    role: {
      en: 'Core developer — backend, frontend, database',
      ru: 'Core-разработчик — backend, frontend, база данных',
    },
    summary: {
      en: 'Multipurpose Discord bot for large communities — moderation and utilities.',
      ru: 'Многоцелевой Discord-бот для больших сообществ — модерация и утилиты.',
    },
    bullets: {
      en: [
        'Production bot at scale; to date: 1,291,495 servers, 4,928,753 users, 198M+ commands processed.',
        'Cut p95 query latency from 1.4 s to 18 ms (~77x) and peak database CPU from 85% to 15%: found a Seq Scan on deep history pages and season leaderboards via EXPLAIN ANALYZE, moved to keyset pagination (WHERE id < last_seen_id) and added a covering index on (server_id, created_at DESC) INCLUDE (user_id, points).',
      ],
      ru: [
        'Боевой бот на большом масштабе; за всё время: 1 291 495 серверов, 4 928 753 пользователей, 198 млн+ обработанных команд.',
        'Сократил p95 времени запроса с 1,4 с до 18 мс (в ~77 раз) и пиковую нагрузку на CPU базы с 85% до 15%: через EXPLAIN ANALYZE нашёл Seq Scan на глубокой истории и топе игроков за сезон, перешёл на keyset-пагинацию (WHERE id < last_seen_id) и добавил покрывающий индекс (server_id, created_at DESC) INCLUDE (user_id, points).',
      ],
    },
  },
  {
    id: 'orbs',
    name: 'Discord Quests × VALORANT (Orbs)',
    featured: true,
    group: 'lead',
    dates: { en: '2026 — Present', ru: '2026 — н. в.' },
    role: { en: 'Partner developer — code structure', ru: 'Партнёр-разработчик — структура кода' },
    summary: {
      en: 'Discord Quests for VALORANT, built in partnership: connecting Discord Orbs to VALORANT.',
      ru: 'Discord Quests для VALORANT в рамках партнёрства: подключение Discord Orbs к VALORANT.',
    },
    bullets: {
      en: [
        'Partnership work on Discord Quests on behalf of VALORANT; designed the code structure of the Orbs connection.',
      ],
      ru: [
        'Партнёрская работа над Discord Quests от лица VALORANT; спроектировал структуру кода подключения Orbs.',
      ],
    },
  },
  {
    id: 'cheterin',
    name: 'Cheterin',
    href: 'https://cheterin.online/',
    github: 'https://github.com/Nanda070/Cheterin-Bot',
    featured: true,
    group: 'lead',
    dates: { en: '2026 — Present', ru: '2026 — н. в.' },
    stack: 'Python, aiohttp, TypeScript, React (Vite), nginx, systemd, GitHub Actions',
    role: { en: 'Founder & lead developer', ru: 'Founder и lead developer' },
    summary: {
      en: 'Public multi-server Discord bot with a web dashboard, plus Lookup and ChetMedia in the same ecosystem.',
      ru: 'Публичный мульти-серверный Discord-бот с веб-дашбордом, плюс Lookup и ChetMedia в одной экосистеме.',
    },
    bullets: {
      en: [
        'Own system, built and run by me since its founding; authorship is listed in the credits on the sites. Public multi-guild Discord bot with a web dashboard, now on 518 servers: admins enable modules per server in the browser, members use slash commands, each guild is isolated. Open source (Apache-2.0), 358 commits: github.com/Nanda070/Cheterin-Bot.',
        'Modules: moderation (logs, antispam, automod, verification, antiraid), levels and XP, economy and shop, giveaways and polls, VALORANT tools (Premier applications, role panels, Customs lobbies). EN/RU interface.',
        'Cheterin Lookup: separate public service with its own SPA and API running as an independent process, for resolving Discord IDs and profiles; also hosts Vencord userplugins.',
        'ChetMedia: own anime streaming product (catalog and watch), about 270,000 views per day, peak 370,000.',
        'CI with pytest and frontend builds on GitHub Actions; deployed with systemd units behind nginx.',
      ],
      ru: [
        'Собственная система, которую я строю и веду с момента основания; авторство указано в credits на сайтах. Публичный мульти-серверный Discord-бот с веб-дашбордом, сейчас на 518 серверах: админ включает модули для сервера в браузере, участники пользуются slash-командами, каждый сервер изолирован. Open source (Apache-2.0), 358 коммитов: github.com/Nanda070/Cheterin-Bot.',
        'Модули: модерация (логи, антиспам, automod, верификация, antiraid), уровни и XP, экономика и магазин, розыгрыши и опросы, VALORANT-инструменты (заявки Premier, панели ролей, Customs-лобби). Интерфейс EN/RU.',
        'Cheterin Lookup: отдельный публичный сервис со своим SPA и API в независимом процессе, резолвит Discord ID и профили; там же Vencord userplugins.',
        'ChetMedia: собственный аниме-стриминг (каталог и просмотр), около 270 000 просмотров в день, пик 370 000.',
        'CI на GitHub Actions: pytest и сборка фронтенда; деплой через systemd за nginx.',
      ],
    },
  },
  {
    id: 'chetmedia',
    name: 'ChetMedia',
    href: 'https://chetmedia.com/',
    github: 'https://github.com/Nanda070/chetmedia.com',
    featured: true,
    group: 'other',
    offResume: true,
    dates: { en: '2026 — Present', ru: '2026 — н. в.' },
    role: { en: 'Founder', ru: 'Founder' },
    summary: {
      en: 'Anime streaming in the Cheterin stack — catalog, watch, keep it moving.',
      ru: 'Аниме-стриминг экосистемы Cheterin — каталог, просмотр, живой сервис.',
    },
    bullets: {
      en: ['Built and operate the streaming product for the Cheterin audience.'],
      ru: ['Собрал и веду стриминговый продукт для аудитории Cheterin.'],
    },
  },
  {
    id: 'valqauym',
    name: 'Valqauym',
    href: 'https://valqauym.kz/',
    featured: true,
    group: 'lead',
    dates: { en: '2026 — Present', ru: '2026 — н. в.' },
    role: { en: 'Creator, now development team lead', ru: 'Создатель, сейчас руководитель команды разработки' },
    summary: {
      en: 'Discord bot and site for the VALORANT Kazakhstan community: queues and tools.',
      ru: 'Discord-бот и сайт для VALORANT-сообщества Казахстана: очереди и инструменты.',
    },
    bullets: {
      en: [
        'Created the project; later handed ownership to another person, who became its public face. I still lead the development team. Authorship is listed in the credits on valqauym.kz.',
        'Queues and tooling for the Kazakhstan VALORANT community.',
      ],
      ru: [
        'Создал проект; позже передал владение другому человеку, который стал его публичным лицом. По сей день руковожу командой разработки. Авторство указано в credits на valqauym.kz.',
        'Очереди и инструменты для VALORANT-сообщества Казахстана.',
      ],
    },
  },
  {
    id: 'lookup',
    name: 'Discord Lookup',
    href: 'https://cheterin.online/lookup/',
    github: 'https://github.com/Nanda070/cheterin.online',
    featured: false,
    group: 'other',
    offResume: true,
    dates: { en: '2026 — Present', ru: '2026 — н. в.' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Lookup service for Discord entities — IDs, profiles, context on demand.',
      ru: 'Поиск Discord-сущностей — ID, профили и контекст по запросу.',
    },
    bullets: {
      en: ['Part of the Cheterin stack for resolving Discord IDs and profiles.'],
      ru: ['Часть стека Cheterin для резолва Discord ID и профилей.'],
    },
  },
  {
    id: 'card-site',
    name: 'Digital Business Card',
    href: 'https://nanda.is-a.dev/',
    github: 'https://github.com/Nanda070/nanda.is-a.dev',
    featured: false,
    group: 'other',
    offResume: true,
    dates: { en: 'Ongoing', ru: 'В работе' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Personal digital card — compact public face for links and first contact.',
      ru: 'Персональная цифровая визитка — компактное лицо со ссылками и контактом.',
    },
    bullets: {
      en: ['Lightweight public card at nanda.is-a.dev.'],
      ru: ['Лёгкая публичная визитка на nanda.is-a.dev.'],
    },
  },
  {
    id: 'vencord',
    name: 'Vencord Userplugins',
    href: 'https://cheterin.online/lookup/plugins',
    github: 'https://github.com/Nanda070/SoundboardToVoice',
    featured: false,
    group: 'other',
    offResume: true,
    dates: { en: 'Ongoing', ru: 'В работе' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Custom Vencord userplugins — client-side upgrades for people who tweak Discord.',
      ru: 'Кастомные Vencord userplugins — клиентские улучшения под свой Discord.',
    },
    bullets: {
      en: [
        'Plugins such as SoundboardToVoice, vc-followUser, vc-voiceChatUtilities, vc-betterActivities and vencord-antirickroll, published as separate public repositories.',
      ],
      ru: [
        'Плагины SoundboardToVoice, vc-followUser, vc-voiceChatUtilities, vc-betterActivities, vencord-antirickroll и другие, в отдельных публичных репозиториях.',
      ],
    },
  },
  {
    id: 'neptun',
    name: 'Neptun ELTE',
    href: 'https://github.com/Nanda070/Neptun-ELTE',
    stack: 'Flutter, Dart',
    featured: false,
    group: 'other',
    dates: { en: 'University project', ru: 'Университетский проект' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Unofficial Flutter client for ELTE Neptun — calendar, marks, mail.',
      ru: 'Неофициальный Flutter-клиент ELTE Neptun — расписание, оценки, почта.',
    },
    bullets: {
      en: ['University project: a mobile client around ELTE student systems.'],
      ru: ['Учебный проект: мобильный клиент вокруг студенческих систем ELTE.'],
    },
  },
  {
    id: 'lumen',
    name: 'Lumen',
    href: 'https://github.com/Nanda070/Lumen',
    stack: 'Flutter, Dart',
    featured: false,
    group: 'other',
    dates: { en: 'Ongoing', ru: 'В работе' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Local-first Flutter life OS — calendar, tasks, habits, finance. Data stays on device.',
      ru: 'Локальный Flutter life OS — календарь, задачи, привычки, финансы. Данные на устройстве.',
    },
    bullets: {
      en: ['Personal product: iOS-first, local data, EN/RU.'],
      ru: ['Личный продукт: iOS-first, локальные данные, EN/RU.'],
    },
  },
  {
    id: 'rp-state-mirror',
    name: 'RP-State-Mirror',
    href: 'https://github.com/Nanda070/RP-State-Mirror',
    stack: 'TypeScript, discord.js, Next.js, Prisma, PostgreSQL, Docker Compose',
    featured: true,
    group: 'other',
    dates: { en: 'Ongoing', ru: 'В работе' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Discord bot and web dashboard for state factions on the Mirror server of GTA5RP, in use by government structures there. Documents, wanted lists, fines, vehicle and uniform registration, personnel audit, forms and appeals. 145 commits.',
      ru: 'Discord-бот и веб-дашборд для государственных фракций сервера Mirror проекта GTA5RP, используется в гос. структурах. Документы, розыск, штрафы, регистрация транспорта и формы, аудит персонала, обращения. 145 коммитов.',
    },
    bullets: {
      en: ['Used by state structures on the GTA5RP Mirror server.'],
      ru: ['Используется гос. структурами на сервере Mirror проекта GTA5RP.'],
    },
  },
  {
    id: 'sofra',
    name: 'Sofra',
    href: 'https://github.com/Nanda070/Sofra',
    stack: 'Next.js, React, TypeScript, Prisma, PostgreSQL, Tailwind, Auth.js',
    featured: false,
    group: 'other',
    dates: { en: 'In progress', ru: 'В разработке' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Cloud POS and back-office platform for restaurants and cafés in Azerbaijan: cashier terminal, waiter app, kitchen display, inventory, QR table ordering, multi-tenant, Open API. UI in AZ, RU, TR and EN.',
      ru: 'Облачная POS и back-office платформа для ресторанов и кафе в Азербайджане: касса, приложение официанта, кухонный экран, склад, заказ по QR, multi-tenant, Open API. Интерфейс на AZ, RU, TR и EN.',
    },
    bullets: {
      en: ['Work in progress; 33 commits.'],
      ru: ['В разработке; 33 коммита.'],
    },
  },
  {
    id: 'gta5rp-wiki-api',
    name: 'GTA5RP-Wiki-API',
    href: 'https://github.com/Nanda070/GTA5RP-Wiki-API',
    stack: 'TypeScript, Node.js, GitHub Actions',
    featured: false,
    group: 'other',
    dates: { en: '2026', ru: '2026' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Unofficial TypeScript client for the GTA5RP wiki: live map and property snapshots. MIT, documented in EN and RU.',
      ru: 'Неофициальный TypeScript-клиент для вики GTA5RP: живая карта и снимки недвижимости. MIT, документация на EN и RU.',
    },
    bullets: {
      en: ['Typed client with docs, changelog and CI.'],
      ru: ['Типизированный клиент с документацией, changelog и CI.'],
    },
  },
  {
    id: 'astra',
    name: 'ASTRA plugin suite',
    href: 'https://github.com/Nanda070/AstraSMP',
    featured: false,
    group: 'other',
    dates: { en: 'Ongoing', ru: 'В работе' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Four Minecraft server plugins (SMP, build, operator and IP tools) for live servers.',
      ru: 'Четыре плагина для Minecraft-серверов (SMP, строительство, оператор, IP-утилиты) для живых серверов.',
    },
    bullets: {
      en: ['AstraSMP, AstraBuild, AstraOP and AstraIP.'],
      ru: ['AstraSMP, AstraBuild, AstraOP и AstraIP.'],
    },
  },
  {
    id: 'astrasmp',
    name: 'AstraSMP',
    href: 'https://github.com/Nanda070/AstraSMP',
    featured: false,
    group: 'other',
    offResume: true,
    dates: { en: 'Ongoing', ru: 'В работе' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'ASTRA Minecraft plugin — survival / SMP systems for live servers.',
      ru: 'Плагин ASTRA — системы survival / SMP для живых серверов.',
    },
    bullets: {
      en: ['Server-side systems for survival and SMP gameplay.'],
      ru: ['Серверные системы для survival и SMP.'],
    },
  },
  {
    id: 'astrabuild',
    name: 'AstraBuild',
    href: 'https://github.com/Nanda070/AstraBuild',
    featured: false,
    group: 'other',
    offResume: true,
    dates: { en: 'Ongoing', ru: 'В работе' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'ASTRA build toolkit — creative and construction helpers for Minecraft worlds.',
      ru: 'Инструменты строительства ASTRA — креатив и застройка Minecraft.',
    },
    bullets: {
      en: ['Build and creative helpers in the ASTRA plugin family.'],
      ru: ['Инструменты строительства в семействе плагинов ASTRA.'],
    },
  },
  {
    id: 'astraop',
    name: 'AstraOP',
    href: 'https://github.com/Nanda070/AstraOP',
    featured: false,
    group: 'other',
    offResume: true,
    dates: { en: 'Ongoing', ru: 'В работе' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Operator ASTRA plugin — admin power tools for Minecraft servers.',
      ru: 'Админ-плагин ASTRA — операторские инструменты для Minecraft-серверов.',
    },
    bullets: {
      en: ['Operator utilities without a fake full admin panel.'],
      ru: ['Операторские утилиты без фейковой полной админ-панели.'],
    },
  },
  {
    id: 'astraip',
    name: 'AstraIP',
    href: 'https://github.com/Nanda070/AstraIP',
    featured: false,
    group: 'other',
    offResume: true,
    dates: { en: 'Ongoing', ru: 'В работе' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'IP / network utilities in the ASTRA family for Minecraft identity and access.',
      ru: 'IP / сетевые утилиты ASTRA для доступа и идентичности Minecraft.',
    },
    bullets: {
      en: ['Network and identity helpers for Minecraft servers.'],
      ru: ['Сетевые утилиты и идентичность для Minecraft-серверов.'],
    },
  },
  {
    id: 'idus',
    name: 'IDUS',
    href: 'https://github.com/Nanda070/IDUS',
    featured: false,
    group: 'other',
    offResume: true,
    dates: { en: 'Ongoing', ru: 'В работе' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Home AI assistant experiment — voice, automation, local intelligence.',
      ru: 'Домашний ИИ-ассистент — голос, автоматизация, локальный интеллект.',
    },
    bullets: {
      en: ['Self-hosted AI home assistant experiments.'],
      ru: ['Эксперименты с self-hosted домашним ИИ-ассистентом.'],
    },
  },
  {
    id: 'pepegago',
    name: 'PepegaGO',
    href: 'https://github.com/Nanda070/PepegaGo',
    featured: false,
    group: 'other',
    offResume: true,
    dates: { en: 'Ongoing', ru: 'В работе' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Mobile location-based game — memes as first-class game fuel.',
      ru: 'Мобильная игра PepegaGO — мемы как полноценное игровое топливо.',
    },
    bullets: {
      en: ['Location-based mobile game inspired by Pokémon GO energy.'],
      ru: ['Мобильная location-based игра в духе Pokémon GO.'],
    },
  },
  {
    id: 'arcana',
    name: 'Arcana',
    href: 'https://github.com/Nanda070/Arcana',
    featured: false,
    group: 'other',
    offResume: true,
    dates: { en: 'Ongoing', ru: 'В работе' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Thaumcraft-inspired mod fork — older magic systems on newer Minecraft.',
      ru: 'Форк в духе Thaumcraft — старая магия на новых версиях Minecraft.',
    },
    bullets: {
      en: ['Minecraft magic mod work bringing older systems forward.'],
      ru: ['Работа над Minecraft-модом магии на новых версиях.'],
    },
  },
  {
    id: 'odysseus',
    name: 'Odysseus',
    href: 'https://github.com/Nanda070/prometheus',
    stack: 'Python, Node.js, Docker, SearXNG',
    featured: false,
    group: 'other',
    offResume: true,
    dates: { en: '2026', ru: '2026' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Self-hosted AI workspace: chat and agents with tools and MCP, deep research, documents, email, notes, calendar. AGPL-3.0.',
      ru: 'Self-hosted AI-воркспейс: чат и агенты с инструментами и MCP, deep research, документы, почта, заметки, календарь. AGPL-3.0.',
    },
    bullets: {
      en: ['Runs locally through Docker Compose.'],
      ru: ['Запускается локально через Docker Compose.'],
    },
  },
  {
    id: 'reverse-proxy',
    name: 'Zero-Allocation Reverse Proxy',
    href: 'https://github.com/Nanda070/Zero-Allocation-Reverse-Proxy',
    stack: 'C#, .NET 8, System.IO.Pipelines',
    featured: false,
    group: 'other',
    offResume: true,
    dates: { en: 'Early stage', ru: 'Ранняя стадия' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Reverse proxy on .NET 8 built around System.IO.Pipelines, aiming at zero heap allocations on the request path.',
      ru: 'Reverse proxy на .NET 8 вокруг System.IO.Pipelines, цель: ноль аллокаций в куче на пути запроса.',
    },
    bullets: {
      en: ['Benchmarks and load balancing are still on the roadmap.'],
      ru: ['Бенчмарки и балансировка пока в планах.'],
    },
  },
  {
    id: 'tg-ds-bridge',
    name: 'TG-DS-Bridge',
    href: 'https://github.com/Nanda070/TG-DS-Bridge',
    stack: 'Python, discord.py, aiogram, SQLAlchemy (async)',
    featured: false,
    group: 'other',
    offResume: true,
    dates: { en: '2026', ru: '2026' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Two-way Telegram ↔ Discord sync: messages, media, edits and deletes, with message IDs persisted across restarts.',
      ru: 'Двусторонняя синхронизация Telegram ↔ Discord: сообщения, медиа, правки и удаления, ID сообщений хранятся между перезапусками.',
    },
    bullets: {
      en: ['Dynamic webhooks post Telegram messages under the sender’s name and avatar.'],
      ru: ['Динамические webhooks показывают сообщения из Telegram с именем и аватаром отправителя.'],
    },
  },
  {
    id: 'casino-plugin',
    name: 'Casino-Plugin',
    href: 'https://github.com/Nanda070/Casino-Plugin',
    stack: 'Java',
    featured: false,
    group: 'other',
    offResume: true,
    dates: { en: '2026', ru: '2026' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Casino plugin for Minecraft 1.21.11 servers.',
      ru: 'Казино-плагин для серверов Minecraft 1.21.11.',
    },
    bullets: {
      en: ['Server-side casino games for survival servers.'],
      ru: ['Серверные казино-игры для survival-серверов.'],
    },
  },
];

export type ContactItem = {
  id: string;
  label: Copy;
  value: string;
  href?: string;
  copyValue?: string;
};

export const contacts: ContactItem[] = [
  {
    id: 'email',
    label: { en: 'Email', ru: 'Почта' },
    value: siteMeta.email,
    href: `mailto:${siteMeta.email}`,
  },
  {
    id: 'phone',
    label: { en: 'Phone', ru: 'Телефон' },
    value: siteMeta.phoneDisplay,
    href: siteMeta.phoneHref,
  },
  {
    id: 'telegram',
    label: { en: 'Telegram', ru: 'Telegram' },
    value: `@${siteMeta.telegram}`,
    href: siteMeta.telegramHref,
  },
  {
    id: 'github',
    label: { en: 'GitHub', ru: 'GitHub' },
    value: siteMeta.githubUser,
    href: siteMeta.githubHref,
  },
  {
    id: 'discord',
    label: { en: 'Discord', ru: 'Discord' },
    value: siteMeta.discord,
    href: siteMeta.discordProfile,
    copyValue: siteMeta.discord,
  },
  {
    id: 'card',
    label: { en: 'Card', ru: 'Визитка' },
    value: 'nanda.is-a.dev',
    href: siteMeta.cardHref,
  },
];

// Merge the Hungarian copy in; a missing entry should fail the build, not ship English on /hu.
for (const p of projects) {
  const hu = huProjects[p.id];
  if (!hu) throw new Error(`Missing Hungarian copy for project "${p.id}" in src/data/hu.ts`);
  p.dates.hu = hu.dates;
  p.role.hu = hu.role;
  p.summary.hu = hu.summary;
  p.bullets.hu = hu.bullets;
}

stats.forEach((stat, i) => {
  const label = huStats[i];
  if (!label) throw new Error(`Missing Hungarian stat label #${i} in src/data/hu.ts`);
  stat.label.hu = label;
});

for (const c of contacts) {
  const label = huContacts[c.id];
  if (!label) throw new Error(`Missing Hungarian contact label "${c.id}" in src/data/hu.ts`);
  c.label.hu = label;
}

export function featuredProjects() {
  return projects.filter((p) => p.featured);
}

export function projectsByGroup(group: Project['group']) {
  return projects.filter((p) => p.group === group);
}

export function resumeProjects() {
  return projects.filter((p) => p.group === 'other' && !p.offResume);
}

export function experienceForResume() {
  return projects.filter((p) => p.group === 'lead');
}
