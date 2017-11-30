import React from 'react';
import Popover from '../../src/component/popover';
import ColorPicker from '../../src/component/color_picker';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#8ED1FC'
        };
    }

    render() {
        return (
            <div style={{padding: '100px'}}>

                <Popover showArrow popup={<div>asdfasdfasdfadfasdafasf</div>}>
                    <button>afasdf</button>
                </Popover>

                <Popover showArrow right popup={<div>asdfasdfasdfadfasdafasf</div>}>
                    <button>right</button>
                </Popover>

                <Popover showArrow center popup={<div>asdfasdfasdfadfasdafasf</div>}>
                    <button>center</button>
                </Popover>

                <Popover showArrow top popup={<div>asdfasdfasdfadfasdafasf</div>}>
                    <button>top</button>
                </Popover>

                <Popover showArrow top right popup={<div>asdfasdfasdfadfasdafasf</div>}>
                    <button>top right</button>
                </Popover>

                <Popover showArrow top center popup={<div>asdfasdfasdfadfasdafasf</div>}>
                    <button>top center</button>
                </Popover>

                <Popover type="hover" popup={<div>asdfasdfasdfadfasdafasf</div>}>
                    <button>hover</button>
                </Popover>

                <Popover type="click" popup={<div>asdfasdfasdfadfasdafasf</div>}>
                    <button>click</button>
                </Popover>

                <ColorPicker
                    color={this.state.color}
                    onChange={color => {
                        console.log(color);
                        this.setState({color});
                    }}
                >
                    <button>color picker</button>
                </ColorPicker>
            </div>
        );
    }
}

export default Component;
