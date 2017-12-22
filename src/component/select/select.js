import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {findDOMNode} from 'react-dom';
import {contains} from 'gm-util';
import Option from './option';

const findItemByValueFromList = (childrenList, val) => {
	let ret = null;
	React.Children.map(childrenList, (el) => {
		if(el.type === Option) {
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
			show: false,
			value: null,
			selected: null
		};
		
		this.handleBodyClick = ::this.handleBodyClick;
		this.handleSelectionClick = ::this.handleSelectionClick;
	}
	
	componentDidMount() {
		const {children, value} = this.props;
		const selected = findItemByValueFromList(children, value);
		
		this.setState({
			value,
			selected
		});
		window.document.body.addEventListener('click', this.handleBodyClick);
	}
	
	componentWillReceiveProps(nextProps) {
		if(this.props.value !== nextProps.value) {
			const {children, value} = nextProps;
			
			const selected = findItemByValueFromList(children, value);
			this.setState({
				value: nextProps.value,
				selected
			});
		}
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
		const {onChange, disabled} = this.props;
		if(disabled) {
			return false;
		}
		
		const {value, children} = elProps;
		
		const changeReturn = onChange && onChange(value, children);
		
		if(changeReturn || changeReturn === undefined) {
			this.setState({show: false});
		} else {
			this.setState({show: true});
		}
	}
	
	render() {
		const {show, selected, value} = this.state;
		const {
			children,
			disabled,
			className,
			...rest
		} = this.props;
		
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
							if(el.type === Option) {
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