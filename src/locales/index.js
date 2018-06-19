import  * as lng from './lng';
let react_gm_lng = 'zh';

const setLocale = (lng) => {
    react_gm_lng = lng;
};

const getLocale = (component, text) => {
    const language = lng[react_gm_lng];
    return language[component][text];
};

export {
    setLocale,
    getLocale
};