import store from '@/store'
import en from '@/locales/en.json'
import ru from '@/locales/ru.json'

const locales = {
  'en-US': en,
  'ru-RU': ru
}

export default function localizeFilter(key) {
  const locale = store.getters.info.locale || 'en-US'
  return locales[locale][key] || `[Localize error]: key ${key} not found`
}
