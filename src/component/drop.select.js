import React from 'react';
import classnames from 'classnames';

class DropSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: null
        };

        this.documentClickHandler = this.documentClickHandler.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        document.addEventListener("click", this.documentClickHandler);
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentDidUpdate() {
        const dom = this.refSelectPanel.querySelector('.gm-dropselect-list .active');
        dom && dom.scrollIntoViewIfNeeded();  //scrollIntoView
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.documentClickHandler);
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    processData(data) {
        return Object.assign({
            loading: false,
            show: false,
            actions: [],
            list: [],
            columns: []
        }, data);
    }

    documentClickHandler(e) {
        if (!this.refSelectPanel.contains(e.target)) {
            this.setState({
                activeIndex: null
            });
            this.props.onHide();
        }
    }

    handleKeyUp(size, e) {
        // 列表为空
        if (!size) {
            return;
        }

        let activeIndex = this.state.activeIndex;

        // 键盘 上键
        if (e.keyCode === 38) {
            if (activeIndex === null)
                activeIndex = size;

            activeIndex--;
        } else if (e.keyCode === 40) { // 键盘 下键
            if (activeIndex === null)
                activeIndex = -1;

            activeIndex++;
        } else if (e.keyCode === 13) { // 键盘 回车
            if (activeIndex === null)
                return;
            this.props.onEnter(activeIndex);
        } else {
            return;
        }

        this.setState({
            activeIndex: (size + activeIndex) % size
        });
    }

    handleKeyDown(e) {
        if (e.keyCode === 27) {
            this.props.onHide();
        }
    }

    render() {
        const thisProps = this.props,
            show = thisProps.show;
        const {loading, list, columns, actions} = this.processData(this.props.data);
        const {activeIndex} = this.state;
        let coolList;

        const coolTitle = columns.map(col => {
            return <div className="gm-ellipsis" key={col.field}>{col.name}</div>;
        });

        if (loading) {
            coolList = <li className="gm-dropselect-item">
                <span>&nbsp;</span><i className="glyphicon glyphicon-refresh"/>
            </li>;
        } else {
            coolList = list.map((rowData, rowIndex) => {
                const cls = classnames('gm-dropselect-item', {
                    active: activeIndex === rowIndex
                });
                const row = columns.map((col, index) => {
                    const field = col.field, value = rowData[field];
                    if (col.render) {
                        let val = col.render(value, rowData, rowIndex);
                        return <div
                            className="gm-ellipsis"
                            style={{flex: '1'}}
                            key={index}
                            title={value}
                        >
                            {val}
                        </div>;
                    } else {
                        return <div className="gm-ellipsis" key={index} title={value}>{value}</div>;
                    }
                });
                const actionDom = actions.map((action, index) => {
                    const disabled = action.getDisabled ? action.getDisabled(rowData, rowIndex) : false;
                    return <button className={action.className}
                                   onClick={action.onClick.bind(null, rowData)}
                                   disabled={disabled}
                                   key={index}>{action.text}</button>;
                });

                return <li className={cls} key={rowData.id}>
                    {row}
                    {actionDom.length ? <div>{actionDom}</div> : null}
                </li>;
            });
        }

        return (
            <div
                className={thisProps.className}
                ref={ref => this.refSelectPanel = ref}
                onKeyUp={this.handleKeyUp.bind(this, list.length)}
                onKeyDown={this.handleKeyDown}
            >
                {thisProps.children}
                <div className="gm-dropselect-wrap">
                    <div
                        className="gm-dropselect-list-wrap"
                        style={{display: show ? 'block' : 'none'}}
                    >
                        <ul className="gm-dropselect-list">
                            <li className="gm-dropselect-item gm-dropselect-title">
                                {coolTitle}
                                {!!actions.length && <div>操作</div>}
                            </li>
                            {coolList}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

DropSelect.propTypes = {
    show: React.PropTypes.bool,
    loading: React.PropTypes.bool,
    data: React.PropTypes.object,
    onEnter: React.PropTypes.func
};

DropSelect.defaultProps = {
    onEnter: (index) => {
        console.log('onEnter index:', index);
    }
};

export default DropSelect;