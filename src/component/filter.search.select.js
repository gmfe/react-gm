import React, {PropTypes} from 'react';
import SearchSelect from './search.select';

class FilterSearchSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
        this.handleSearch = ::this.handleSearch;
    }

    handleSearch(query) {
        this.setState({
            query
        });
    }

    render() {
        const {
            list,
            onFilter,
            ...rest
        } = this.props;

        const {query} = this.state;
        let filterList = list;
        if (query) {
            filterList = onFilter(filterList, query);
        }
        return (
            <SearchSelect
                {...rest}
                list={filterList}
                onSearch={this.handleSearch}
            />
        );
    }
}
FilterSearchSelect.propTypes = {
    list: PropTypes.array.isRequired,
    isGroupList: PropTypes.bool,
    selected: PropTypes.any,
    onSelect: PropTypes.func.isRequired,
    onFilter: PropTypes.func.isRequired,
    delay: PropTypes.number,
    listMaxHeight: PropTypes.string,
    placeholder: PropTypes.string,
    isScrollToSelected: PropTypes.bool
};

export default FilterSearchSelect;