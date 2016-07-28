```javascript
static propTypes = {
    selected: PropTypes.any, // 已选择的
    list: PropTypes.array.isRequired, // 待选择列表，格式靠拢select [{value: 0, name: 'aaa'}]
    onSearch: PropTypes.func.isRequired, // 输入文字搜索时触发，会延迟 delay ms触发
    onSelect: PropTypes.func.isRequired, // 选择的时候触发，提供所有所选择的
    delay: PropTypes.number, 
    listMaxHeight: PropTypes.string, // 待选择列表的高度，默认 250px
    multiple: PropTypes.bool, // 是否支持多选，默认false
    placeholder: PropTypes.string // 输入框的placeholder
};
```

具体见demo

