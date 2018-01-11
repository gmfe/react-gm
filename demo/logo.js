import React from 'react';
import _ from 'lodash';

const x = 50;

const pos = [
    [0, 9 * x],
    [0, 8 * x],
    [0, 7 * x],
    [0, 6 * x],
    [0, 5 * x],
    [0, 4 * x],
    [0, 3 * x],
    [0, 2 * x],
    [0, x],
    [0, 0],

    [x, 0],
    [2 * x, 0],
    [3 * x, 0],
    [3 * x, 0],
    [4 * x, 0],
    [5 * x, 0],
    [6 * x, 0],
    [7 * x, 0],
    [8 * x, 0],
    [9 * x, 0],

    [9 * x, x],
    [9 * x, 2 * x],
    [9 * x, 3 * x],
    [9 * x, 4 * x],
    [9 * x, 5 * x],
    [9 * x, 6 * x],
    [9 * x, 7 * x],
    [9 * x, 8 * x],
    [9 * x, 9 * x],

    [8 * x, 9 * x],
    [7 * x, 9 * x],
    [6 * x, 9 * x],
    [5 * x, 9 * x],
    [4 * x, 9 * x],
    [3 * x, 9 * x],

    [3 * x, 8 * x],
    [4 * x, 7.5 * x],
    [5 * x, 7 * x],
    [6 * x, 6.5 * x],
    [7 * x, 6 * x],

    [7 * x, 5 * x],
    [6 * x, 5 * x],
    [5 * x, 5 * x],
    [4 * x, 5 * x],
    [3 * x, 5 * x],

    [3 * x, 4 * x],
    [4 * x, 3.5 * x],
    [5 * x, 3 * x],
    [6 * x, 2.5 * x],
    [7 * x, 2 * x]

];

class Logo extends React.Component {
    render() {
        return (
            <div className="b-logo">
                {_.map(pos, (v, i) => (
                    <div key={i} className="b-logo-item" style={{
                        background: '#' + parseInt(Math.random() * 666),
                        top: v[0],
                        left: v[1]
                    }}/>
                ))}
            </div>
        );
    }
}

export default Logo;