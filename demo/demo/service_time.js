import React from 'react'
import {
  processReceiveTimeLimit,
  getCycleList,
  getStartCycleList,
  getEndCycleList,
  cycleListToDayList
} from 'gm-service/src/service_time/receive_time'
import _ from 'lodash'
import { Flex } from '../../src/index'
import moment from 'moment'

const testDatas = [{
  e_span_time: 2,
  r_end: '02:00',
  r_start: '22:00',
  receiveEndSpan: 1,
  receiveTimeSpan: '30',
  s_span_time: 0,
  time_config_id: 'ST997'
}, {
  e_span_time: 0,
  r_end: '02:00',
  r_start: '02:00',
  receiveEndSpan: 1,
  receiveTimeSpan: '30',
  s_span_time: 0,
  time_config_id: 'ST997'
}, {
  e_span_time: 0,
  r_end: '23:00',
  r_start: '22:00',
  receiveEndSpan: null,
  receiveTimeSpan: '30',
  s_span_time: 0,
  time_config_id: 'ST997'
}, {
  e_span_time: 2,
  r_end: '02:00',
  r_start: '22:00',
  receiveEndSpan: 1,
  receiveTimeSpan: '30',
  s_span_time: 0,
  time_config_id: 'ST997'
}]

class ReceiveTime extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      values: [null, null]
    }
  }

  handleStart = (date) => {
    this.setState({
      values: [+date, null]
    })
  }

  render () {
    const receive_time_limit = this.props.limit

    const cycleList = getCycleList(receive_time_limit)

    const sV = this.state.values[0]
    const eV = this.state.values[1]

    const startCycleList = getStartCycleList(cycleList)
    let endCycleList = []
    if (sV) {
      endCycleList = getEndCycleList(moment(sV), cycleList)
    }

    return (
      <div>
        <pre>
          {JSON.stringify(receive_time_limit, null, 2)}
        </pre>

        <Flex>
          <div>
            <div>开始 {sV && moment(sV).format('DD HH:mm')}</div>
            {_.map(startCycleList, (c, i) => (
              <div key={i}>
                <hr/>
                {_.map(c, (d, j) => (
                  <div key={j} onClick={this.handleStart.bind(this, d)}>{d.format('DD HH:mm')}</div>
                ))}
              </div>
            ))}
          </div>
          <div>
            <div>结算 {eV && moment(eV).format('DD HH:mm')}</div>
            {_.map(endCycleList, (c, i) => (
              <div key={i}>
                <hr/>
                {_.map(c, (d, j) => (
                  <div key={j} onClick={this.handleStart.bind(this, d)}>{d.format('DD HH:mm')}</div>
                ))}
              </div>
            ))}
          </div>
          <div>
            <div>转换成dayList</div>
            {_.map(cycleListToDayList(startCycleList), (c, i) => (
              <div key={i}>
                <hr/>
                {_.map(c, (d, j) => (
                  <div key={j} onClick={this.handleStart.bind(this, d)}>{d.format('DD HH:mm')}</div>
                ))}
              </div>
            ))}
          </div>
        </Flex>

      </div>
    )
  }
}

class Component extends React.Component {
  render () {
    return (
      <div>
        {_.map(testDatas, (limit, i) => <ReceiveTime key={i} limit={processReceiveTimeLimit(limit)}/>)}
      </div>
    )
  }
}

export default Component
