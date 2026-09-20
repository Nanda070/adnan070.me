export type Locale = 'en' | 'ru';

export const locales: Locale[] = ['en', 'ru'];
export const defaultLocale: Locale = 'en';

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
  rest = rest.replace(/^\/ru(?=\/|$)/, '');
  rest = rest.replace(/^\/+|\/+$/g, '');
  if (rest === '404' || rest.endsWith('/404')) {
    return withBase(base, next, '404');
  }
  return withBase(base, next, rest);
}
