import React from 'react';
import Flex from '../flex';

class Divider extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <Flex className="gm-divider">
                <Flex flex className="gm-divider-line"/>
                <div className="gm-padding-lr-10">
                    {typeof children === 'string' ? <h4>{children}</h4> : children}
                </div>
                <Flex flex className="gm-divider-line"/>
            </Flex>
        );
    }
}

export default Divider;