import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Cascade from './cascade'
import Flex from '../flex'
import classNames from 'classnames'

// TODO 后续考虑拆开单选，多选。 耦合起来太蛋疼。

const getPropsSelected = props => {
  if (props.multiple) {
    if (props.selected) {
      return props.selected
    } else {
      return []
    }
  } else {
    if (props.selected) {
      return [props.selected]
    } else {
      return []
    }
  }
}

class CascadeSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: getPropsSelected(props),
      cascadeValue: []
    }

    this.refCascadeSelect = null
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selected: getPropsSelected(nextProps)
    })
  }

  handleKeyDown(event) {
    if (event.key === 'Backspace') {
      if (this.state.cascadeValue.length > 0) {
        this.setState({
          cascadeValue: []
        })
      } else if (event.target.value === '') {
        const selected = this.state.selected
        selected.pop()
        this.doSelect(selected)
      }
    }
  }

  doSelect(selected) {
    if (this.props.multiple) {
      this.props.onSelect(selected.length === 0 ? null : selected)
    } else {
      this.props.onSelect(selected.length === 0 ? null : selected.pop())
    }
  }

  uniq(selected) {
    let obj = {}
    let result = []
    _.each(selected, value => {
      const key = _.map(value, v => v.value).join(',')
      if (!obj[key]) {
        result.push(value)
        obj[key] = true
      }
    })
    return result
  }

  handleChange(value) {
    let result = []
    this.setState({
      cascadeValue: value
    })

    if (value.length > 0) {
      _.each(value, (v, i) => {
        const match = _.find(
          i === 0 ? this.props.data : result[i - 1].children,
          val => {
            return v === val.value
          }
        )
        result.push(match)
      })
    }

    // 知道没有children才认为选择了
    if (result.length && !result[result.length - 1].children) {
      let n = this.state.selected.slice()
      n.push(result)
      // 过滤
      n = this.uniq(n)

      this.doSelect(n)
      this.setState({
        cascadeValue: []
      })
      // 单选完后就不继续出浮层
      if (!this.props.multiple) {
        this.refCascadeSelect.click()
      }
    }
  }

  handleClose(value) {
    const selected = _.filter(this.state.selected, v => v !== value)
    this.doSelect(selected)
  }

  render() {
    const {
      disabled,
      inputProps,
      valueRender,
      filterable,
      onlyChildSelectable
    } = this.props
    return (
      <div
        className={classNames(
          'gm-cascade-select gm-border gm-bg gm-position-relative',
          {
            disabled: disabled,
            'gm-not-allowed': disabled
          }
        )}
        ref={ref => (this.refCascadeSelect = ref)}
      >
        <Flex className='gm-cascade-select-input'>
          {_.map(this.state.selected, (value, i) => (
            <Flex key={i} alignStart className='selected'>
              {this.props.selectedRender
                ? this.props.selectedRender(value, i)
                : _.map(value, v => v.name).join(',')}
              <button
                disabled={disabled}
                type='button'
                className='close'
                onClick={this.handleClose.bind(this, value)}
              >
                {disabled ? null : <span>&times;</span>}
              </button>
            </Flex>
          ))}
          <Flex flex column onKeyDown={::this.handleKeyDown}>
            <Cascade
              popoverStyle={{
                marginTop: '5px'
              }}
              valueRender={valueRender}
              filterable={filterable}
              onlyChildSelectable={onlyChildSelectable}
              inputProps={inputProps}
              disabled={disabled}
              data={this.props.data}
              value={this.state.cascadeValue}
              onChange={::this.handleChange}
            />
          </Flex>
        </Flex>
      </div>
    )
  }
}

CascadeSelect.propTypes = {
  data: PropTypes.array.isRequired,
  selected: PropTypes.array,
  // 会提供整个value回去
  onSelect: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  selectedRender: PropTypes.func,
  inputProps: PropTypes.object,
  disabled: PropTypes.bool,
  valueRender: PropTypes.func,
  filterable: PropTypes.bool,
  onlyChildSelectable: PropTypes.bool
}
CascadeSelect.defaultProps = {
  inputProps: {},
  disabled: false,
  filterable: false,
  onlyChildSelectable: false
}

export default CascadeSelect
