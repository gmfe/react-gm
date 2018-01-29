import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {findDOMNode} from 'react-dom';
import {contains} from 'gm-util';

const findItemByValueFromList = (childrenList, val) => {
	let ret = null;
	React.Children.map(childrenList, (el) => {
		if(el.type.displayName === 'Option') {
			const elProps = el.props;
			const elValue = elProps.value;
			
			if(elValue === val) {
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
		if(disabled) {
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
			disabled: elPropsDisabled,
			children: elPropsChildren
		} = elProps;
		
        if(elPropsDisabled) {
            return false;
        }
		
		const changeReturn = onChange && onChange(elPropsValue, elPropsChildren);
		
		if(changeReturn || changeReturn === undefined) {
			this.setState({show: false});
		} else {
			this.setState({show: true});
		}
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
        
        const selected = findItemByValueFromList(children, value);
		
		return (
			<div
				{...rest}
				className={classNames('gm-select', className, {
					'gm-select-open': show
				})}
			>
				<div
					className={classNames("gm-select-selection", {
						'disabled': disabled
					})}
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
						React.Children.map(children, (el) => {
							if(el.type.displayName === 'Option') {
								const {
									className,
									onClick, // eslint-disable-line
									...rest} = el.props;
								
								return React.cloneElement(el, Object.assign({}, {
										className: classNames(className, {
											'selected': rest.value === value
										}),
										onClick: this.handleOptionClick.bind(this, el.props)
									}, rest)
								);
							} else {
								return null;
							}
						})
					}
				</div>
			</div>
		);
	}
}

Select.displayName = 'Select';

Select.propTypes = {
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Select;