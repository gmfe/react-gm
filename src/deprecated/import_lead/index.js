import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import Dropper from '../../component/dropper/index.js'
import { getLocale } from '../../locales'

class ImportLead extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedFile: null
    }
    this.handleSubmit = ::this.handleSubmit
    this.handleDrop = ::this.handleDrop
  }

  componentDidMount () {
    console.warn('Deprecated. Use gm-service / ImportLead instead.')
  }

  render () {
    const data = _.extend({ columns: [], list: [] }, this.props.data)
    const tips = this.props.tips || []

    let tipsMap = {}

    let lineMap = _.map(data.list, () => false)

    _.each(tips, function (tip, index) {
      tipsMap[tip.index] = tipsMap[tip.index] || {}
      tip._index = index
      tipsMap[tip.index][tip.field] = tip

      if (!tip.modifyed) {
        lineMap[tip.index] = true
      }
    })

    const tableBody = data.list.map((eList, index) => {
      const tds = data.columns.map((col, i) => {
        if (col.render) { return <td key={i}>{col.render(eList[col.field], eList, index)}</td> }

        var tip = tipsMap[index] && tipsMap[index][col.field]
        return tip ? (
          <td key={i} className={tip.modifyed ? 'gm-bg-info' : 'gm-bg-invalid'}>
            {this.props.disableEdit ? eList[col.field] : (
              <input
                type='text'
                value={eList[col.field]}
                onChange={this.handleEdit.bind(this, index, col.field, tip._index)}
              />
            )}
            <small className='gm-import-lead-tip badge'><i>{tip.msg}</i></small>
          </td>
        ) : (
          <td key={i}>
            {eList[col.field]}
          </td>
        )
      })

      return (
        <tr key={index}>{tds}</tr>
      )
    })

    var canSubmit = _.filter(tips, function (value) {
      return value.modifyed === true
    }).length === tips.length

    var filename = this.state.selectedFile ? this.state.selectedFile.name : ''

    var fileTempUrl = this.props.fileTempUrl

    return (
      <div className='gm-import-lead'>
        <div>
          <div>
            <Dropper className='gm-dropper-wrap' onDrop={this.handleDrop} accept='.xlsx'>
              <button className='btn btn-primary btn-sm'>{getLocale('importLead', 'uploadBtn')}</button>
            </Dropper>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {!this.props.disableSubmit && (
              <button
                disabled={!canSubmit} className='btn btn-primary btn-sm'
                onClick={this.handleSubmit}
              >
                {getLocale('importLead', 'submit')}
              </button>
            )}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {fileTempUrl ? (
              <a href={fileTempUrl} target='blank'>{getLocale('importLead', 'downLoadBtn')}</a>) : undefined}
            <div>{filename}</div>
          </div>
          {!this.props.unLine && (
            <div className='gm-import-line clearfix'>
              {lineMap.map((v, i) => (
                <div key={i} className={v ? 'tip' : ''} onClick={this.handleLine.bind(this, i)}/>)
              )}
            </div>
          )}
        </div>
        <div className='gm-import-lead-content' ref={ref => (this.refContent = ref)}>
          {data ? (
            <table className='table table-condensed table-bordered' ref={ref => (this.refTable = ref)}>
              <thead>
                <tr>
                  {data.columns.map((col, i) => (
                    <th key={i}>{col.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableBody}
              </tbody>
            </table>) : undefined}
        </div>
      </div>
    )
  }

  handleEdit (index, field, i, event) {
    if (this.props.onEdit) {
      this.props.onEdit(index, field, event.target.value, i)
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    if (this.props.onSubmit) {
      this.props.onSubmit()
    }
  }

  handleLine (index) {
    let content = ReactDOM.findDOMNode(this.refContent)

    let table = ReactDOM.findDOMNode(this.refTable)
    content.scrollTop = index / this.props.data.list.length * table.offsetHeight
  }

  handleDrop (files) {
    this.setState({
      selectedFile: files[0]
    })
    if (files[0] && this.props.onDrop) {
      this.props.onDrop(files[0])
    }
  }
}

ImportLead.propTypes = {
  data: PropTypes.object,
  tips: PropTypes.array,
  onEdit: PropTypes.func,
  fileTempUrl: PropTypes.string,
  disableEdit: PropTypes.bool,
  unLine: PropTypes.bool,
  disableSubmit: PropTypes.bool
}

export default ImportLead
