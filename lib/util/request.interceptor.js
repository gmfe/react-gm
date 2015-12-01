import _ from 'underscore';

var RequestInterceptor = (function(){
    var interceptors = []; // [{request: function(){}, response: function(){}, responseError: function(){}}]
    var id = 0;

    return {
        add: function (interceptor) {
            interceptor.__id = id++;
            interceptors.push(interceptor);
            return interceptor.__id;
        },
        remove: function (interceptorId) {
            interceptors = _.filter(interceptors, function (value) {
                return value.__id !== interceptorId;
            });
        },
        getInterceptors(){
            return interceptors;
        }
    };
})();

export default RequestInterceptor;
