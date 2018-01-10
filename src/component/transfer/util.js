import _ from 'lodash';

function getLeaf(list, result = []) {
    _.each(list, v => {
        if (v.children) {
            getLeaf(v.children, result);
        } else {
            result.push(v);
        }
    });
    return result;
}

// 反正是写出来了，我也不知道啊
function filterListModify(list, what) {
    return _.filter(list, function (d) {
        if (d.children) {
            d.children = filterList(d.children, what);
        }

        if (d.children) {
            return !!d.children.length;
        } else {
            return what(d);
        }
    });
}


function filterList(list, what) {
    return filterListModify(_.cloneDeep(list), what);
}

export {
    getLeaf,
    filterList
};