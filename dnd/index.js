/**
 * 1. dropTarget 唯一 target_id
 * 2. dragSource 唯一 source_id
 * 3. useDrop({ accept: string, hover: (item) => {...} }) => [result, connectDropTarget]
 * 4. useDrag({ item: {...} }) => [result, connectDragSource, connectDragPreview]
 *    - connectDragSource: wrap drag ref
 *    - connectDragPreview: wrap preview ref
 *    - connectDropTarget: wrap drop ref
 * 5. html5BackEnd {
 *    connectDropTarget
 *    connectDragSource
 *    event 处理...
 * }
 */

import { useDrop, useDrag } from './hooks'
import { DndContext } from './util'

export default {
  useDrop,
  useDrag,
  DndContextProvider: DndContext.Provider
}
