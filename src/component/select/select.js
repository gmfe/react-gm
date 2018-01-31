import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {findDOMNode} from 'react-dom';
import {contains} from 'gm-util';

const findItemChildByValFromChildren = (children, val) => {
    let ret = undefined;
    
    React.Children.forEach(children, (el) => {
        if (el.type.displayName === 'Option') {
            const elProps = el.props;
            const elValue = elProps.value;
            
            if (elValue === val) {
                ret = elProps.children;
            }
        }
    });
    return ret;
};

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        
        this.handleBodyClick = ::this.handleBodyClick;
        this.handleSelectionClick = ::this.handleSelectionClick;
    }
    
    componentDidMount() {
        window.document.body.addEventListener('click', this.handleBodyClick);
    }
    
    componentWillUnmount() {
        window.document.body.removeEventListener('click', this.handleBodyClick);
    }
    
    handleBodyClick(e) {
        const target = e.target;
        const selectDOM = findDOMNode(this);
        
        if (!contains(selectDOM, target)) {
            this.setState({show: false});
        }
    }
    
    handleSelectionClick() {
        const {disabled} = this.props;
        const {show} = this.state;
    
        if (disabled) {
            return false;
        }
        this.setState({
            show: !show
        });
    }
    
    handleOptionClick(elProps, e) {
        e.preventDefault();
        
        const {onChange} = this.props;
        const {
            value: elPropsValue,
            disabled: elPropsDisabled
        } = elProps;
        
        if (elPropsDisabled) {
            return false;
        }
        
        onChange && onChange(elPropsValue);
        this.setState({show: false});
    }
    
    render() {
        const {show} = this.state;
        const {
            value,
            children,
            disabled,
            className,
            ...rest
        } = this.props;
        
        const selected = findItemChildByValFromChildren(children, value);
        
        return (
            <div
                {...rest}
                className={classNames('gm-select', className, {
                    'gm-select-open': show,
                    'disabled': disabled
                })}
            >
                <div
                    className="gm-select-selection"
                    onClick={this.handleSelectionClick}
                >
                    <div className="gm-select-selected">
                        {selected}
                    </div>
                    <i className={classNames("gm-select-arrow ifont", {
                        'ifont-up-small': show,
                        'ifont-down-small': !show
                    })}/>
                </div>
                
                <div className="gm-select-list">
                    {
                        React.Children.map(children, (el) => (
                            React.cloneElement(el, Object.assign({}, el.props, {
                                    className: classNames(className, {
                                        'selected': el.props.value === value
                                    }),
                                    onClick: this.handleOptionClick.bind(this, el.props)
                                })
                            )
                        ))
                    }
                </div>
            </div>
        );
    }
}

Select.displayName = 'Select';

Select.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    onChange: PropTypes.func.isRequired
};

export default Select;