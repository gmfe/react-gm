import React, {PropTypes} from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = ::this.handleChange;
    }

    handleChange(e) {
        const {type, trim} = this.props;
        let result = e.target.value;

        if (trim && type === 'text') {
            result = result.replace(/\s/g, "");
        }

        this.props.onChange(result);
    }

    render() {
        const {
            trim, // eslint-disable-line
            ...rest
        } = this.props;

        return (
            <input
                {...rest}
                onChange={this.handleChange}
            />
        );
    }
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    trim: PropTypes.bool //是否去掉空格
};

Input.defaultProps = {
    trim: false,
    type: "text"
};

export default Input;