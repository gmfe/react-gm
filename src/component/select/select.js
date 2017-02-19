import React, {PropTypes} from 'react';
import classNames from 'classnames';
import _ from 'underscore';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = ::this.handleChange;
        this.refSelect = null;
    }

    handleChange() {
        const {onChange, children, multiple} = this.props;
        const childList = _.isArray(children) ? children : [children];
        const result = [];
        _.each(this.refSelect.childNodes, (node, i) => {
            if (node.selected) {
                result.push(childList[i].props.value);
            }
        });
        onChange(multiple ? result : result[0]);
    }

    render() {
        const {
            value, multiple,
            onChange, // eslint-disable-line
            className,
            children,
            ...rest
        } = this.props;

        return (
            <select
                ref={ref => this.refSelect = ref}
                {...rest}
                multiple={multiple}
                value={value}
                onChange={this.handleChange}
                className={classNames('form-control', className)}
            >{children}</select>
        );
    }
}

Select.displayName = 'Select';

Select.propTypes = {
    multiple: PropTypes.bool,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired
};

Select.defaultProps = {
    multiple: false
};

export default Select;