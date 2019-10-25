import _ from 'lodash'

const ruleMap = {}

const hasValue = value =>
  !(value === '' || value === null || value === undefined)

const Validator = {
  // type 类型名，全局唯一
  // rules [{help, required, validate}] 其中help必填
  register(type, rules) {
    if (ruleMap[type]) {
      console.warn(`you has register the type ${type}, will be overwritten!`)
    }

    if (_.filter(rules, r => !r.help).length !== 0) {
      console.warn('missing help in rules')
      return
    }

    ruleMap[type] = {
      type,
      rules
    }
  },
  validate(type, value) {
    if (!ruleMap[type]) {
      console.warn('can not find validator of ' + type)
      return ''
    }

    const rules = ruleMap[type].rules
    let help = ''

    // 用find不用遍历整个rules
    _.find(rules, rule => {
      if (rule.required && !hasValue(value)) {
        help = rule.help
        return true
      }

      if (rule.validate) {
        const rt = rule.validate(value, rule)
        if (!rt) {
          help = rule.help
          return true
        }
      }
    })

    return help
  },
  create(types, value, nextValidate) {
    types = _.isArray(types) ? types : [types]
    return before => {
      let help = ''

      if (before) {
        help = before(value)
        if (help) {
          return help
        }
      }

      _.find(types, type => {
        const rt = Validator.validate(type, value)
        if (rt) {
          help = rt
          return true
        }
      })

      if (!help && nextValidate) {
        help = nextValidate(value)
      }

      return help
    }
  }
}

export default Validator
