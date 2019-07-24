import Validator from './validator'
import TYPE from './type'
import { getLocale } from '../locales'

const pattern = {
  email: /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/,
  url: new RegExp(
    '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
    'i'
  ),
  number: /^[+-]?((\d+.\d+)|(\d+))$/,
  number_positive: /^((\d+.\d+)|(\d+))$/,
  number_or_letter: /^[a-zA-Z0-9]+$/
}

Validator.register(TYPE.required, [
  {
    help: getLocale('请填写'),
    required: true
  }
])

Validator.register(TYPE.email, [
  {
    help: getLocale('请填写邮件地址'),
    validate(value) {
      return pattern.email.test(value)
    }
  }
])

Validator.register(TYPE.url, [
  {
    help: getLocale('请填写网址'),
    validate(value) {
      return pattern.url.test(value)
    }
  }
])

Validator.register(TYPE.number, [
  {
    help: getLocale('请填写数字'),
    validate(value) {
      return pattern.number.test(value)
    }
  }
])

Validator.register(TYPE.number_positive, [
  {
    help: getLocale('请填写正数'),
    validate(value) {
      return pattern.number_positive.test(value)
    }
  }
])

Validator.register(TYPE.number_or_letter, [
  {
    help: getLocale('请填写字母或数字'),
    validate(value) {
      return pattern.number_or_letter.test(value)
    }
  }
])
