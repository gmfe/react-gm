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

    validateAll() {
        const {children} = this.props;
        const helpList = [];

        let childList = _.isArray(children) ? children : [children];

        _.each(childList, child => {
            if (child.type.displayName === 'FormItem') {
                if (child.props.error) {
                    helpList.push({
                        label: child.props.label,
                        help: child.props.error
                    });
                } else if (child.props.validate) {
                    const help = child.props.validate();
                    if (help) {
                        helpList.push({
                            label: child.props.label,
                            help
                        });
                    }
                }
            }
        });

        return helpList.length === 0 ? 0 : helpList;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            canValidate: true
        });

        this.props.onSubmit(e);

        const err = this.validateAll();
        if (!err) {
            this.props.onSubmitValidated(err);
        }
    }

    render() {
        const {
            inline,
            horizontal,
            labelWidth,
            className,
            children,
            onSubmitValidated, //eslint-disable-line
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
    onSubmit: PropTypes.func, // 默认处理了 preventDefault,
    onSubmitValidated: PropTypes.func
};

Form.defaultProps = {
    inline: false,
    horizontal: false,
    onSubmit: _.noop,
    onSubmitValidated: _.noop
};

export default Form;