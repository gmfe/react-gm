import _ from 'lodash'

// 把树的数据达成多个数组，方便展示数据浮层
const getLevel = (data, selected) => {
  const result = [data]

  _.each(selected, (item, i) => {
    const match = _.find(result[i], v => v.value === item)

    if (match) {
      if (match.children) {
        result.push(match.children)
      }
    }
  })

  return result
}

const isLeaf = (data, willActiveSelected) => {}

export { getLevel, isLeaf }
