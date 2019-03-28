import React from 'react'
import MoreSelect from '../../src/component/more_select'
import _ from 'lodash'

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

class Component extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: {
        value: 3,
        text: '罗湖'
      },
      data
    }
  }

  render () {
    return (
      <div>
        <div>默认</div>
        <MoreSelect
          data={data}
          selected={this.state.selected}
          onSelect={value => {
            this.setState({ value })
          }}
        />

        <div>默认 带拼音搜索</div>
        <MoreSelect
          data={data}
          selected={this.state.selected}
          onSelect={value => {
            this.setState({ value })
          }}
          renderListFilterType='pinyin'
        />

        <div>disabled</div>
        <MoreSelect
          data={data}
          selected={this.state.selected}
          onSelect={selected => this.setState({ selected })}
          disabled
        />

        <div>placeholder searchPlaceholder</div>
        <MoreSelect
          data={data}
          selected={this.state.selected}
          onSelect={selected => this.setState({ selected })}
          placeholder='啊啊啊'
          searchPlaceholder='啊啊啊a'
        />

        <div>自动滚到已选</div>
        <MoreSelect
          data={data}
          selected={{ value: 11, text: '西乡11' }}
          onSelect={selected => this.setState({ selected })}
        />

        <div>搜索 同步数据</div>
        <MoreSelect
          data={this.state.data}
          selected={this.state.selected}
          onSelect={selected => this.setState({ selected })}
          onSearch={searchValue => {
            // 同步直接改变 data
            this.setState({
              data: _.filter(data, item => item.text.includes(searchValue))
            })
          }}
        />

        <div>搜索 异步数据</div>
        <MoreSelect
          data={data}
          selected={this.state.selected}
          onSelect={selected => this.setState({ selected })}
          onSearch={searchValue => {
            // 同步直接改变 data

            // 异步 返回 promise
            return new Promise(resolve => {
              setTimeout(() => {
                resolve()
              }, 1000)
            })
          }}
        />
      </div>
    )
  }
}

export default Component
