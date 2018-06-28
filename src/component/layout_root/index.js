import React from 'react'
import _ from 'lodash'

const TYPE = {
  _POPUP: '_popup',
  MODAL: 'modal',
  _TIP: '_tip',
  FULLLOADING: 'fullloading',
  NPROGRESS: 'nprogress'
}

let setComponentFunc = null

class LayerRoot extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      _popup: null,
      modal: null,
      _tip: null,
      fullloading: null,
      nprogress: null
    }
  }

  componentDidMount () {
    setComponentFunc = (type, component) => {
      const s = {}
      s[type] = component
      this.setState(s)
    }
  }

  componentWillUnmount () {
    setComponentFunc = null
  }

  render () {
    const {
      _popup,
      modal,
      _tip,
      fullloading,
      nprogress
    } = this.state
    // 有层级关系
    return (
      <div>
        {_popup && _popup.length > 0 && (
          <div>
            {_.map(_popup, v => React.cloneElement(v.com, Object.assign({
              key: v.id
            }, v.com.props)))}
          </div>
        )}

        {modal && <div>{modal}</div>}

        {_tip && _tip.length > 0 && (
          <div className='gm-tips'>
            {_.map(_tip, v => React.cloneElement(v.com, Object.assign({
              key: v.id
            }, v.com.props)))}
          </div>
        )}

        {fullloading && <div>{fullloading}</div>}

        {nprogress && <div>{nprogress}</div>}
      </div>
    )
  }
}

const componentListMap = {
  _popup: [],
  _tip: []
}

function getList (type) {
  if (!componentListMap[type]) {
    componentListMap[type] = []
  }
  return componentListMap[type]
}

const _setComponentArray = (type, id, com) => {
  const list = getList(type)
  if (setComponentFunc) {
    const index = _.findIndex(list, v => v.id === id)
    if (index === -1) {
      list.push({id, com})
    } else {
      list[index] = {id, com}
    }

    setComponentFunc(type, list)
  } else {
    console.warn('LayerRoot is uninitialized')
  }
}

const _removeComponentArray = (type, id) => {
  const list = getList(type)
  if (setComponentFunc) {
    _.remove(list, v => v.id === id)
    setComponentFunc(type, list)
  } else {
    console.warn('LayerRoot is uninitialized')
  }
}

LayerRoot._setComponentPopup = (id, com) => {
  _setComponentArray(LayerRoot.TYPE._POPUP, id, com)
}

LayerRoot._removeComponentPopup = (id) => {
  _removeComponentArray(LayerRoot.TYPE._POPUP, id)
}

LayerRoot._setComponentTip = (id, com) => {
  _setComponentArray(LayerRoot.TYPE._TIP, id, com)
}

LayerRoot._removeComponentTip = (id) => {
  _removeComponentArray(LayerRoot.TYPE._TIP, id)
}

LayerRoot._removeComponentTipAll = () => {
  setComponentFunc(LayerRoot.TYPE._TIP, [])
}

LayerRoot.setComponent = (type, com) => {
  if (setComponentFunc) {
    LayerRoot.removeComponent()
    setComponentFunc(type, com)
  } else {
    console.warn('LayerRoot is uninitialized')
  }
}

LayerRoot.removeComponent = (type) => {
  if (setComponentFunc) {
    setComponentFunc(type, undefined)
  } else {
    console.warn('LayerRoot is uninitialized')
  }
}

LayerRoot.TYPE = TYPE

export default LayerRoot
