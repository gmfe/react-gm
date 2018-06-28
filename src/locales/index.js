import * as lng from './lng'

let _lng = 'zh'

const setLocale = (lng) => {
  _lng = lng
}

const getLocale = (component, text) => {
  const language = lng[_lng]
  return language[component][text]
}

export {
  setLocale,
  getLocale
}
