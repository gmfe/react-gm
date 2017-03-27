import React, {PropTypes} from 'react';
import className from 'classnames';

class Collapse extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsing: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.in !== this.props.in) {
            clearTimeout(this.timer);

            this.setState({
                collapsing: true
            }, () => {
                this.timer = setTimeout(() => {
                    this.setState({
                        collapsing: false
                    });
                }, 350);
            });
        }
    }

    render() {
        const {children, ...rest} = this.props;

        return (
            <div {...rest}
                 className={className('gm-collapse', this.props.className, {
                     'in': this.props.in && !this.state.collapsing,
                     'gm-collapsing': this.state.collapsing
                 })}>
                {children}
            </div>
        );
    }
}

Collapse.propTypes = {
    in: PropTypes.bool.isRequired,
    collapsing: PropTypes.bool
};

export default Collapse;