import React from 'react'
import { List } from '../../src/'

class Component extends React.Component {
  state = {
    selected: '南山',
    multipleSelected: ['南山', '罗湖']
  }

  render () {
    return (
      <div>
        <List
          data={[
            { value: '南山', text: '南山' },
            { value: '福田', text: '福田' },
            { value: '龙岗', text: '龙岗' },
            { value: '罗湖', text: '罗湖' }
          ]}
          selected={this.state.selected}
          onSelect={selected => this.setState({ selected })}
        />

        <List
          multiple
          data={[
            { value: '南山', text: '南山' },
            { value: '福田', text: '福田' },
            { value: '龙岗', text: '龙岗' },
            { value: '罗湖', text: '罗湖' }
          ]}
          selected={this.state.multipleSelected}
          onSelect={selected => this.setState({ multipleSelected: selected })}
        />

        <div className='gm-padding-10'/>

        <List
          data={[
            {
              label: '分组二',
              children: [
                { value: '南山', text: '南山' },
                { value: '福田', text: '福田' }
              ]
            },
            {
              label: '分组一',
              children: [
                { value: '龙岗', text: '龙岗' },
                { value: '罗湖', text: '罗湖' }
              ]
            }
          ]}
          selected={this.state.selected}
          onSelect={selected => this.setState({ selected })}
          isGroupList
        />

        <List
          multiple
          data={[
            {
              label: '分组二',
              children: [
                { value: '南山', text: '南山' },
                { value: '福田', text: '福田' }
              ]
            },
            {
              label: '分组一',
              children: [
                { value: '龙岗', text: '龙岗' },
                { value: '罗湖', text: '罗湖' }
              ]
            }
          ]}
          isGroupList
          selected={this.state.multipleSelected}
          onSelect={selected => this.setState({ multipleSelected: selected })}
        />
      </div>
    )
  }
}

export default Component
