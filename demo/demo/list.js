import React from 'react'
import { List, ListGroup } from '../../src/'

class Component extends React.Component {
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
          selected='南山'
          onSelect={selected => console.log(selected)}
        />

        <List
          multiple
          data={[
            { value: '南山', text: '南山' },
            { value: '福田', text: '福田' },
            { value: '龙岗', text: '龙岗' },
            { value: '罗湖', text: '罗湖' }
          ]}
          selected={['南山', '罗湖']}
          onSelect={selected => console.log(selected)}
        />

        <div className='gm-padding-10'/>

        <ListGroup
          data={[
            {
              label: '南山',
              children: [
                { value: '深大', text: '深大' },
                { value: '蛇口', text: '蛇口' },
                { value: '西丽', text: '西丽' }
              ]
            },
            {
              label: '福田',
              children: [
                { value: '竹子林', text: '竹子林' },
                { value: '下沙', text: '下沙' },
                { value: '上沙', text: '上沙' }
              ]
            }
          ]}
          selected='竹子林'
        />

        <ListGroup
          multiple
          data={[
            {
              label: '南山',
              children: [
                { value: '深大', text: '深大' },
                { value: '蛇口', text: '蛇口' },
                { value: '西丽', text: '西丽' }
              ]
            },
            {
              label: '福田',
              children: [
                { value: '竹子林', text: '竹子林' },
                { value: '下沙', text: '下沙' },
                { value: '上沙', text: '上沙' }
              ]
            }
          ]}
          selected={['竹子林', '蛇口']}
        />
      </div>
    )
  }
}

export default Component
