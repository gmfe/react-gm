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
            return <div className="gm-ellipsis" key={col.field}>{col.name}</div>;
        });

        if (loading) {
            coolList =
                <li className="gm-dropselect-item"><span>&nbsp;</span><i className="glyphicon glyphicon-refresh"/>
                </li>;
        } else {
            coolList = list.map((rowData, rowIndex) => {
                const row = columns.map(col => {
                    const field = col.field, value = rowData[field];
                    if (col.render) {
                        let val = col.render(value, rowData, rowIndex);
                        return <div className="gm-ellipsis" style={{flex: '1'}} key={value + field}
                                    title={val}>{val}</div>;
                    } else {
                        return <div className="gm-ellipsis" key={value + field} title={value}>{value}</div>;
                    }
                });
                const actionDom = actions.map((action, index) => {
                    const disabled = action.getDisabled ? action.getDisabled(rowData, rowIndex) : false;
                    return <button className={action.className}
                                   onClick={action.onClick.bind(null, rowData)}
                                   disabled={disabled}
                                   key={index}>{action.text}</button>;
                });

                return <li className="gm-dropselect-item" key={rowData.id}>
                    {row}
                    <div>{actionDom}</div>
                </li>;
            });
        }

        return (
            <div className={thisProps.className} ref="selectPanel">
                {thisProps.children}
                <div className="gm-dropselect-wrap">
                    <div className="gm-dropselect-list-wrap" style={{display: show ? 'block' : 'none'}}>
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
    data: React.PropTypes.object
};

export default DropSelect;