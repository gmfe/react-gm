import React from 'react'
import { storiesOf } from '@storybook/react'
import TableSelect from './index'
import { observable } from 'mobx'
import _ from 'lodash'

const data = [
  {
    purchase_price_limit: null,
    std_unit_name: '斤',
    sale_ratio: 3,
    category_id_1: 'A3978',
    settle_supplier_name: '水果供应商',
    spu_id: 'C874502',
    sku_id: 'D13944575',
    sale_unit_name: '包',
    category_id_2: 'B19074',
    category_id_2_name: '甘蓝类',
    settle_supplier_id: 'T13251',
    sku_name: '大白菜',
    station_id: 'T7936',
    category_id_1_name: '蔬菜',
    max_stock_unit_price: null
  },
  {
    purchase_price_limit: null,
    std_unit_name: '斤',
    sale_ratio: 1,
    category_id_1: 'A3978',
    settle_supplier_name: '水果供应商',
    spu_id: 'C874502',
    sku_id: 'D3628124',
    sale_unit_name: '斤',
    category_id_2: 'B19074',
    category_id_2_name: '甘蓝类',
    settle_supplier_id: 'T13251',
    sku_name: '小白菜',
    station_id: 'T7936',
    category_id_1_name: '蔬菜',
    max_stock_unit_price: null
  }
]

const columns = [
  {
    Header: 'id',
    accessor: 'original.sku_id',
    width: 100
  },
  {
    Header: '名字',
    accessor: 'original.sku_name',
    width: 100
  },
  {
    Header: '供应商',
    accessor: 'original.settle_supplier_name',
    width: 100
  },
  {
    Header: '加粗',
    accessor: 'original.sku_name',
    width: 100,
    Cell: cellProps => {
      console.log(cellProps)
      return <strong>{cellProps.original.original.sku_name}</strong>
    }
  }
]

const mapData = _.map(data, v => ({
  value: v.sku_id,
  text: v.sku_name,
  original: v
}))

const store = observable({
  selected: mapData[0],
  setSelect(selected) {
    this.selected = selected
  }
})

storiesOf('TableSelect', module).add('default', () => (
  <TableSelect
    data={mapData}
    columns={columns}
    selected={store.selected}
    onSelect={selected => store.setSelect(selected)}
  />
))
