import moment from 'moment'

// 设置moment的时间值
const setTimes = (date, time) => {
  // 没有设置时间
  if (!time) {
    return moment(date)
  }

  const _time = moment(time)

  const res = moment(date)
    .hour(_time.hour())
    .minute(_time.minute())
    .second(_time.second())
  return res
}

const getTimeCells = span => {
  let time = moment().startOf('day')
  const cells = []

  while (time <= moment().endOf('day')) {
    cells.push(time)
    time = moment(time + span)
  }
  return cells
}

export { setTimes, getTimeCells }
