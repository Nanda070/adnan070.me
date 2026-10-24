export type Locale = 'en' | 'hu' | 'ru';

export const locales: Locale[] = ['en', 'hu', 'ru'];
export const defaultLocale: Locale = 'en';

/** Locale tags for Intl formatting and Open Graph. */
export const intlLocale: Record<Locale, string> = { en: 'en-GB', hu: 'hu-HU', ru: 'ru-RU' };
export const ogLocale: Record<Locale, string> = { en: 'en_US', hu: 'hu_HU', ru: 'ru_RU' };

export const ui = {
  en: {
    navAria: 'Main',
    navHome: 'Home',
    navWork: 'Work',
    navResume: 'Resume',
    navContact: 'Contact',
    langSwitchAria: 'Language',
    openResume: 'Resume',
    viewWork: 'Work',
    getInTouch: 'Contact',
    printResume: 'Print / PDF',
    open: 'Open',
    copy: 'Copy',
    copied: 'Copied',
    workEyebrow: 'Selected work',
    workLead: 'Full product and project history — lead roles first, then everything else.',
    workGroupLead: 'Products & roles',
    workGroupOther: 'Other projects',
    resumeEyebrow: 'Resume',
    resumeSummary: 'Summary',
    resumeExperience: 'Experience',
    resumeProjects: 'Projects',
    resumeEducation: 'Education',
    resumeSkills: 'Skills',
    resumeLanguages: 'Languages',
    resumeContact: 'Contact',
    contactEyebrow: 'Contact',
    contactLead: 'Direct lines. The card at nanda.is-a.dev is the compact public face.',
    cardLabel: 'Card',
    notFoundKicker: '404',
    notFoundTitle: 'Page not found',
    notFoundLead: 'This URL does not exist.',
    backHome: 'Back home',
    present: 'Present',
    statsEyebrow: 'By the numbers',
    stackEyebrow: 'Stack',
    scrollHint: 'Scroll',
    statusPill: 'Open to part-time backend roles, up to 30 h/week',
    traceTitle: 'Query time, p95',
    traceSource: 'Juniper, PostgreSQL',
    traceBefore: 'Before',
    traceAfter: 'After',
    traceMarker: 'Seq Scan replaced by keyset pagination and a covering index',
    traceFoot: 'About 77× faster. Peak database CPU 85% → 15%.',
    clockLabel: 'Budapest',
  },
  ru: {
    navAria: 'Навигация',
    navHome: 'Главная',
    navWork: 'Работы',
    navResume: 'Резюме',
    navContact: 'Контакт',
    langSwitchAria: 'Язык',
    openResume: 'Резюме',
    viewWork: 'Работы',
    getInTouch: 'Контакт',
    printResume: 'Печать / PDF',
    open: 'Открыть',
    copy: 'Копировать',
    copied: 'Скопировано',
    workEyebrow: 'Работы',
    workLead: 'Полная история продуктов и проектов — сначала ключевые роли, затем всё остальное.',
    workGroupLead: 'Продукты и роли',
    workGroupOther: 'Другие проекты',
    resumeEyebrow: 'Резюме',
    resumeSummary: 'Профиль',
    resumeExperience: 'Опыт',
    resumeProjects: 'Проекты',
    resumeEducation: 'Образование',
    resumeSkills: 'Навыки',
    resumeLanguages: 'Языки',
    resumeContact: 'Контакт',
    contactEyebrow: 'Контакт',
    contactLead: 'Прямые контакты. Компактная визитка — nanda.is-a.dev.',
    cardLabel: 'Визитка',
    notFoundKicker: '404',
    notFoundTitle: 'Страницы нет',
    notFoundLead: 'Такого адреса нет.',
    backHome: 'На главную',
    present: 'н. в.',
    statsEyebrow: 'В цифрах',
    stackEyebrow: 'Стек',
    scrollHint: 'Вниз',
    statusPill: 'Открыт к part-time backend ролям, до 30 ч/нед',
    traceTitle: 'Время запроса, p95',
    traceSource: 'Juniper, PostgreSQL',
    traceBefore: 'До',
    traceAfter: 'После',
    traceMarker: 'Seq Scan заменён на keyset-пагинацию и покрывающий индекс',
    traceFoot: 'Примерно в 77 раз быстрее. Пиковый CPU базы 85% → 15%.',
    clockLabel: 'Будапешт',
  },
  hu: {
    navAria: 'Fő navigáció',
    navHome: 'Kezdőlap',
    navWork: 'Munkák',
    navResume: 'Önéletrajz',
    navContact: 'Kapcsolat',
    langSwitchAria: 'Nyelv',
    openResume: 'Önéletrajz',
    viewWork: 'Munkák',
    getInTouch: 'Kapcsolat',
    printResume: 'Nyomtatás / PDF',
    open: 'Megnyitás',
    copy: 'Másolás',
    copied: 'Másolva',
    workEyebrow: 'Válogatott munkák',
    workLead: 'A termékek és projektek teljes története — előbb a kulcsszerepek, utána minden más.',
    workGroupLead: 'Termékek és szerepek',
    workGroupOther: 'További projektek',
    resumeEyebrow: 'Önéletrajz',
    resumeSummary: 'Összefoglaló',
    resumeExperience: 'Tapasztalat',
    resumeProjects: 'Projektek',
    resumeEducation: 'Tanulmányok',
    resumeSkills: 'Készségek',
    resumeLanguages: 'Nyelvek',
    resumeContact: 'Kapcsolat',
    contactEyebrow: 'Kapcsolat',
    contactLead: 'Közvetlen elérhetőségek. A nanda.is-a.dev névjegykártya a tömör nyilvános arcom.',
    cardLabel: 'Névjegykártya',
    notFoundKicker: '404',
    notFoundTitle: 'Az oldal nem található',
    notFoundLead: 'Ez a cím nem létezik.',
    backHome: 'Vissza a kezdőlapra',
    present: 'jelenleg',
    statsEyebrow: 'Számokban',
    stackEyebrow: 'Stack',
    scrollHint: 'Görgess',
    statusPill: 'Részmunkaidős backend munkára nyitott, heti 30 óráig',
    traceTitle: 'Lekérdezési idő, p95',
    traceSource: 'Juniper, PostgreSQL',
    traceBefore: 'Előtte',
    traceAfter: 'Utána',
    traceMarker: 'A Seq Scan helyett keyset lapozás és fedő index',
    traceFoot: 'Nagyjából 77-szer gyorsabb. Az adatbázis csúcs CPU-terhelése 85% → 15%.',
    clockLabel: 'Budapest',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

export function t(locale: Locale, key: UiKey) {
  return ui[locale][key];
}

export function localePath(locale: Locale, path = '') {
  const clean = path.replace(/^\/+|\/+$/g, '');
  if (locale === defaultLocale) {
    return clean ? `/${clean}` : '/';
  }
  // No trailing slash — matches trailingSlash: 'never' (and 'ignore')
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}

export function withBase(base: string, locale: Locale, path = '') {
  const root = base.endsWith('/') ? base : `${base}/`;
  const inner = localePath(locale, path).replace(/^\//, '');
  return `${root}${inner}`;
}

export function switchLocalePath(current: Locale, next: Locale, pathname: string, base: string) {
  const root = base.endsWith('/') ? base.slice(0, -1) : base;
  let rest = pathname;
  if (root && rest.startsWith(root)) rest = rest.slice(root.length);
  rest = rest.replace(/^\/(?:ru|hu)(?=\/|$)/, '');
  rest = rest.replace(/^\/+|\/+$/g, '');
  if (rest === '404' || rest.endsWith('/404')) {
    return withBase(base, next, '404');
  }
  return withBase(base, next, rest);
}
