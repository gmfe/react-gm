import React, { useState } from 'react'
import { Flex, Modal } from '../../../../src'
import _ from 'lodash'
import Selector from './modal_selector'
import List from './modal_list'
import PropTypes from 'prop-types'

const DiyTableModal = ({ columns, onSave, diyGroupSorting }) => {
  const [diyCols, setDiyCols] = useState(columns)
  const [showCols, setShowCols] = useState(columns.filter(o => o.show))

  const handleColsChange = (key, curShow) => {
    const index = _.findIndex(diyCols, o => o.key === key)
    const _diyCols = diyCols.slice()

    const curItem = _diyCols[index]
    curItem.show = !curShow

    setDiyCols(_diyCols)

    if (curItem.show) {
      // 把当前项增加到排序列表中
      setShowCols(_diyCols.filter(o => o.show))
    } else {
      // 把当前项从排序列表去掉
      const _showCols = showCols.slice()
      _.remove(_showCols, item => item.key === key)
      setShowCols(_showCols)
    }
  }

  const handleColsRemove = key => {
    const _showCols = showCols.slice()
    _.remove(_showCols, o => o.key === key)
    setShowCols(_showCols)

    const index = _.findIndex(diyCols, o => o.key === key)
    const _diyCols = diyCols.slice()
    _diyCols[index].show = false
    setDiyCols(_diyCols)
  }

  const handleSave = () => {
    const columns = diyCols.map(col => {
      return {
        ...col,
        show: _.findIndex(showCols, v => v.key === col.key) > -1 // 大于-1才会显示
      }
    })

    onSave(columns)
    Modal.hide()
  }

  return (
    <div className='gm-react-table-x-diy-modal'>
      <Flex>
        <div className='gm-react-table-x-diy-modal-selector'>
          <div className='gm-border-bottom gm-react-table-x-diy-modal-title'>
            可选字段
          </div>
          <Selector
            diyGroupSorting={diyGroupSorting}
            cols={diyCols}
            onColsChange={handleColsChange}
          />
        </div>
        <div className='gm-react-table-x-diy-modal-list'>
          <div className='gm-border-bottom gm-react-table-x-diy-modal-title'>
            当前选定的字段
          </div>
          <List cols={showCols} onColsRemove={handleColsRemove} />
        </div>
      </Flex>
      <Flex justifyEnd className='gm-padding-10'>
        <button className='btn btn-default btn-sm' onClick={() => Modal.hide()}>
          取消
        </button>
        <div className='gm-gap-10' />
        <button className='btn btn-primary btn-sm' onClick={handleSave}>
          保存
        </button>
      </Flex>
    </div>
  )
}

DiyTableModal.propTypes = {
  columns: PropTypes.array.isRequired,
  diyGroupSorting: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired
}

export default DiyTableModal
