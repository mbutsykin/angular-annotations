import angular from 'angular';

/**
 * Register a service constructor
 *
 * @param params
 * @returns {Function}
 */
function service(params) {
    return target => {
        angular.module(params.module)
            .service(target.name, target);

        return target;
    };
}

export {service};