---
imports:
    import {QuickTab, QuickFilter, DateRangePicker, QuickPanel, Sheet, QuickDesc, Flex, TimeSpanPicker} from '../../src/index';
    import moment from 'moment';
---

# 多Tab切换
::: demo Tab
```js
const Tab = () => 
    <QuickTab tabs={['按订单查看', '按商品查看']} className="gm-padding-15" isStatic={true}>
        <div>
            <QuickFilter className="gm-border-top-0">
                <form className="form-inline">
                    <div className="input-group gm-margin-right-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="请输入订单号"
                            style={{minWidth: '250px'}}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">搜索</button>
                    <div className="gm-gap-10"></div>
                    <a href="" className="btn btn-default">导出</a>
                </form>
            </QuickFilter>
        </div>
        <div>
            <QuickFilter className="gm-border-top-0">
                <form className="form-inline">
                    <div className="input-group gm-margin-right-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="请输入商户名称"
                            style={{minWidth: '250px'}}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">搜索</button>
                    <div className="gm-gap-10"></div>
                    <a href="" className="btn btn-default">导出</a>
                </form>
            </QuickFilter>
        </div>
    </QuickTab>
```
 
```jsx
<Tab/>
```
:::
* 使用场景： 
同一个数据源的不同查看或功能纬度（层级关系，并列关系）
* 注意事项：
与筛选器同时出现
<br/>
<br/>

# 筛选器
::: demo Filter
```js
const Filter = () => 
    <QuickFilter className="gm-padding-15">
        <form className="form-inline">
           <select className="form-control gm-margin-right-10">
                <option value="1">按入库时间搜索</option>
                <option value="2">按建单时间搜索</option>
           </select>
           <DateRangePicker
                begin={new Date()}
                end={new Date()}
                inputClassName="form-control"
            />
            <div className="gm-gap-10"></div>
            <div className="input-group gm-margin-right-10">
                <input
                    type="text"
                    className="form-control"
                    placeholder="请输入订单号、商户名称或商户ID"
                    style={{width: '150px'}}
                />
            </div>
            <button type="submit" className="btn btn-primary">搜索</button>
            <div className="gm-gap-10"></div>
            <a href="" className="btn btn-default">导出</a>
        </form>
    </QuickFilter>
```
 
```jsx
<Filter/>
```
:::
* 注意事项：
筛选条件在交互上的先后顺序如下：时间搜索的方式筛选→时间搜索→状态筛选→搜索栏→搜索/导出按钮
<br/>
<br/>


