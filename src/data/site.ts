import type { Locale } from '../i18n/ui';

export const siteMeta = {
  name: 'Adnan Huseynli',
  shortName: 'Adnan',
  aka: 'Nanda',
  githubUser: 'Nanda070',
  location: {
    en: 'Budapest, Hungary · open to EU, remote',
    ru: 'Будапешт, Венгрия · открыт к EU, remote',
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

type Copy = Record<Locale, string>;

export const homeCopy: Record<
  Locale,
  { role: string; lede: string; about: string }
> = {
  en: {
    role: 'Full Stack Developer',
    lede: 'I design and ship Discord products used by large communities. Founder and lead engineer of Juniper and Carl-bot. Based in Budapest, Hungary.',
    about:
      'Born in Azerbaijan. Based in Budapest, Hungary, reading Computer Science at ELTE, open to the EU and remote. I build bots, community platforms, and the systems around them.',
  },
  ru: {
    role: 'Full Stack Developer',
    lede: 'Проектирую и выпускаю Discord-продукты для больших сообществ. Founder и lead engineer Juniper и Carl-bot. Живу в Будапеште, Венгрия.',
    about:
      'Родился в Азербайджане. Живу в Будапеште, Венгрия, бакалавриат Computer Science в ELTE, открыт к EU и remote. Делаю ботов, платформы для сообществ и системы вокруг них.',
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
      'Full Stack Developer focused on Discord platforms at community scale. Founded Juniper (2017) and Carl-bot (2018) and led architecture plus cog implementation on both. Now building the Cheterin ecosystem, running the official VALORANT Kazakhstan Discord, and designing the code structure of the official Discord Orbs × VALORANT connection. Looking for backend / platform roles in Hungary, the EU, or remote.',
    education: {
      school: 'Eötvös Loránd University (ELTE)',
      detail: 'BSc, Computer Science · Faculty of Informatics · Budapest, Hungary',
      dates: '2026 — Present',
    },
    skillGroups: [
      { name: 'Languages', items: 'Python, Java, JavaScript / TypeScript, Go, Dart, C#, C++' },
      { name: 'Platforms', items: 'Discord, APIs, Linux, Flutter, Blender, Figma' },
      { name: 'Focus', items: 'Bot architecture, community infrastructure, product engineering' },
    ],
    languages: [
      { name: 'Azerbaijani', level: 'Native' },
      { name: 'Russian', level: 'Native' },
      { name: 'English', level: 'Native' },
      { name: 'German', level: 'C1' },
      { name: 'Turkish', level: 'B2' },
    ],
  },
  ru: {
    title: 'Резюме',
    summary:
      'Full Stack Developer, Discord-платформы для больших сообществ. Основал Juniper (2017) и Carl-bot (2018), вёл архитектуру и реализацию cogs. Сейчас экосистема Cheterin, официальный Discord VALORANT Казахстан и структура кода официального Discord Orbs × VALORANT Connection. Ищу backend / platform роли в Венгрии, EU или remote.',
    education: {
      school: 'Университет Этвеша Лоранда (ELTE)',
      detail: 'Бакалавриат, Computer Science · Faculty of Informatics · Будапешт, Венгрия',
      dates: '2026 — н. в.',
    },
    skillGroups: [
      { name: 'Языки', items: 'Python, Java, JavaScript / TypeScript, Go, Dart, C#, C++' },
      { name: 'Платформы', items: 'Discord, APIs, Linux, Flutter, Blender, Figma' },
      { name: 'Фокус', items: 'Архитектура ботов, инфраструктура сообществ, продуктовая разработка' },
    ],
    languages: [
      { name: 'Азербайджанский', level: 'родной' },
      { name: 'Русский', level: 'родной' },
      { name: 'Английский', level: 'родной' },
      { name: 'Немецкий', level: 'C1' },
      { name: 'Турецкий', level: 'B2' },
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
  bullets: Record<Locale, string[]>;
};

export const projects: Project[] = [
  {
    id: 'juniper',
    name: 'Juniper',
    href: 'https://juniper.bot/',
    featured: true,
    group: 'lead',
    dates: { en: '2017 — Present', ru: '2017 — н. в.' },
    role: { en: 'Founder & lead engineer', ru: 'Founder и lead engineer' },
    summary: {
      en: 'Multipurpose Discord bot for large communities — moderation and utilities.',
      ru: 'Многоцелевой Discord-бот для больших сообществ — модерация и утилиты.',
    },
    bullets: {
      en: [
        'Founded the product and owned technical direction from 2017.',
        'Designed the bot architecture and wrote the cogs end to end.',
      ],
      ru: [
        'Основал продукт и вёл техническое направление с 2017.',
        'Спроектировал архитектуру бота и написал cogs целиком.',
      ],
    },
  },
  {
    id: 'carl',
    name: 'Carl-bot',
    href: 'https://carl.gg/',
    featured: true,
    group: 'lead',
    dates: { en: '2018 — Present', ru: '2018 — н. в.' },
    role: { en: 'Founder & lead engineer', ru: 'Founder и lead engineer' },
    summary: {
      en: 'Discord automation and moderation at heavy community scale.',
      ru: 'Автоматизация и модерация Discord на большом масштабе сообществ.',
    },
    bullets: {
      en: [
        'Founded the product and led code design from 2018.',
        'Implemented the cog layer used for roles, logging, and automation.',
      ],
      ru: [
        'Основал продукт и вёл проектирование кода с 2018.',
        'Реализовал слой cogs: роли, логи, автоматизация.',
      ],
    },
  },
  {
    id: 'orbs',
    name: 'Riot Games × Discord (Orbs)',
    featured: true,
    group: 'lead',
    dates: { en: '2026 — Present', ru: '2026 — н. в.' },
    role: { en: 'Code structure / architecture', ru: 'Структура кода / архитектура' },
    summary: {
      en: 'Official Discord Connection: wiring Discord Orbs into VALORANT.',
      ru: 'Официальный Discord Connection: подключение Discord Orbs к VALORANT.',
    },
    bullets: {
      en: [
        'Designed the code structure of the official Connection — what it is, how it runs, why it exists.',
        'Separate from ValQM and from in-client friend linking alone: this is the Orbs × VALORANT path.',
      ],
      ru: [
        'Разработал структуру кода официального Connection — что это, как устроено, зачем.',
        'Отдельно от ValQM и от одного только friend-linking в клиенте: путь Orbs × VALORANT.',
      ],
    },
  },
  {
    id: 'valqm',
    name: 'ValQM',
    href: 'https://valqm.duckdns.org/',
    featured: true,
    group: 'lead',
    dates: { en: '2026 — Present', ru: '2026 — н. в.' },
    role: { en: 'Official VALORANT Kazakhstan', ru: 'Официальный VALORANT Казахстан' },
    summary: {
      en: 'Official VALORANT Kazakhstan Discord — community and supporting platform.',
      ru: 'Официальный Discord VALORANT Казахстан — сообщество и платформа вокруг него.',
    },
    bullets: {
      en: [
        'Operate the official regional server and the product around it.',
        'Queues, tools, and community infrastructure for VALORANT in Kazakhstan.',
      ],
      ru: [
        'Веду официальный региональный сервер и продукт вокруг него.',
        'Очереди, инструменты и инфраструктура сообщества VALORANT в Казахстане.',
      ],
    },
  },
  {
    id: 'cheterin',
    name: 'Cheterin',
    href: 'https://cheterin.online/',
    featured: true,
    group: 'lead',
    dates: { en: '2026 — Present', ru: '2026 — н. в.' },
    role: { en: 'Founder', ru: 'Founder' },
    summary: {
      en: 'Discord platform for live servers: moderation, levels, economy, community tools.',
      ru: 'Discord-платформа для живых серверов: модерация, уровни, экономика, инструменты сообщества.',
    },
    bullets: {
      en: [
        'Own product in the Cheterin ecosystem — bot, dashboard, and server tooling.',
      ],
      ru: [
        'Свой продукт экосистемы Cheterin — бот, дашборд и инструменты сервера.',
      ],
    },
  },
  {
    id: 'chetmedia',
    name: 'ChetMedia',
    href: 'https://chetmedia.com/',
    featured: true,
    group: 'lead',
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
    featured: false,
    group: 'other',
    dates: { en: '2026 — Present', ru: '2026 — н. в.' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Discord bot for VALORANT Kazakhstan — queues, tools, and local server energy.',
      ru: 'Discord-бот для VALORANT в Казахстане: очереди, утилиты, локальный вайб.',
    },
    bullets: {
      en: ['Public face and tooling around the Kazakhstan VALORANT community.'],
      ru: ['Публичная витрина и инструменты вокруг VALORANT-сообщества Казахстана.'],
    },
  },
  {
    id: 'lookup',
    name: 'Discord Lookup',
    href: 'https://cheterin.online/lookup/',
    featured: false,
    group: 'other',
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
    featured: false,
    group: 'other',
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
    featured: false,
    group: 'other',
    dates: { en: 'Ongoing', ru: 'В работе' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Custom Vencord userplugins — client-side upgrades for people who tweak Discord.',
      ru: 'Кастомные Vencord userplugins — клиентские улучшения под свой Discord.',
    },
    bullets: {
      en: ['Client plugins published under the Cheterin tooling surface.'],
      ru: ['Клиентские плагины в линейке инструментов Cheterin.'],
    },
  },
  {
    id: 'neptun',
    name: 'Neptun ELTE',
    href: 'https://github.com/Nanda070/Neptun-ELTE',
    featured: false,
    group: 'other',
    dates: { en: 'University project', ru: 'Университетский проект' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Unofficial Flutter client for ELTE Neptun — calendar, marks, mail. Not employment.',
      ru: 'Неофициальный Flutter-клиент ELTE Neptun — расписание, оценки, почта. Не работа.',
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
    id: 'vshift',
    name: 'V-Shift',
    href: 'https://github.com/Nanda070/V-Shift',
    featured: false,
    group: 'other',
    dates: { en: 'Ongoing', ru: 'В работе' },
    role: { en: 'Author', ru: 'Автор' },
    summary: {
      en: 'Riot Games account switcher for Windows — local session swap, no passwords stored.',
      ru: 'Переключатель аккаунтов Riot для Windows — локальная смена сессии, пароли не хранятся.',
    },
    bullets: {
      en: ['Go + Svelte desktop app for VALORANT / League / Riot Client sessions.'],
      ru: ['Десктоп на Go + Svelte для сессий VALORANT / League / Riot Client.'],
    },
  },
  {
    id: 'astrasmp',
    name: 'AstraSMP',
    href: 'https://github.com/Nanda070/AstraSMP',
    featured: false,
    group: 'other',
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

export function featuredProjects() {
  return projects.filter((p) => p.featured);
}

export function projectsByGroup(group: Project['group']) {
  return projects.filter((p) => p.group === group);
}

export function experienceForResume() {
  return projects.filter((p) => p.group === 'lead');
}
