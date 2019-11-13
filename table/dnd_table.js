import React from 'react'
import PropTypes from 'prop-types'
import BaseTable from './table/base'
import { ReactTableDefaults } from 'react-table-v6'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const TrGroupInner = React.memo(function TrGroupInner(props) {
  const { children, dragHandleProps } = props

  return React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      const TdChildren = React.Children.map(child.props.children, Td => {
        if (React.isValidElement(Td) && Td.props._dragField) {
          Td = React.cloneElement(Td, dragHandleProps)
        }
        return Td
      })
      child = React.cloneElement(child, {}, ...TdChildren)
    }
    return child
  })
})

function TdComponent({ _dragField, ...rest }) {
  return <ReactTableDefaults.TdComponent {...rest} />
}

function TbodyComponent({
  getDroppableStyle,
  getDroppableClass,
  droppableProps,
  children,
  ...rest
}) {
  return (
    <Droppable droppableId='droppable' {...droppableProps}>
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
          <ReactTableDefaults.TbodyComponent {...rest}>
            {children}
            {provided.placeholder}
          </ReactTableDefaults.TbodyComponent>
        </div>
      )}
    </Droppable>
  )
}

function TrGroupComponent({
  getDraggableStyle,
  getDraggableClass,
  draggableProps,
  rowKey,
  rowInfo,
  children,
  isDragInnerField,
  ...rest
}) {
  return (
    <Draggable
      key={rowKey}
      draggableId={rowKey + ''}
      index={rowInfo ? rowInfo.index : 0}
      {...draggableProps}
    >
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...(isDragInnerField ? {} : provided.dragHandleProps)}
            className={getDraggableClass(snapshot)}
            style={{
              ...getDraggableStyle(snapshot),
              ...provided.draggableProps.style
            }}
          >
            <ReactTableDefaults.TrGroupComponent {...rest}>
              {isDragInnerField ? (
                <TrGroupInner dragHandleProps={provided.dragHandleProps}>
                  {children}
                </TrGroupInner>
              ) : (
                children
              )}
            </ReactTableDefaults.TrGroupComponent>
          </div>
        )
      }}
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

  render() {
    const {
      rowKey,
      dndDisabled,
      getDraggableProps,
      getDroppableProps,
      getTdProps,
      getTbodyProps,
      getTrGroupProps,
      getDraggableStyle,
      getDroppableStyle,
      getDraggableClass,
      getDroppableClass,
      ...rest
    } = this.props

    const isDragInnerField =
      rest.columns &&
      rest.columns.length &&
      rest.columns.some(col => col.dragField)

    return (
      <DragDropContext
        onBeforeDragStart={this.props.onBeforeDragStart}
        onDragStart={this.props.onDragStart}
        onDragUpdate={this.props.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <BaseTable
          TdComponent={TdComponent}
          TbodyComponent={TbodyComponent}
          TrGroupComponent={TrGroupComponent}
          getTdProps={(state, rowInfo, column, instance) => {
            return {
              ...getTdProps(state, rowInfo, column, instance),
              _dragField: !!column.dragField
            }
          }}
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
                ? typeof rowKey === 'function'
                  ? rowKey(rowInfo)
                  : rowInfo.original[rowKey]
                : '0',
              rowInfo,
              isDragInnerField
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
  getTdProps: () => ({}),
  getTrGroupProps: () => ({})
}

export default DndTable
