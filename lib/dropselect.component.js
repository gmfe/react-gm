import React from 'react';
import ReactDOM from 'react-dom';

class DropSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.documentClickHandler = this.documentClickHandler.bind(this);
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
        const thisDom = ReactDOM.findDOMNode(this.refs.selectPanel);

        if (!thisDom.contains(e.target)) {
            this.props.onHide();
        }
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.documentClickHandler);
    }

    componentDidMount() {
        document.addEventListener("click", this.documentClickHandler);
    }

    render() {
        const thisProps = this.props,
            show = thisProps.show;
        const {loading, list, columns, actions} = this.processData(this.props.data);
        let coolList;


        const coolTitle = columns.map(col => {
            return <div className="ellipsis" key={col.field}>{col.name}</div>
        });

        if (loading) {
            coolList =
                <li className="dropselect-item"><span>&nbsp;</span><i className="icon icon-spin ico-spinner2"></i></li>;
        } else {
            coolList = list.map(rowData => {
                const row = columns.map(col => {
                    const field = col.field, value = rowData[field];
                    if (col.render) {
                        let val = col.render(value);
                        return <div className="ellipsis" style={{flex: '1'}} key={value + field} title={val}>{val}</div>
                    } else {
                        return <div className="ellipsis" key={value + field} title={value}>{value}</div>
                    }
                });

                const actionDom = actions.map((action, index) => {
                    return <button className={action.className}
                                   onClick={action.onClick.bind(null, rowData)}
                                   key={index}>{action.text}</button>;
                });

                return <li className="dropselect-item" key={rowData.id}>
                    {row}
                    <div>{actionDom}</div>
                </li>
            });
        }

        return (
            <div className={thisProps.className} ref="selectPanel">
                {thisProps.children}
                <div className="dropselect-wrap">
                    <div className="dropselect-list-wrap" style={{display: show ? 'block' : 'none'}}>
                        <ul className="dropselect-list">
                            <li className="dropselect-item dropselect-title">
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
    data: React.PropTypes.object
};

export default DropSelect;