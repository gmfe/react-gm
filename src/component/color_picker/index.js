import React from 'react';
import PropTypes from 'prop-types';
import Trigger from '../trigger';
import Flex from '../flex';
import _ from 'lodash';

const colorList = [
    '#FF6900',
    '#FCB900',
    '#7BDCB5',
    '#00D084',
    '#8ED1FC',
    '#0693E3',
    '#ABB8C3',
    '#EB144C',
    '#F78DA7',
    '#9900EF'
];

class Color extends React.Component {
    render() {
        const {color = '', onChange} = this.props;

        return (
            <Flex wrap className="gm-color-picker">
                {_.map(colorList, v => (
                    <div
                        key={v}
                        style={{
                            background: v
                        }}
                        onClick={() => onChange(v)}
                    />
                ))}
                <div className="gm-color-picker-addon">#</div>
                <input type="text" value={color.replace('#', '')} onChange={e => onChange(e.target.value)}/>
            </Flex>
        );
    }
}

class ColorPicker extends React.Component {
    render() {
        const {color, onChange, children} = this.props;

        return (
            <Trigger
                type="hover"
                showArrow
                component={<div/>}
                popup={(
                    <Color color={color} onChange={onChange}/>
                )}
            >
                {children}
            </Trigger>
        );
    }
}

ColorPicker.propTypes = {
    color: PropTypes.string,
    onChange: PropTypes.func
};

ColorPicker.deaultProps = {
    onChange: _.noop
};

export default ColorPicker;