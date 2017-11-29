import React from 'react';
import Popover from '../../src/component/popover';

class Component extends React.Component {

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
            </div>
        );
    }
}

export default Component;
