---
imports:
    import {
        Form, FormItem, FormButton, FormBlock, FormGroup,
        Validator,
        Dropper,
        Radio, RadioGroup,
        Checkbox, CheckboxGroup,
        Switch,
        QuickPanel
    } from '../../src/index';
---
## Form

目的：约束Form表单的UI，同时提供更便捷的表单写法。

::: demo 默认形态
```js
class FormWrap extends React.Component {
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem label="姓名">
                    <input type="text"/>
                </FormItem>
                <FormItem label="描述">
                    <textarea type="text" name="desc"/>
                </FormItem>
                <FormButton>
                    <button className="btn btn-primary" type="submit">提交</button>
                </FormButton>
            </Form>
        );
    }
}
```
```jsx
<FormWrap/>
```
:::

::: demo 内联表单 inline
```js
class FormWrap2 extends React.Component {
    render() {
        return (
            <Form onSubmit={this.handleSubmit} inline>
                <FormItem label="姓名">
                    <input type="text"/>
                </FormItem>
                <FormItem label="描述">
                    <textarea type="text" name="desc"/>
                </FormItem>
                <FormButton>
                    <button className="btn btn-primary" type="submit">提交</button>
                </FormButton>
            </Form>
        );
    }
}
```
```jsx
<FormWrap2/>
```
:::

::: demo 水平排列表单。 需要提供labelWidth以便对齐label的宽度
```js
class FormWrap3 extends React.Component {
    render() {
        return (
            <Form onSubmit={this.handleSubmit} labelWidth="100px" horizontal>
                <FormItem label="姓名">
                    <input type="text"/>
                </FormItem>
                <FormItem label="描述">
                    <textarea type="text" name="desc"/>
                </FormItem>
                <FormItem label="switch">
                    <Switch
                        type="primary"
                        checked={true}
                        onChange={() => {}}
                    />
                </FormItem>
                <FormItem label="switch">
                    <Switch
                        type="primary"
                        checked={true}
                        onChange={() => {}}
                        off='关闭'
                        on='开启'
                    />
                </FormItem>
                <FormItem label="switch">
                    <Switch
                        type="primary"
                        checked={true}
                        onChange={() => {}}
                        off='否'
                        on='是'
                    />
                </FormItem>
                <FormItem label="image">
                    <Dropper/>
                </FormItem>
                <FormButton>
                    <button className="btn btn-primary" type="submit">提交</button>
                </FormButton>
            </Form>
        );
    }
}
```
```jsx
<FormWrap3/>
```
:::

行内表单和内联表单在手机端均失效，显示出默认形态

### Props
- `inline (bool)` 默认`false`，内联表单。 和 horizontal 互斥。
- `horizontal (bool)` 默认`false` 水平排列表单。和 inline 互斥。
- `labelWidth (string)` label的宽度
- `onSubmit (func)` 已默认处理了 preventDefault。和 onSubmitValidated 互斥。
- `onSubmitValidated (func)` 只有所有验证通过才会回调，依据是`FormItem`的`error`属性是`false`或者`validate`运行的结果是成功。和 onSubmit 互斥。

## FormItem

::: demo 会给子表单元素添加class`form-control` <br/>children也可以是其他元素
```js
class FormItemWrap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            url: '',
            cityList: [],
            city: null
        };
    }

    handleChangeOther(field, value) {
        this.setState({
            [field]: value
        });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem label="姓名">
                    <input type="text"/>
                </FormItem>
                <FormItem
                    label="姓名"
                    error
                    help="错误啦"
                >
                    <input type="text"/>
                </FormItem>
                <FormItem label="网址">
                    <div>
                        <Dropper/> 其他东西
                    </div>
                </FormItem>
                <FormItem label="多选（行内排列）">
                    <CheckboxGroup
                        inline
                        name="cityList"
                        value={this.state.cityList}
                        onChange={this.handleChangeOther.bind(this, 'cityList')}
                    >
                        <Checkbox value={1}>广州</Checkbox>
                        <Checkbox value={2}>深圳</Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem label="单选">
                    <RadioGroup
                        name="city"
                        value={this.state.city}
                        onChange={this.handleChangeOther.bind(this, 'city')}
                    >
                        <Radio value={1}>广州</Radio>
                        <Radio value={2}>深圳</Radio>
                    </RadioGroup>
                </FormItem>
                <FormButton>
                    <button className="btn btn-primary" type="submit">提交</button>
                </FormButton>
            </Form>
        );
    }
}
```
```jsx
<FormItemWrap/>
```
:::

::: demo 校验。推荐用`Validator.TYPE`提供的校验类型校验，没有则注册
```js
class FormItemWrap2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            repeat_email: '',
            url: '',
            name: ''
        };
        this.validateRepeatEmail = ::this.validateRepeatEmail;
    }

    handleSubmit(e){
        console.log('submit');
    }

    handleSubmitValidated(){
        console.log('handleSubmitValidated');
    }

    validateRepeatEmail(value){
        if(value === this.state.email){
            return '';
        }
        return '两次邮件输入不一致';
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} onSubmitValidated={this.handleSubmitValidated} apiDoValidate={err => console.log(err)}>
                <FormItem
                    label="名字"
                    required
                    validate={Validator.create([], this.state.name)}
                >
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={e => this.setState({name: e.target.value})}
                    />
                </FormItem>
                <FormItem
                    label="网址"
                    validate={Validator.create(Validator.TYPE.url, this.state.url)}
                >
                    <input
                        type="text"
                        value={this.state.url}
                        onChange={e => this.setState({url: e.target.value})}
                    />
                </FormItem>
                <FormItem
                    label="邮件"
                    required
                    validate={Validator.create([Validator.TYPE.email], this.state.email)}
                >
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={e => this.setState({email: e.target.value})}
                    />
                </FormItem>
                <FormItem
                    label="重复邮件"
                    required
                    validate={Validator.create([Validator.TYPE.email], this.state.repeat_email, this.validateRepeatEmail)}
                >
                    <input
                        type="text"
                        value={this.state.repeat_email}
                        onChange={e => this.setState({repeat_email: e.target.value})}
                    />
                </FormItem>
                <FormButton>
                    <button className="btn btn-primary" type="submit">提交</button>
                </FormButton>
            </Form>
        );
    }
}
```
```jsx
<FormItemWrap2/>
```
:::