# 常规模块头部
::: demo 表格
```js
const orders = [{"freight": 20.0, "receive_begin_time": "2016-12-21 06:00", "details": [{"quantity": 1.2, "accept_quantity": 1.2, "version": 274, "spu_remark": "", "real_item_price": 12.01, "real_quantity": 1.2, "total_item_price": 12.01, "total_item_pay": 12.01, "sync_origin_id": "D805923", "id": "D805923", "sale_price": 10.01, "spu_id": "C05661"}], "origin_total_price": 12.01, "customer": {"address": "\u5b98\u8def\u5413\u675111\u53f7", "station_id": "", "new_consumer": 0, "receiver_name": "\u9ec4\u5468\u5e73", "id": "11585", "extender": {"order_pay_method": 2, "resname": "\u4e61\u4e0b\u5473\u5ba2\u5bb6\u83dc\u9986"}, "address_id": "5624", "salemenu_id": "", "receiver_phone": "13813699281"}, "date_time": 1482221923.934, "station_id": "T002", "total_price": 12.01, "receive_end_time": "2016-12-21 12:00", "id": "PL373271", "time_config_info": {"type": 0.0, "desc": "\u9ed8\u8ba4\u670d\u52a1\u65f6\u95f4", "receive_time_limit": {"end": "12:00", "s_span_time": 1, "e_span_time": 1, "receiveTimeSpan": "30", "start": "06:00"}, "final_distribute_time_span": 1, "service_time_creator": "T001", "_id": "ST001", "order_time_limit": {"end": "23:00", "start": "06:00", "e_span_time": 0}, "final_distribute_time": "06:00", "task_begin_time": "06:00", "name": "\u9ed8\u8ba4\u670d\u52a1\u65f6\u95f4"}, "status": 1, "date_time_str": "2016-12-20 16:18:43"}, {"freight": 0.0, "receive_begin_time": "2016-12-21 01:00:00", "details": [{"quantity": 1.0, "accept_quantity": 1.0, "version": 141, "spu_remark": "", "real_item_price": 4.88, "real_quantity": 1.0, "total_item_price": 4.88, "total_item_pay": 4.88, "sync_origin_id": "D1572205", "id": "D1572205", "sale_price": 4.88, "spu_id": "C00003"}, {"quantity": 2.0, "accept_quantity": 2.0, "version": 394, "spu_remark": "", "real_item_price": 11.56, "real_quantity": 2.0, "total_item_price": 11.56, "total_item_pay": 11.56, "sync_origin_id": "D804054", "id": "D804054", "sale_price": 5.78, "spu_id": "C00005"}, {"quantity": 8.98, "accept_quantity": 8.98, "version": 228, "spu_remark": "", "real_item_price": 59.72, "real_quantity": 8.98, "total_item_price": 59.72, "total_item_pay": 59.72, "sync_origin_id": "D1079936", "id": "D1079936", "sale_price": 6.65, "spu_id": "C00001"}], "origin_total_price": 76.16, "customer": {"address": "\u5e73\u6e56\u6d77\u5409\u661fK10", "station_id": "", "new_consumer": 0, "receiver_name": "\u803f\u7ee7\u90a6", "id": "T213", "extender": {"resname": "SZ-\u963f\u7c73\u5df49\u53f7-\u79d1\u6280\u56ed"}, "address_id": "T213", "salemenu_id": "", "receiver_phone": "13243768397"}, "date_time": 1482198888.575, "station_id": "T002", "total_price": 76.16, "receive_end_time": "2016-12-21 01:30:00", "id": "LK436666", "time_config_info": {"type": 0.0, "desc": "\u9ed8\u8ba4\u670d\u52a1\u65f6\u95f4", "receive_time_limit": {"end": "12:00", "s_span_time": 1, "e_span_time": 1, "receiveTimeSpan": "30", "start": "06:00"}, "final_distribute_time_span": 1, "service_time_creator": "T001", "_id": "ST001", "order_time_limit": {"end": "23:00", "start": "06:00", "e_span_time": 0}, "final_distribute_time": "06:00", "task_begin_time": "06:00", "name": "\u9ed8\u8ba4\u670d\u52a1\u65f6\u95f4"}, "status": 1, "date_time_str": "2016-12-20 09:54:48"}];
const Panel = () => 
    <QuickPanel
        title={`订单总数：${orders.length}`}
        right={(
            <div>
                <button className="btn btn-sm btn-primary btn-plain gm-margin-right-5">
                    批量操作 <i className="ifont ifont-pi-liang"/>
                </button>
                <a to="/sale_management/order/custmoers" className="btn btn-primary btn-plain btn-sm">
                    新建订单 <i className="fa fa-plus"/>
                </a>
            </div>
        )}
    >
        <Sheet list={orders}>
            <Sheet.SheetColumn field="id" name="序号">
                {(value, i) => (i + 1)}
            </Sheet.SheetColumn>
            <Sheet.SheetColumn field="id" name="订单号"/>
            <Sheet.SheetColumn field="order_type" name="订单类型">
                {(value, index) => {
                   const order = orders[index];
                   if (order.customer.new_consumer === 1)
                       return '首次下单';
                   else if (order.customer.new_consumer === 2)
                       return '新单折扣';
                
                   return '-';
                }}
            </Sheet.SheetColumn>
            <Sheet.SheetColumn field="origin_total_price" name={<span>商品下单<br/>金额(原价)</span>}/>
            <Sheet.SheetColumn field="total_price" name={<span>商品下单<br/>金额(执行价)</span>}/>
            <Sheet.SheetColumn field="freight" name="运费"/>
            <Sheet.SheetColumn field="date_time_str" name="下单时间"/>
        </Sheet>
    </QuickPanel>
```
```jsx
<Panel/>
```
:::
* 注意事项：
1. 作为列表场景，且需要对列表中的数据进行跳转操作（如在列表中的查看详情等），标题的文案为： xxxx列表（如"商品列表"，"订单列表"），表明表单的内容，根据需求情况考虑是否展现总数（如"订单列表：23"）;
2. 模块内的内容无跳转操作，此时标题位置文案即为模块所展现内容的标题；
<br/>
<br/>


