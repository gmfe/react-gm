两种形式，Pagination PaginationText

# 表现
![image](https://cloud.githubusercontent.com/assets/1010130/10868381/12f1e0c2-80c8-11e5-9dcd-35827a5c32ac.png)

# 使用
```js
var Pagination = ReactGM.Pagination;

var data = {
    count: 80,
    offset: 10,
    limit: 10
};

var onToPage = function (page, index) {
    // page={offset, limit}  index=1(第几页)
}

var PaginationWrap = React.createClass({
    render: function () {
        return (
            <div>
                <Pagination data={gridData} toPage={onToPage}></Grid>
            </div>
        )
    }
});
```

# PaginationText
同上，只是没有回调