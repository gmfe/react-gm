import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

const x = 50;

const imgList = [
    'https://avatars2.githubusercontent.com/u/25808269',
    'https://avatars0.githubusercontent.com/u/17408141',
    'https://avatars0.githubusercontent.com/u/7132998',
    'https://avatars0.githubusercontent.com/u/16329365',
    'https://avatars0.githubusercontent.com/u/19571458',
    'https://avatars0.githubusercontent.com/u/16111331',
    'https://avatars0.githubusercontent.com/u/12586787',
    'https://avatars0.githubusercontent.com/u/1010130',
    'https://avatars0.githubusercontent.com/u/3454198'
];

const posList = [
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

    [4 * x, 8 * x],
    [5 * x, 7.5 * x],
    [6 * x, 7 * x],
    [7 * x, 6.5 * x],

    [7 * x, 5.5 * x],
    [6 * x, 5.5 * x],
    [5 * x, 5.5 * x],
    [4 * x, 5.5 * x],

    [4 * x, 4.5 * x],
    [5 * x, 4 * x],
    [6 * x, 3.5 * x],
    [7 * x, 3 * x]
];

function getImage(i) {
    return imgList[i % imgList.length];
}

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({show: true});
        }, this.props.index * 50);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        const {pos, index} = this.props;
        return (
            <img src={getImage(index)} className={classNames("b-logo-item", {
                'b-logo-item-show': this.state.show
            })} style={{
                top: pos[0],
                left: pos[1]
            }}/>
        );
    }
}

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({show: false});
        }, posList.length * 50 + 2000);
    }

    render() {
        if (!this.state.show) {
            return null;
        }

        return (
            <div className="b-logo" onClick={() => this.setState({show: false})}>
                {_.map(posList, (v, i) => (
                    <Image key={i} index={i} pos={v}/>
                ))}
            </div>
        );
    }
}

export default Logo;