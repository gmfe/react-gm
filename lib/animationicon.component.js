import React from 'react';

var AnimationIcon = React.createClass({
    getInitialState() {
        return {
            state: (this.props.state ? this.props.state : 'rolling'),
            rolling: true
        };
    },
    render() {
        var iconState = this.state.state;
        var pathDOMClass = 'roll';
        var polylineDOMClass = '';
        var gDOMClass = '';
        var svgDOMClass = '';
        var circleDOMClass ='';

        switch (iconState) {
            case 'success':
                svgDOMClass = 'animation-icon'
                pathDOMClass = 'hide-path success';
                polylineDOMClass = 'show';
                gDOMClass = '';
                circleDOMClass = 'show-circle success'
                break;
            case 'error':
                svgDOMClass = 'animation-icon'
                pathDOMClass = 'hide-path';
                polylineDOMClass = '';
                gDOMClass = 'show';
                circleDOMClass = 'show-circle error'
                break;
            default:
                svgDOMClass = 'animation-icon roll'
                pathDOMClass = '';
                polylineDOMClass = '';
                gDOMClass = '';
                break;
        }

        return (
            <svg className={svgDOMClass} version="1.1" viewBox="0 0 100 100">
                <circle className={circleDOMClass} cx="50" cy="50" r="43" />
                <path className={pathDOMClass} d="M75.201,15.155C68.119,10.024,59.413,7,50,7C31.591,7,15.885,18.568,9.753,34.831" />
                <polyline className={polylineDOMClass} points="9.756,34.833 46.189,65.404 75.199,15.158" />
                <g className={gDOMClass}>
                    <line x1="31.209" y1="31.209" x2="68.791" y2="68.791" />
                    <line x1="31.209" y1="68.791" x2="68.791" y2="31.209" />
                </g>
            </svg>
        )
    },
    componentDidMount() {
        this.startInterval();
    },
    startInterval() {
        function animationLifeCircle() {
            switch(this.props.state) {
                case 'success':
                    this.setState({
                        state: 'success'
                    });
                    break;
                case 'error':
                    this.setState({
                        state: 'error'
                    });
                    break;
                default:
                    this.setState({
                        state: 'rolling'
                    });
                    setTimeout(animationLifeCircle.bind(this), 500);
                    break;
            }
        }

        setTimeout(animationLifeCircle.bind(this), 500);
    },
    componentWillReceiveProps(nextProps) {
        nextProps.state === 'rolling' && this.startInterval();
    }
});

export default AnimationIcon;