import React from 'react'
import { Table, ExpandSelectTable } from '../../table'
import _ from 'lodash'

const data = [
  {
    'total_money': '2390.00',
    'id': 'T5991-JHD-2018-07-25-00027',
    'sku_money': '2390.00',
    'supplier_customer_id': 'LDP20180117',
    'submit_time': '2018-07-25',
    'status': 2,
    'supplier_name': '',
    'date_time': '2018-07-25',
    'delta_money': 0,
    'settle_supplier_id': 'T10953'
  }, {
    'total_money': '176.00',
    'id': 'T5991-JHD-2018-07-25-00026',
    'sku_money': '176.00',
    'supplier_customer_id': 'A2926',
    'submit_time': '2018-07-25',
    'status': 2,
    'supplier_name': '段虎',
    'date_time': '2018-07-25',
    'delta_money': 0,
    'settle_supplier_id': 'T14319'
  }, {
    'total_money': '279.00',
    'id': 'T5991-JHD-2018-07-25-00025',
    'sku_money': '279.02',
    'supplier_customer_id': 'sc215',
    'submit_time': '2018-07-25',
    'status': 2,
    'supplier_name': '黑市桥蔬菜批发（周洪芹）',
    'date_time': '2018-07-25',
    'delta_money': -2.0,
    'settle_supplier_id': 'T13324'
  }, {
    'total_money': '714.70',
    'id': 'T5991-JHD-2018-07-25-00024',
    'sku_money': '714.70',
    'supplier_customer_id': 'DZP001',
    'submit_time': '2018-07-25',
    'status': 2,
    'supplier_name': '黑市桥豆制品批发1号摊位（陆燕红）',
    'date_time': '2018-07-25',
    'delta_money': 0,
    'settle_supplier_id': 'T9651'
  }, {
    'total_money': '691.60',
    'id': 'T5991-JHD-2018-07-25-00023',
    'sku_money': '694.30',
    'supplier_customer_id': 'DY100',
    'submit_time': '2018-07-25',
    'status': 2,
    'supplier_name': '黑市桥豆芽批发（丁玉英）',
    'date_time': '2018-07-25',
    'delta_money': -270.0,
    'settle_supplier_id': 'T16362'
  }, {
    'total_money': '60.00',
    'id': 'T5991-JHD-2018-07-25-00022',
    'sku_money': '60.00',
    'supplier_customer_id': 'SC113',
    'submit_time': '2018-07-25',
    'status': 2,
    'supplier_name': '黑市桥蔬菜批发（陈祥龙）',
    'date_time': '2018-07-25',
    'delta_money': 0,
    'settle_supplier_id': 'T16195'
  }, {
    'total_money': '2332.74',
    'id': 'T5991-JHD-2018-07-25-00021',
    'sku_money': '2361.26',
    'supplier_customer_id': 'sc215',
    'submit_time': '2018-07-25',
    'status': 2,
    'supplier_name': '黑市桥蔬菜批发（周洪芹）',
    'date_time': '2018-07-25',
    'delta_money': -2852.0,
    'settle_supplier_id': 'T13324'
  }, {
    'total_money': '925.00',
    'id': 'T5991-JHD-2018-07-25-00020',
    'sku_money': '925.50',
    'supplier_customer_id': 'SC003',
    'submit_time': '2018-07-25',
    'status': 2,
    'supplier_name': '黑市桥蔬菜批发2号档口（孙晋成）',
    'date_time': '2018-07-25',
    'delta_money': -50.0,
    'settle_supplier_id': 'T9648'
  }
]

class Component extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectAll: false,
      selected: [
        'T5991-JHD-2018-07-25-00027'
      ]
    }
  }

  handleToggleAll = () => {
    if (this.state.selectAll) {
      this.setState({
        selectAll: false,
        selected: []
      })
    } else {
      this.setState({
        selectAll: true,
        selected: _.map(data, v => v.id)
      })
    }
  }

  handleSelect = (selected) => {
    let {selectAll} = this.state

    if (selectAll && selected.length !== data.length) {
      selectAll = false
    }

    this.setState({
      selectAll,
      selected
    })
  }

  renderSubComponent () {
    return (
      <div className='gm-padding-10'>
        <Table
          data={data.slice(0, 3)}
          columns={[{
            Header: '建单时间',
            accessor: 'submit_time'
          }, {
            Header: '入库单号',
            accessor: 'id'
          }, {
            Header: '供应商信息',
            accessor: 'supplier_name'
          }, {
            Header: '入库金额',
            accessor: 'total_money'
          }, {
            Header: '单据状态',
            accessor: 'status'
          }]}
        />
      </div>
    )
  }

  render () {
    return (
      <div>
        <ExpandSelectTable
          style={{
            height: '200px'
          }}
          data={data}
          columns={[{
            Header: '建单时间',
            accessor: 'submit_time'
          }, {
            Header: '入库单号',
            accessor: 'id'
          }, {
            Header: '供应商信息',
            accessor: 'supplier_name'
          }, {
            Header: '入库金额',
            accessor: 'total_money'
          }, {
            Header: '单据状态',
            accessor: 'status'
          }]}
          keyField='id'
          selectAll={this.state.selectAll}
          onSelectAll={this.handleToggleAll}
          selectAllTip='选中所有数据啦'
          selected={this.state.selected}
          onSelect={this.handleSelect}
          SubComponent={this.renderSubComponent}
        />
      </div>
    )
  }
}

export default Component
