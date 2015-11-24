import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';


var tipContainerId = '_gm_tips_container' + (Math.random() + '').slice(2);
var tipsContainer = document.getElementById(tipContainerId);
if (!tipsContainer) {
    tipsContainer = document.createElement('div');
    tipsContainer.className = 'gm-tips';
    tipsContainer.id = tipContainerId;
    document.body.appendChild(tipsContainer);
}

var TipStatic = {
    tip: function (options) {
        var _b_onClose = options.onClose;
        var div = document.createElement('div');
        div.className = 'gm-tips-cell';
        tipsContainer.appendChild(div);

        options.onClose = function () {
            tipsContainer.removeChild(div);
            if (_b_onClose) {
                _b_onClose();
            }
        };
        ReactDOM.render(<TipOverlay {...options} />, div);
    },
    success: function (options) {
        options.type = 'success';
        TipStatic.tip(options);
    },
    info: function (options) {
        options.type = 'info';
        TipStatic.tip(options);
    },
    warning: function (options) {
        options.type = 'warning';
        TipStatic.tip(options);
    },
    danger: function (options) {
        options.type = 'danger';
        TipStatic.tip(options);
    }
};

var TipOverlay = React.createClass({
    getDefaultProps: function () {
        return {
            time: 3000
        };
    },
    render: function () {
        return (
            <div ref="tipOverlay" className="animated fadeInRight">
                <Tip key="tip" title={this.props.title} type={this.props.type}
                     onClose={this.handleClose}>{this.props.text}</Tip>
            </div>
        );
    },
    componentDidMount: function () {
        var t = this;
        if (t.props.time) {
            t.timer = setTimeout(function () {
                t.fadeOut();
            }, t.props.time)
        }
    },
    componentWillUnmount: function () {
        clearTimeout(this.timer);
    },
    handleClose: function () {
        this.fadeOut();
    },
    fadeOut: function () {
        var t = this;
        if (!t.hasClosed) {
            t.hasClosed = true;
            t.props.onClose();
        }
    }
});

var Tip = React.createClass({
    statics: TipStatic,
    getDefaultProps: function () {
        return {
            title: '',
            type: 'info',
            onClose: function () {
            }
        };
    },
    render: function () {
        var iconClassName = {
            success: 'fa-check-circle',
            info: 'fa-info-circle',
            warning: 'fa-question-circle',
            danger: 'fa-exclamation-circle'
        };

        return (
            <div className="gm-tip panel panel-default">
                <button type="button" className="close" onClick={this.handleClose}><span>&times;</span></button>
                <i className={"fa fa-2x text-" + this.props.type + ' ' + iconClassName[this.props.type]}></i>
                <div className="panel-body">
                    {this.props.title ? <div><strong>{this.props.title}</strong></div> : undefined}
                    {this.props.children}
                </div>
            </div>
        );
    },
    handleClose: function () {
        this.props.onClose();
    }
});

export default Tip;