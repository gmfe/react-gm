import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Popover from '../popover'
import DateRangeSelect from './date_range_select'
import DateRange from './date_range_input'
import moment from 'moment'

/**
 * DateRangePickerNew -- 日期段选择
 *
 * 主要功能：提供日期段选择
 *
 * - 区别于之前的组件，将两个日期揉合一起选择，一个日历可以同时选择 开始日期 && 结束日期
 * - 以点击的日期进行判断，作为选择的 开始日期 && 结束日期
 * - 提供日期参数，进入近一个月内的日期选择
 * */

// 新date_range_picker组件: DateRangePickerNew
// props: begin -- object, 开始时间
//        end -- object, 结束时间
//        canClear -- bool, 删除日期
//        renderInputValue -- 自定义日期展示格式
//        disabled -- 禁用
//        onChange -- func, 日期修改回调
//        disabledDate -- func, 不可选择日期

const DateRangePickerNew = props => {
  const dateRangePickerNewRef = useRef(null)
  const {
    begin,
    end,
    disabled,
    onChange,
    renderInputValue,
    canClear,
    disabledDate
  } = props

  const handleOk = (begin, end) => {
    onChange(moment(begin), moment(end))
    dateRangePickerNewRef.current.click()
  }

  const handleCancel = () => {
    dateRangePickerNewRef.current.click()
  }

  const clearDate = () => {
    onChange(null, null)
  }

  const popup = (
    <DateRangeSelect
      begin={begin}
      end={end}
      onOk={handleOk}
      onCancel={handleCancel}
      disabledDate={disabledDate}
    />
  )

  return (
    <div ref={dateRangePickerNewRef}>
      <Popover animName disabled={disabled || false} popup={popup}>
        <div>
          <DateRange
            begin={begin}
            end={end}
            disabled={disabled || false}
            canClear={canClear || false}
            clearDate={clearDate}
            renderInputValue={renderInputValue}
          />
        </div>
      </Popover>
    </div>
  )
}

DateRangePickerNew.displayName = 'DateRangePickerNew'

DateRangePickerNew.propTypes = {
  /** 开始日期, Date()对象 */
  begin: PropTypes.object,
  /** 结束日期, Date()对象 */
  end: PropTypes.object,
  /** 禁止选择 */
  disabled: PropTypes.bool,
  /** 日期更改回调函数，传入参数为: 开始日期 && 结束日期 */
  onChange: PropTypes.func,
  /** 自定义日期的展示函数 */
  renderInputValue: PropTypes.func,
  /** 清除日期 */
  canClear: PropTypes.bool,
  /** 定义不可选择的日期，传入参数为Date对象，返回true or false */
  disabledDate: PropTypes.func
}

export default DateRangePickerNew
