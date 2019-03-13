import React from 'react'
import PropTypes from 'prop-types'
import BaseTable from './base'
import { ReactTableDefaults } from 'react-table'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

function TbodyComponent ({
  getDroppableStyle,
  getDroppableClass,
  droppableProps,
  ...rest
}) {
  return (
    <Droppable
      droppableId='droppable'
      {...droppableProps}
    >
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={getDroppableClass(snapshot)}
          style={{
            ...getDroppableStyle(snapshot),
            ...provided.droppableProps.style
          }}
        >
          <ReactTableDefaults.TbodyComponent
            {...rest}
          />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

function TrGroupComponent ({
  getDraggableStyle,
  getDraggableClass,
  draggableProps,
  rowKey,
  rowInfo,
  ...rest
}) {
  return (
    <Draggable
      key={rowKey}
      draggableId={rowKey + ''}
      index={rowInfo ? rowInfo.index : 0}
      {...draggableProps}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={getDraggableClass(snapshot)}
          style={{
            ...getDraggableStyle(snapshot),
            ...provided.draggableProps.style
          }}
        >
          <ReactTableDefaults.TrGroupComponent {...rest}/>
        </div>
      )}
    </Draggable>
  )
}

class DndTable extends React.Component {
  onDragEnd = result => {
    // polyfill dropp outside the list
    if (!result.destination) {
      result = {
        ...result,
        destination: { ...result.source }
      }
    }
    this.props.onDragEnd && this.props.onDragEnd(result)
  }

  render () {
    const {
      rowKey,
      dndDisabled,
      getDraggableProps,
      getDroppableProps,
      getTbodyProps,
      getTrGroupProps,
      getDraggableStyle,
      getDroppableStyle,
      getDraggableClass,
      getDroppableClass,
      ...rest
    } = this.props

    return (
      <DragDropContext
        onBeforeDragStart={this.props.onBeforeDragStart}
        onDragStart={this.props.onDragStart}
        onDragUpdate={this.props.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <BaseTable
          TbodyComponent={TbodyComponent}
          TrGroupComponent={TrGroupComponent}
          getTbodyProps={(state, rowInfo, column, instance) => {
            return {
              ...getTbodyProps(state, rowInfo, column, instance),
              droppableProps: {
                isDropDisabled: dndDisabled,
                ...getDroppableProps(rowInfo)
              },
              getDroppableStyle,
              getDroppableClass
            }
          }}
          getTrGroupProps={(state, rowInfo, column, instance) => {
            return {
              ...getTrGroupProps(state, rowInfo, column, instance),
              draggableProps: {
                isDragDisabled: dndDisabled,
                ...getDraggableProps(rowInfo)
              },
              getDraggableStyle,
              getDraggableClass,
              rowKey: rowInfo
                ? typeof rowKey === 'function' ? rowKey(rowInfo) : rowInfo.original[rowKey]
                : '0',
              rowInfo
            }
          }}
          {...rest}
        />
      </DragDropContext>
    )
  }
}

DndTable.propTypes = {
  rowKey: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.func.isRequired
  ]),
  dndDisabled: PropTypes.bool,
  getDraggableProps: PropTypes.func,
  getDroppableProps: PropTypes.func,
  getDraggableStyle: PropTypes.func,
  getDroppableStyle: PropTypes.func,
  getDraggableClass: PropTypes.func,
  getDroppableClass: PropTypes.func,
  onDragEnd: PropTypes.func.isRequired,
  onBeforeDragStart: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragUpdate: PropTypes.func
}

DndTable.defaultProps = {
  dndDisabled: false,
  getDraggableProps: () => ({}),
  getDroppableProps: () => ({}),
  getDraggableStyle: () => ({}),
  getDroppableStyle: () => ({}),
  getDraggableClass: () => '',
  getDroppableClass: () => '',
  getTbodyProps: () => ({}),
  getTrGroupProps: () => ({})
}

export default DndTable
