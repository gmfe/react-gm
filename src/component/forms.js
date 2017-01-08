import React, {PropTypes} from 'react';
import classNames from 'classnames';
import _ from 'underscore';

const noop = function () {
};

const isArray = function (obj) {
    return window.toString.call(obj) === '[object Array]';
};

class FormControl extends React.Component {
    renderCheckboxRadio(type, inline) {
        const {
            children
        } = this.props;

        if (inline) {
            return (
                <div className={type}>
                    {_.map(children, (child, i) => React.cloneElement(child, {
                        key: i,
                        className: classNames(type + '-inline', child.props.className)
                    }))}
                </div>
            );
        } else {
            return (
                <div>
                    {_.map(children, (child, i) => (
                        <div key={i} className={type}>
                            {child}
                        </div>
                    ))}
                </div>
            );
        }
    }

    render() {
        const {
            children,
            checkbox,
            checkboxInline,
            radio,
            radioInline
        } = this.props;

        if (checkbox || radio) {
            return this.renderCheckboxRadio(checkbox ? 'checkbox' : 'radio', checkboxInline || radioInline);
        }

        const {className} = children.props;

        let child = children;

        if (child.type === 'input') {
            return React.cloneElement(child, {
                className: classNames('form-control', className)
            });
        } else if (child.type === 'textarea') {
            return React.cloneElement(child, {
                className: classNames('form-control', className)
            });
        } else if (child.type === 'select') {
            return React.cloneElement(child, {
                className: classNames('form-control', className)
            });
        }

        return child;
    }
}

class FormItem extends React.Component {
    render() {
        const {
            label,
            labelCol,
            horizontal,
            required,
            checkbox, checkboxInline,
            radio, radioInline,
            desc,
            className,
            children,
            ...rest
        } = this.props;

        let control = (
            <FormControl
                checkbox={checkbox}
                checkboxInline={checkboxInline}
                radio={radio}
                radioInline={radioInline}
            >{children}</FormControl>
        );

        return (
            <div {...rest} className={classNames('form-group', className)}>
                <label className={classNames({
                    ['control-label col-sm-' + labelCol]: horizontal
                })}>
                    {required ? <span style={{color: 'red'}}>*</span> : ''}
                    {label}
                </label>
                {horizontal ? (
                    <div className={'col-sm-' + (12 - labelCol)}>
                        {control}
                    </div>
                ) : control}
                <div className="gm-text-desc">{desc}</div>
            </div>
        );
    }
}

FormItem.displayName = 'FormItem';
FormItem.propTypes = {
    label: PropTypes.string,
    labelCol: PropTypes.number, // horizontal true 才有效， 可由Form传过来
    horizontal: PropTypes.bool, // 由Form传过来
    required: PropTypes.bool,
    checkbox: PropTypes.bool,
    checkboxInline: PropTypes.bool,
    radio: PropTypes.bool,
    radioInline: PropTypes.bool,
    desc: PropTypes.any
};

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = ::this.handleSubmit;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(e);
    }

    render() {
        const {
            inline,
            horizontal,
            labelCol,
            className,
            children,
            ...rest
        } = this.props;

        let childList = isArray(children) ? children : [children];

        childList = _.map(childList, (child, i) => {
            return React.cloneElement(child, {
                key: i,
                horizontal,
                labelCol
            });
        });

        return (
            <form
                {...rest}
                className={classNames({
                    'form-inline': inline,
                    'form-horizontal': horizontal
                }, className)}
                onSubmit={this.handleSubmit}
            >
                {childList}
            </form>
        );
    }

    // 暴露的方法
    validateAll() {

    }

    validateFieldsAndScroll() {

    }

    resetFields() {

    }
}

Form.propTypes = {
    inline: PropTypes.bool,
    horizontal: PropTypes.bool,
    labelCol: PropTypes.number, // horizontal true 才有效
    onSubmit: PropTypes.func
};

Form.defaultProps = {
    inline: false,
    horizontal: false,
    onSubmit: noop
};

Object.assign(Form, {
    FormItem
});

export default Form;