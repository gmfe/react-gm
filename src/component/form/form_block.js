import React from 'react';
import Flex from '../flex';
import _ from 'lodash';

class FormBlock extends React.Component {
    render() {
        let {
            children,
            ...rest
        } = this.props;

        console.log(rest);

        return (
            <Flex className="gm-form-block">
                {_.map(children, (child, i) => {
                    return (
                        <Flex flex key={i}>
                            {child !== null && child !== undefined && child.type.displayName === 'FormItem' ? React.cloneElement(child, {
                                ...rest
                            }) : child}
                        </Flex>
                    );
                })}
            </Flex>
        );
    }
}

FormBlock.displayName = 'FormBlock';

export default FormBlock;