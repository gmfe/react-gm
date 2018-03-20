import React from 'react';
import Flex from '../flex';
import classNames from 'classnames';

class QuickDesc extends React.Component {
    render() {
        const {left, right, leftFlex, rightFlex, children} = this.props;

        return (
            <div className={classNames("gm-quick gm-quick-desc", this.props.className)}>
                <Flex>
                    <Flex flex={leftFlex || 2} alignCenter className="gm-quick-desc-title">
                        {left}
                    </Flex>
                    <Flex flex={rightFlex || 10} alignCenter className="gm-padding-left-5">
                        <div className="gm-border-left gm-padding-left-15" style={{height: '40px'}}/>
                        {right ? React.cloneElement(right, {
                            className: "gm-quick-desc-right-box gm-padding-tb-10 " + (right.props.className || '')
                        }) : null}
                    </Flex>
                </Flex>
                {children && (
                    <Flex className="gm-border-top gm-padding-tb-15">
                        {children}
                    </Flex>
                )}
            </div>
        );
    }
}

export default QuickDesc;
