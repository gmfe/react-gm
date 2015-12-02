import _ from 'underscore';

var RequestInterceptor = (function () {
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

        // 私有方法,谁用谁死
        interceptor: {
            request: function (config) {
                var promise = Promise.resolve(config);
                _.each(interceptors, function (value) {
                    if (value.request) {
                        promise = promise.then(function (_config) {
                            // 如果request不按规范来,啥也不做. 则默认放回 config
                            return value.request(_config) || config;
                        });
                    }
                });

                return promise;
            },
            response: function (json) {
                var promise = Promise.resolve(json);
                _.each(interceptors, function (value) {
                    if (value.response) {
                        promise = promise.then(function (json) {
                            // 如果response不按规范来,啥也不做. 则默认放回json
                            return value.response(json) || json;
                        });
                    }
                });

                return promise;
            },
            responseError: function (reason) {
                var promise = Promise.reject(reason);
                _.each(interceptors, function (value) {
                    if (value.responseError) {
                        promise = promise.catch(function (reason) {
                            // 如果responseError不按规范来,啥也不做. reason
                            return value.responseError(reason) || reason;
                        });
                    }
                });

                return promise;
            }
        }
    };
})();

export default RequestInterceptor;
