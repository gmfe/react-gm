import React from 'react';
class Home extends React.Component {
    render() {
        return (
            <div>
                <h1 id="home">介绍</h1>
                <div>
                    <div>具体组件的demo和说明都在代码和注释中体现，请阅读。</div>
                    <span>愿景：致力于快速搭建项目，像搭积木一样</span>
                    <img src="./images/logo.png" style={{height: '50px'}}/>
                    <span className="gm-text-desc">+</span>
                    <img src="./images/react.svg" style={{height: '50px'}}/>
                    <span className="gm-text-desc">+</span>
                    <img src="./images/chrome.jpeg" style={{height: '50px'}}/>
                </div>
                <div>
                    <h2 id="dependencies">依赖</h2>
                    <span>react react-dom</span>
                    <br/>
                    <a href="http://react-bootstrap.github.io/" target="_blank">react-bootstrap</a>
                    <br/>
                    <span>classnames</span>
                    <br/>
                    <span>underscore</span>
                    <br/>
                    <span>moment</span>
                    <br/><br/>
                    <a href="http://getbootstrap.com/">bootstrap</a>
                    <br/>
                    <a href="https://github.com/gmfe/gm-bootstrap" target="_blank">gm-bootstrap主题</a>
                    <br/>
                </div>
            </div>
        );
    }
}

export default Home;