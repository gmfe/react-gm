import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import SVGRemove from '../../../svg/remove.svg'

const reorder = (list, startIndex, endIndex) => {
  const result = _.cloneDeep(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const SortList = ({ cols, onColsChange, onColsRemove }) => {
  const onDragEnd = result => {
    // 拖到了区域外
    if (!result.destination) {
      return
    }

    const list = reorder(cols, result.source.index, result.destination.index)
    onColsChange(list)
  }

  const onRemove = (key, e) => {
    e.stopPropagation()
    onColsRemove(key)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='react-table-diy-sort-list'>
        {(provided, snapshot) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className='gm-react-table-diy-modal-sort-list-ul'
          >
            {cols.map((item, index) => {
              const { diyItemText, Header, key, diyEnable } = item
              const text = diyItemText || Header
              return (
                <Draggable key={key} draggableId={key} index={index}>
                  {(provided, snapshot) => (
                    <li
                      className={classnames(
                        'gm-react-table-diy-modal-sort-list-li',
                        { active: snapshot.isDragging }
                      )}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={provided.draggableProps.style}
                    >
                      {text}
                      {diyEnable && (
                        <SVGRemove
                          onClick={onRemove.bind(this, key)}
                          className='gm-cursor gm-react-table-diy-modal-sort-list-li-remove'
                        />
                      )}
                    </li>
                  )}
                </Draggable>
              )
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}

SortList.propTypes = {
  cols: PropTypes.array.isRequired,
  onColsChange: PropTypes.func.isRequired,
  onColsRemove: PropTypes.func.isRequired
}

export default SortList
