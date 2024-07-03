import 'server-only'

const dictionaries: any = {
  en: () => import('@/localization/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();