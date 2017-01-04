import React, {PropTypes} from 'react';

class InputNumber extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = ::this.handleChange;
    }

    handleChange(e) {
        const {max, min, precision, minus} = this.props;
        let value = e.target.value,
            figure = value;

        const reg = new RegExp("(^[1-9]\\d*(\\.\\d{0," + precision + "})?$)|(^0(\\.\\d{0," + precision + "})?$)");

        if (minus && value.indexOf('-') > -1) {
            // 去掉减号，然后去匹配正则
            figure = value.slice(1);
        }

        if (reg.test(figure) || figure === '') {
            const num = Number(value);

            if (max && num > max)
                this.props.onChange(max);
            else if (min && num < min)
                this.props.onChange(min);
            else
                this.props.onChange(value);
        } else if (/^0[1-9]/.test(value)) {
            // 如果第一个数字是0，第二个是1-9，则选取第二个数字
            this.props.onChange(value.substr(1));
        }
    }

    render() {
        const {
            precision, minus, // eslint-disable-line
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
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    max: PropTypes.number,
    min: PropTypes.number,
    precision: PropTypes.number, // 精确度，保留几位小数
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    minus: PropTypes.bool // 是否支持输入负数
};

InputNumber.defaultProps = {
    precision: 2,
    minus: false
};


export default InputNumber;