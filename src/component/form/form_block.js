import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../flex';
import _ from 'lodash';

class FormBlock extends React.Component {
    render() {
        let {
            children,
            block,
            ...rest
        } = this.props;

        return (
            <Flex className="gm-form-block">
                {_.map(children, (child, i) => {
                    return (
                        <Flex flex={block[i] || 1} key={i}>
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

FormBlock.propTypes = {
    block: PropTypes.array
};

FormBlock.defaultProps = {
    block: []
};

export default FormBlock;