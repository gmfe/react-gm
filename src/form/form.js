import React, {PropTypes} from 'react';
import classNames from 'classnames';
import _ from 'underscore';

import './style.less';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = ::this.handleSubmit;
        this.state = {
            canValidate: false
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            canValidate: true
        });

        this.props.onSubmit(e);
    }

    render() {
        const {
            inline,
            horizontal,
            labelWidth,
            className,
            children,
            ...rest
        } = this.props;

        let childList = _.isArray(children) ? children : [children];

        childList = _.map(childList, (child, i) => {
            return child.type.displayName === 'FormItem' ? React.cloneElement(child, {
                key: i,
                horizontal,
                inline,
                labelWidth,
                canValidate: this.state.canValidate
            }) : child;
        });

        return (
            <form
                {...rest}
                className={classNames('gm-form', {
                    'form-inline': inline,
                    'form-horizontal': horizontal
                }, className)}
                onSubmit={this.handleSubmit}
            >
                {childList}
            </form>
        );
    }
}

Form.propTypes = {
    inline: PropTypes.bool,
    horizontal: PropTypes.bool,
    labelWidth: PropTypes.string, // horizontal true 才有效
    onSubmit: PropTypes.func // 默认处理了 preventDefault
};

Form.defaultProps = {
    inline: false,
    horizontal: false,
    onSubmit: _.noop
};

export default Form;