import React, {PropTypes} from 'react';

class InputNumber extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = ::this.handleChange;
    }

    handleChange(e) {
        const {max, min, precision} = this.props;
        let value = e.target.value;

        const reg = new RegExp("(^[1-9]\\d*(\\.\\d{0," + precision + "})?$)|(^0(\\.\\d{0," + precision + "})?$)");

        if (reg.test(value) || value === '') {
            const num = Number(value);


            if (max && num > max)
                this.props.onChange(max);
            else if (min && num < min)
                this.props.onChange(min);
            else
                this.props.onChange(value);
        }
    }

    render() {
        const {
            precision, // eslint-disable-line
            ...rest
        } = this.props;

        return (
            <input
                {...rest}
                type="text"
                onChange={this.handleChange}
            />
        );
    }
}

InputNumber.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    max: React.PropTypes.number,
    min: React.PropTypes.number,
    precision: React.PropTypes.number, // 精确度，保留几位小数
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    className: React.PropTypes.string
};

InputNumber.defaultProps = {
    precision: 2
};


export default InputNumber;