### Props
- `required (bool)` label旁边的`*`
- `label (string)`
- `validate (func)` 校验后返回错误帮助信息，且只有过提交过动作后才显示，onChange则会自动重新校验。存在validate，则`error` `help`无效。如果存在`required`，则先校验是否有值。
- `error (bool)` 校验的状态，只有`true`时help才会显示
- `apiDoValidate (fun)` 暴露校验后的 `err`
- `help (string)` 错误帮助信息
- `unLabelTop (bool)` 是否取消 label 的 padding-top: 7px。Switch 默认取消。

## FormBlock

::: demo 用FormBlock做更复杂的布局
```js
class FormBlockWrap extends React.Component {
    render() {
        return (
            <div>
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormBlock>
                        <FormItem label="姓名" required inline width="200px" validate={Validator.create([], '')}>
                            <input type="text"/>
                        </FormItem>
                        <FormItem label="身高" inline>
                            <input type="text"/>
                        </FormItem>
                    </FormBlock>
                    <FormItem label="姓名" required validate={Validator.create([], '')}>
                        <input type="text"/>
                    </FormItem>
                    <FormItem label="描述">
                        <textarea type="text" name="desc"/>
                    </FormItem>
                    <FormButton>
                        <button className="btn btn-primary" type="submit">提交</button>
                    </FormButton>
                </Form>

                <Form onSubmit={this.handleSubmit} horizontal labelWidth="50px">
                    <FormBlock>
                        <FormItem label="姓名" required inline width="200px" validate={Validator.create([], '')}>
                            <input type="text"/>
                        </FormItem>
                        <FormItem label="身高" inline>
                            <input type="text"/>
                        </FormItem>
                    </FormBlock>
                    <FormBlock block={[2, 1]}>
                        <FormItem label="姓名" required inline width="200px" validate={Validator.create([], '')}>
                            <input type="text"/>
                        </FormItem>
                        <FormItem label="身高" inline>
                            <input type="text"/>
                        </FormItem>
                    </FormBlock>
                    <FormItem label="姓名" required validate={Validator.create([], '')}>
                        <input type="text"/>
                    </FormItem>
                    <FormItem label="描述">
                        <textarea type="text" name="desc"/>
                    </FormItem>
                    <FormButton>
                        <button className="btn btn-primary" type="submit">提交</button>
                    </FormButton>
                </Form>
            </div>
        );
    }
}
```
```jsx
<FormBlockWrap/>
```
:::

### Props
- `block (array)` 提供children的比例，比如2:1是[2,1]。 不提供根据等分。

## FormGroup

::: demo FormGroup
```js
class FormGroupWrap extends React.Component {
    constructor(props){
        super(props);
        this.form1 = React.createRef()
        this.form2 = React.createRef()

        this.state = {name: '', name2: '', desc: '', desc2: ''}
    }

    handleCancel = () => {
        console.log('cancel')
    }
    render() {
        return (
            <FormGroup
                formRefs={[this.form1, this.form2]}
                onCancel={this.handleCancel}
                onSubmit={() => console.log('onSubmit')}
                apiDoValidate={err => console.log(err)}
                onSubmitValidated={() => console.log('onSubmitValidated')}
            >
                <QuickPanel icon='todo' iconColor='#4fb7de' title='基础信息'>
                    <Form ref={this.form1} hasButtonInGroup>
                        <FormItem
                            label="名字"
                            required
                            validate={Validator.create([], this.state.name)}
                        >
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={e => this.setState({name: e.target.value})}
                            />
                        </FormItem>
                        <FormItem
                            label="描述"
                            required
                            validate={Validator.create([], this.state.desc)}
                        >
                            <input
                                type="text"
                                value={this.state.desc}
                                onChange={e => this.setState({desc: e.target.value})}
                            />
                        </FormItem>
                    </Form>
                </QuickPanel>

                <QuickPanel icon='todo' iconColor='#4fb7de' title='销售信息' right={<div>右边</div>}>
                    <Form horizontal labelWidth="50px" ref={this.form2} hasButtonInGroup>
                        <FormItem
                            label="名字"
                            required
                            validate={Validator.create([], this.state.name2)}
                        >
                            <input
                                type="text"
                                value={this.state.name2}
                                onChange={e => this.setState({name2: e.target.value})}
                            />
                        </FormItem>
                        <FormItem
                            label="描述"
                            required
                            validate={Validator.create([], this.state.desc2)}
                        >
                            <input
                                type="text"
                                value={this.state.desc2}
                                onChange={e => this.setState({desc2: e.target.value})}
                            />
                        </FormItem>
                    </Form>
                </QuickPanel>
            </FormGroup>
        );
    }
}
```
```jsx
<FormGroupWrap/>
```
:::

### Props
- `className (string)` className
- `disabled (bool)` 是否可点击保存
- `onCancel (fun)` 取消function
- `formRefs (array)` 所包含的`Form`组件ref
- `onSubmit (fun)` 保存function
- `onSubmitValidated (fun)` 保存function带校验
- `apiDoValidate (fun)` 暴露校验后的 `errList`

**注意，Form 需要添加`hasButtonInGroup`，用于enter键触发保存**
