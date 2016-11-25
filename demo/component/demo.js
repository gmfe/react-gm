import React from 'react';
import {Switcher} from '../../src/index';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    render() {
        return (
            <div>
                <div>
                    <Switcher
                        type="primary"
                        checked={this.state.checked}
                        onChange={(checked) => this.setState({checked})}
                    />
                </div>
                <div>
                    <Switcher type="primary" disabled checked={!this.state.checked}/>
                </div>
                <div>
                    <Switcher
                        checked={this.state.checked}
                    />
                </div>
                <div>
                    <Switcher checked={!this.state.checked}/>
                </div>
            </div>
        );
    }
}

export default Demo;