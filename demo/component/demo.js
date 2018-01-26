import React from 'react';
import {Popover} from '../../src/';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 2
            });
        }, 3000);
    }

    render() {

        console.log(this.state.count);

        return (
            <div>
                demo

                <Popover popup={<div>state {this.state.count}</div>}>
                    <div>asdf</div>
                </Popover>
            </div>
        );
    }
}

export default Component;
