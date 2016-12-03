import React from 'react';

class NavConfig extends React.Component {
    render() {
        return (
            <div className="demo-left-nav">
                <h2>基础部分</h2>
                <ul>
                    <li><a href="#/standard/Color">颜色</a></li>
                    <li><a href="#/standard/Layout">常用布局</a></li>
                </ul>
            </div>
        );
    }
}

export default NavConfig;