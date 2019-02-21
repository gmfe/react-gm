import React from 'react'
import MoreSelect from '../../src/component/more_select'

const data = [{
  value: 1,
  text: '南山'
}, {
  value: 2,
  text: '福田'
}, {
  value: 3,
  text: '罗湖'
}, {
  value: 4,
  text: '宝安'
}, {
  value: 5,
  text: '福永'
}, {
  value: 6,
  text: '坪洲'
}, {
  value: 7,
  text: '西乡'
}, {
  value: 8,
  text: '西乡8'
}, {
  value: 9,
  text: '西乡9'
}, {
  value: 10,
  text: '西乡10'
}, {
  value: 11,
  text: '西乡11'
}]

const dataGroup = [{
  label: '南山',
  children: [{
    value: 1,
    text: '科技园'
  }, {
    value: 2,
    text: '大冲'
  }, {
    value: 3,
    text: '大新'
  }]
}, {
  label: '宝安',
  children: [{
    value: 2,
    text: '西乡'
  }, {
    value: 21,
    text: '固戍'
  }]
}]

class Component extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: {
        value: 1,
        text: '科技园'
      },
      data,
      multipleSelected: [{
        value: 3,
        text: '大新'
      }, {
        value: 2,
        text: '大冲'
      }],
      isFocus: false
    }
  }

  render () {
    return (
      <div>
        <div>默认</div>
        <div tabIndex='0'>afaf</div>

        <MoreSelect
          data={data}
          selected={this.state.selected}
          onSelect={selected => {
            this.setState({ selected })
          }}
        >
          <div>
            <div tabIndex={0}>moreselect</div>
            <input type='text'/>
          </div>
        </MoreSelect>

      </div>
    )
  }
}

export default Component
