import _ from 'lodash'

function getLeaf(list, result = []) {
  _.each(list, v => {
    if (v.children) {
      getLeaf(v.children, result)
    } else {
      result.push(v)
    }
  })
  return result
}

function getUnLeafValues(list, result = []) {
  _.each(list, v => {
    if (v.children) {
      result.push(v.value)
      getUnLeafValues(v.children, result)
    }
  })
  return result
}

// 反正是写出来了，我也不知道啊
function filterGroupListModify(list, what) {
  return _.filter(list, function(d) {
    if (d.children) {
      d.children = filterGroupListModify(d.children, what)
    }

    if (d.children) {
      return !!d.children.length
    } else {
      return what(d)
    }
  })
}

function filterGroupList(list, what) {
  return filterGroupListModify(_.cloneDeep(list), what)
}

export { getLeaf, getUnLeafValues, filterGroupList }
