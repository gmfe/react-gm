import React from 'react';
import _ from 'underscore';
var AdvanceSelect = React.createClass({
    getDefaultProps: function(){
        return {
            onValueChange: null,
            onFilterData: null,
            inputClassName: 'form-control',
            inputStyleName: {}
        }
    },

    getInitialState: function(){
        let propsData = this.processInitData();
        return Object.assign({}, propsData, {opened: false,});
    },

    componentDidMount: function() {
        document.addEventListener('click', this._close);
    },

    componentWillUnmount: function(){
        document.removeEventListener('click', this._close);
    },

    componentWillReceiveProps: function(nextProps){
        this.setState({
            list: nextProps.list,
            selectedIndex: this.getValueAndIndex(nextProps).selectedIndex,
            inputValue: this.getValueAndIndex(nextProps).inputValue,
            selectedValue: this.getValueAndIndex(nextProps).selectedValue
        })
    },

    processInitData: function(){
        let self = this;
        let p = self.props;
        let list = p.list || [], value = p.value, id = p.id;
        let selectedValue = "", inputValue = "", selectedIndex = 0;
        let keys = {
            ESC: 27,
            TAB: 9,
            RETURN: 13,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            ENTER: 13,
            SHIFT: 16
        };

        if (0 != list.length) {
            selectedValue = list[0].value;
            inputValue = list[0].name;
            if (value) {
                list.forEach(function(data, index){
                    if (data.value == value) {
                        selectedValue = value;
                        selectedIndex = index;
                        inputValue = data.name;
                        return;
                    }
                });
            }
        };

        return {
            id: id,
            list: list,
            selectedValue: selectedValue,
            selectedIndex: selectedIndex,
            inputValue: inputValue,
            keys: keys
        };
    },

    getValueAndIndex: function(nextProps){
        let list = nextProps.list;
        let selectedValue = "", inputValue = "", selectedIndex = 0;
        if (0 != list.length) {
            selectedValue = list[0].value;
            inputValue = list[0].name;
            if (nextProps.value) {
                list.forEach(function(data, index){
                    if (data.value == nextProps.value) {
                        selectedValue = nextProps.value;
                        selectedIndex = index;
                        inputValue = data.name;
                        return;
                    }
                });
            }

        };
        return {inputValue: inputValue, selectedIndex: selectedIndex, selectedValue: selectedValue}
    },

    render: function(){
        let list = this.state.list,
            selectedIndex = this.state.selectedIndex,
            inputValue = this.state.inputValue;
        let inputClass = "gm-input " + this.props.inputClassName;
        let inputStyle = this.props.inputStyleName;
        let optionList = list.map((data, i) => {
            return (<li className={(selectedIndex == i) ? "option-item option-hover option-selected" : "option-item"}
                        value={data.value} key={data.value} onClick={this.selectOption.bind(this, data, i)}>{data.name}</li>)
        });

        return (
            <div className={this.state.opened ? "gm-select gm-open" : "gm-select"}>
                <div className="gm-arrow" onClick={this.handleArrow}></div>
                <ul className="gm-dropdown">
                    {optionList}
                </ul>
                <input id={this.state.id} ref="input" type="text" className={inputClass} style={inputStyle} value={inputValue}
                       onChange={this.changeInputValue} onKeyUp={this._keyup} onKeyDown={this._keydown} onClick={this._open}></input>
            </div>
        );
    },

    handleArrow: function(event){
        if(0 == this.state.list.length){
            this.setState({
                inputValue: this.props.list ? this.props.list[0].name : ""
            });
            this._filter("");
        }
        this.setState({
            opened: !this.state.opened
        });
        event.nativeEvent.stopImmediatePropagation();
    },

    _open: function(event){
        this.refs.input.select();

        this.setState({
            opened: true
        });
        event.nativeEvent.stopImmediatePropagation();
    },

    _close: function(){
        this.setState({
            opened: false
        });
    },

    changeInputValue: function(){
        this.setState({
            inputValue: this.refs.input.value
        });
    },

    selectOption: function(data, index){
        let inputValue = data.name;

        if (inputValue != this.refs.input.value && this.props.onValueChange) {
            this.props.onValueChange(this.state.id, data.value);
        };

        this.setState({
            inputValue: inputValue,
            selectedIndex: index,
            selectedValue: data.value,
            opened: false
        })
    },

    _keyup: function(event){
        let keys = this.state.keys;
        switch(event.which){
            case keys.ESC:
                this._close
                break;

            case keys.ENTER:
            case keys.UP:
            case keys.DOWN:
            case keys.LEFT:
            case keys.RIGHT:
            case keys.TAB:
            case keys.SHIFT:
                break;

            default:
                this._filter(event.target.value)
                break;
        }
    },


    _keydown: function(event){
        if (this.state.opened) {
            let keys = this.state.keys,
                index = this.state.selectedIndex;
            switch(event.which){

                case keys.UP:
                    this._move('up', index)
                    break;

                case keys.DOWN:
                    this._move('down', index)
                    break;

                case keys.TAB:
                    this._enter(index)
                    break;

                case keys.ENTER:
                    this._enter(index);
                    break;

                default:
                    break;
            }
        }
        else{
            this.setState({
                opened: true
            })
        }

    },

    _enter: function(index){
        if (this.state.list[index].name != this.refs.input.value && this.props.onValueChange) {
            this.props.onValueChange(this.state.id, this.state.list[index].value);
        };
        this.setState({
            inputValue: this.state.list[index].name,
            selectedIndex: index,
            selectedValue: this.state.list[index].value,
            opened: false
        })
    },

    _move: function(dir, i){

        let index = i,
            total = this.state.list.length;

        switch(dir){
            case 'up':
                index--;
                (index < 0) && (index = 0);
                break;

            case 'down':
                index++;
                (index >= total) && (index = total - 1);
                break;
        }

        this.setState({
            selectedIndex: index
        })
    },

    _filter: function(search){
        if(this.props.onFilterData){
            this.setState({
                list: this.props.onFilterData(search)
            })
        }
    },

});

export default AdvanceSelect;