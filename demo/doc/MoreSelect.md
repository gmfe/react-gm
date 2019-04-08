---
imports:
    import {MoreSelect} from '../../src/index';
---
## List

现在列表各自实现，有点冗余，UI也不统一，估统一下

::: demo
```js
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
      }]
    }
  }

  render () {
    return (
      <div>
        <div>默认</div>
        <MoreSelect
          data={data}
          selected={this.state.selected}
          onSelect={selected => {
            this.setState({ selected })
          }}
        />

        <div>默认 带拼音搜索</div>
        <MoreSelect
          data={data}
          selected={this.state.selected}
          onSelect={selected => {
            this.setState({ selected })
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

        <hr/>
        <div>多选</div>
        <MoreSelect
          data={data}
          selected={this.state.multipleSelected}
          onSelect={selected => {
            this.setState({ multipleSelected: selected })
          }}
          multiple
        />

        <hr/>
        <div>group</div>
        <MoreSelect
          isGroupList
          data={dataGroup}
          selected={this.state.selected}
          onSelect={selected => {
            this.setState({ selected })
          }}
        />
        <MoreSelect
          isGroupList
          data={dataGroup}
          selected={this.state.multipleSelected}
          onSelect={selected => {
            this.setState({ multipleSelected: selected })
          }}
          multiple
          renderListFilterType='pinyin'
        />
      </div>
    )
  }
}
```
```jsx
<Component/>
```
:::

### Props

TODO