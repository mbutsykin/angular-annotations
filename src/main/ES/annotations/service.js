import angular from 'angular';

/**
 * Register a service constructor
 *
 * @param params
 * @returns {Function}
 */
function Service(params) {
    return target => {
        angular.module(params.module)
            .service(params.name || target.name, target);

        return target;
    };
}

export {Service};