# 详情页面中基本信息
::: demo 详情头部
```js
const customer = {"address": "\u5b98\u8def\u5413\u675111\u53f7", "uid": "11585", "supply_station_id": "T002", "receive_end_time": "2016-12-21 12:00", "receiver_name": "\u9ec4\u5468\u5e73", "receive_begin_time": "2016-12-21 06:00", "address_sign_id": "30700300000", "receiver_phone": "13813699281", "address_id": "5624", "extender": {"order_pay_method": 2, "resname": "\u4e61\u4e0b\u5473\u5ba2\u5bb6\u83dc\u9986"}};
const order = {_id:"PL373271", date_time: "2016-12-20T16:18:43.934", sort_id: 0, customer: customer};
const headerLeft = <Flex alignCenter justifyCenter className="gm-padding-right-15 gm-padding-left-5" style={{height: '50px'}}>{order._id}</Flex>;
const headerRight = <div>
        <div className="row gm-padding-tb-5">
            <div className="col-md-5" style={{wordBreak: 'break-all'}}>
                <span>商户信息：</span>
                {customer.extender && customer.extender.resname}
            </div>
            <div className="col-md-3">
                <span>收货人姓名：</span>{customer.receiver_name}
            </div>
            <div className="col-md-4">
                <span>收货人电话：</span>{customer.receiver_phone}
            </div>
        </div>
        <div className="row" style={{padding: '5px 0px'}}>
            <div className="col-md-6">
                <span>收货时间：</span>
                {moment(customer.receive_begin_time).format('YYYY-MM-DD HH:mm')}~{customer.receive_end_time}
            </div>
            <div className="col-md-6">
                <span>收货地址：</span>{customer.address}
            </div>
        </div>
    </div>;
const Title = () => 
    <QuickDesc
        left={headerLeft}
        right={headerRight}
        leftFlex={1}
        rightFlex={8}
    >
        <div className="col-md-8" style={{paddingLeft: '8px'}}>
            <div className="col-md-7">
                <span>下单时间：</span>{moment(order.date_time).format('YYYY-MM-DD HH:mm:ss')}
            </div>
            <div className="col-md-8">
                <span>分拣序号：</span>{order.sort_id ? order.sort_id : '-'}
            </div>
        </div>
        <div className="col-md-4">
            <div style={{textAlign: 'right'}}>
                <button className="btn btn-primary gm-margin-top-5">修改</button>
                <button className="btn btn-primary btn-plain gm-margin-left-10 gm-margin-top-5">打印</button>
            </div>
        </div>
    </QuickDesc>
```
```jsx
<Title/>
```
:::
* 使用场景：
作为详情页面的基本信息呈现，用于1.2.2.1的布局，此处的信息会影响其他模块数据源
* 注意事项：
    1. 上半部分左边填写详情页面的唯一识别信息（如订单号，出库单号等）；
    2. 基于页面操作或系统逻辑产生更新的新置于下半部分；
<br /> 
<br /> 
    
    
# 表单
::: demo 表单
```js
class FormGroup extends React.Component {
    render() {
        return (
            <div className="form-group">
                <div className="col-sm-2 item-title">{this.props.label}</div>
                <div className="col-sm-10">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
```
```jsx
<QuickPanel title={"运营时间设置"} className="b-smm">
    <div className="gm-padding-10">
        <form className="form-horizontal">
            <FormGroup label="服务任务名称:">
                <input type="text"
                       name="name"
                       className="form-control input-sm"
                       defaultValue="嘻嘻☺️"/>
                <small>自定义“服务设置”的名称，如可命名为“宵夜档”，后续用于“宵夜档”的销售单可选择该服务设置</small>
            </FormGroup>
            <FormGroup label="描述:">
            <textarea className="form-control input-sm"
                      defaultValue="test..."/>
            </FormGroup>
            <FormGroup label="用户下单时间限制:">
                <TimeSpanPicker inputClassName="form-control input-sm"
                                date={new Date()}/>
                ~
                <TimeSpanPicker inputClassName="form-control input-sm"
                                date={new Date()}/>
                <div>
                    <small>设置用户可下单时间，超过该时间段用户无法下单，
                        如选择时间为11:30～次日00:30，则用户在每日的00:30～11:30期间无法提交订单
                    </small>
                </div>
            </FormGroup>
            <FormGroup label="最晚出库时间设置:">
                <TimeSpanPicker inputClassName="form-control input-sm"
                                date={new Date()}/>
                <div>
                    <small>这个时间段之后，所有订单将变为正在配送</small>
                </div>
            </FormGroup>
            <FormGroup label="收货时间限制:">
                <TimeSpanPicker inputClassName="form-control input-sm"
                                date={new Date()}/>
                <div className="gm-gap-10"></div>
                ~
                <div className="gm-gap-10"></div>
                <TimeSpanPicker inputClassName="form-control input-sm"
                                date={new Date()}/>
            </FormGroup>
            <div>
                <button className="btn btn-default" onClick={this.handleBack}>取消</button>
                <div className="gm-gap-10"></div>
                <button type="submit" className="btn btn-primary">保存</button>
            </div>
        </form>
    </div>
</QuickPanel>
```
:::
* 使用场景：
用于表单内容填写。
* 注意事项：
    1. 标题采用辅助性标题的样式；
    2. 一定带有保存取消按钮；