import React from 'react'
import PropTypes from 'prop-types'
import { List } from '../src'
import { history } from './service'
import { withRouter } from 'react-router-dom'
import { Framework } from '../frame'

const data = [
  {
    label: 'Guide',
    children: [{ text: 'About', value: '/doc/About' }]
  },
  {
    label: 'Layout',
    children: [
      { text: 'ClassName', value: '/doc/ClassName' },
      { text: 'Flex', value: '/doc/Flex' },
      { text: 'Quick', value: '/doc/Quick' },
      { text: 'Collapse 折叠面板', value: '/doc/Collapse' },
      { text: 'Divider 分割线', value: '/doc/Divider' },
      { text: 'Nav 新导航', value: '/doc/Nav' },
      { text: 'Affix 粘性布局', value: '/doc/Affix' }
    ]
  },
  {
    label: 'Data',
    children: [
      { text: 'Calendar 日历', value: '/doc/Calendar' },
      { text: 'Table 表格', value: '/doc/Table' },
      { text: 'Sheet 表格', value: '/doc/Sheet' },
      { text: 'Pagination 页码', value: '/doc/Pagination' }
    ]
  },
  {
    label: 'Select',
    children: [
      { text: 'Cascader 级联选择', value: '/doc/Cascader' },
      { text: 'DropSelect', value: '/doc/DropSelect' },
      { text: 'MoreSelect 搜索选择', value: '/doc/MoreSelect' },
      { text: 'FilterSelect 搜索选择', value: '/doc/FilterSelect' },
      { text: 'Transfer 穿梭框', value: '/doc/Transfer' },
      { text: 'Tree 树形选择', value: '/doc/Tree' },
      { text: 'DatePicker 日期选择', value: '/doc/DatePicker' },
      { text: 'TimeSpan 时间点选择', value: '/doc/TimeSpan' },
      { text: 'ColorPicker 颜色选择', value: '/doc/ColorPicker' },
      { text: 'List 列表', value: '/doc/List' }
    ]
  },
  {
    label: 'Layer',
    children: [
      { text: 'Tip 提示', value: '/doc/Tip' },
      { text: 'ToolTip 提示', value: '/doc/ToolTip' },
      { text: 'Dialog 对话框', value: '/doc/Dialog' },
      { text: 'Popover 浮层', value: '/doc/Popover' },
      { text: 'Modal 模态框', value: '/doc/Modal' },
      { text: 'Drawer 抽屉', value: '/doc/Drawer' },
      { text: 'ImagePreview 图片预览', value: '/doc/ImagePreview' },
      { text: 'Carousel 轮播图', value: '/doc/Carousel' }
    ]
  },
  {
    label: 'Form',
    children: [
      { text: 'Validator 校验工具', value: '/doc/Validator' },
      { text: 'Form 表单', value: '/doc/Form' },
      { text: 'Radio & Checkbox 单(多)选框', value: '/doc/Radio' },
      { text: 'Switch 开关', value: '/doc/Switch' },
      { text: 'InputNumber 数字输入框', value: '/doc/InputNumber' },
      { text: 'Select 选择', value: '/doc/Select' },
      { text: 'DropDown 下拉框', value: '/doc/DropDown' },
      { text: 'Uploader 上传', value: '/doc/Uploader' },
      { text: 'Button 按钮', value: '/doc/Button' }
    ]
  },
  {
    label: 'Loading',
    children: [
      { text: 'Loading 加载中', value: '/doc/Loading' },
      { text: 'Progress 请求进度条', value: '/doc/Progress' },
      { text: 'ProgressCircle 环形进度条', value: '/doc/ProgressCircle' }
    ]
  },
  {
    label: 'Other',
    children: [
      { text: 'NProgress 顶部请求进度条', value: '/doc/NProgress' },
      { text: 'Storage', value: '/doc/Storage' },
      { text: 'EditableText', value: '/doc/EditableText' },
      { text: 'FlipNumber', value: '/doc/FlipNumber' },
      { text: 'Price 价格显示', value: '/doc/Price' }
    ]
  }
]

@withRouter
class NavConfig extends React.Component {
  handleSelect(path) {
    Framework.scrollTop()
    history.push(path)
  }

  render() {
    return (
      <div>
        <List
          className='gm-border-0'
          data={data}
          isGroupList
          onSelect={this.handleSelect}
        />
      </div>
    )
  }
}

NavConfig.propTypes = {
  location: PropTypes.object
}

export default NavConfig
