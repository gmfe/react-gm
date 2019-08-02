import { useEffect } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const prefix = '_react-gm_'
const { localStorage } = window

const StorageStatics = {
  set(key, value) {
    localStorage.setItem(prefix + key, JSON.stringify(value))
  },
  get(key) {
    const v = localStorage.getItem(prefix + key)
    return v ? JSON.parse(v) : v
  },
  remove(key) {
    localStorage.removeItem(prefix + key)
  },
  clear() {
    localStorage.clear()
  },
  getAll() {
    const result = {}
    _.each(_.range(localStorage.length), i => {
      let key = localStorage.key(i)
      if (key.startsWith(prefix)) {
        key = key.slice(prefix.length)
        result[key] = StorageStatics.get(key)
      }
    })
    return _.keys(result) ? result : null
  }
}

const Storage = ({ name, value }) => {
  useEffect(() => {
    StorageStatics.set(name, value)
  }, [value])

  return null
}

Object.assign(Storage, StorageStatics)

Storage.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
}

export default Storage
