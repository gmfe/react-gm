import React from 'react'
import { LevelSelect } from '../../src'

const data = [
  {
    value: '0',
    text: '广东',
    children: [
      {
        value: '04',
        text: '官方'
      },
      {
        value: '31',
        text: '上海'
      }
    ]
  },
  {
    value: '1',
    text: '上海',
    children: [
      {
        value: '12',
        text: '上海2',
        children: [
          {
            value: '121',
            text: 'sssss'
          },
          {
            value: '122',
            text: 'ggggggggggggggggggggggggggggggggggg2'
          }
        ]
      }
    ]
  },
  {
    value: 'r',
    text: '北京北京北京北京北京北京北京北京北京北京北京北京',
    children: [
      {
        value: '0',
        text: '全部'
      },
      {
        value: 'rr',
        text: 'yyyy'
      }
    ]
  }
]

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: ['0']
    }
  }

  render() {
    return (
      <div>
        <LevelSelect
          disabled
          titles={['标题1', '标题2']}
          data={data}
          selected={this.state.selected}
          onSelect={selected => {
            console.log('onSelect', selected)
            this.setState({ selected })
          }}
          onKeyDown={event => {
            console.log(event.key)
          }}
        />
      </div>
    )
  }
}

export default Component
