import React from 'react';

var Form = React.createClass({
    getDefaultProps: function () {
        return {
            onSubmit: function () {
                
            }
        };
    },
    render: function () {
        return (
            <form {...this.props} onSubmit={this.onSubmit} noValidate>
                {this.props.children}
            </form>
        )
    },
    onSubmit: function (event) {
        event.preventDefault();
        this.props.onSubmit(event);
    }
});

var FieldMixin = {
    beforeField: function () {
        var label = this.props.label || this.props.name;
        // id 经常会频繁切换，估不换。
        var id = this.___filed_id || ('formerId' + (Math.random() + '').slice(2));
        this.___filed_id = id;

        var props = Object.assign({
            id: id,
            className: 'form-control'
        }, this.props);
        if (props.className.indexOf('form-control') === -1) {
            props.className = 'form-control ' + props.className;
        }

        return {
            label,
            props
        };
    }
};

var Input = React.createClass({
    mixins: [FieldMixin],
    render: function () {
        var field = Object.assign(this.beforeField(), {
            value: '',
            type: 'text'
        }, this.props);

        // 注意，input不能有children，否则很奇怪。
        var props = Object.assign({}, field.props);
        delete props.children;

        return (
            <div className="form-group">
                <label htmlFor={field.props.id}>{field.label}</label>
                <input {...props} />
                {this.props.children}
            </div>
        );
    }
});

var Select = React.createClass({
    mixins: [FieldMixin],
    render: function () {
        var field = Object.assign(this.beforeField(), {
            value: '',
            options: []
        }, this.props);

        var options = field.props.options.map(function (ele, i) {
            if (typeof ele !== 'object') {
                ele = {
                    value: ele,
                    text: ele
                };
            }
            return (<option key={i} value={ele.value}>{ele.text}</option>);
        });

        delete field.props.options;
        return (
            <div className="form-group">
                <label htmlFor={field.props.id}>{field.label}</label>
                <select {...field.props}>
                    {this.props.children}
                    {options}
                </select>
            </div>
        );
    }
});

var Former = Form;
Object.assign(Former, {
    Input,
    Select
});

export default Former;