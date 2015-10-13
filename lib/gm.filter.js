import moment from 'moment';

var DateFilter = function (value, format) {
    return moment(value).format(format);
};

var FilterFactory = function (type) {

    switch (type) {
        case 'date':
            return DateFilter();
        default:
            return function(value){
                return value;
            };
    }
};

var Filter = FilterFactory;

export default Filter;