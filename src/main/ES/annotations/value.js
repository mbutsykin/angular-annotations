import angular from 'angular';

/**
 * Register a value service
 *
 * @param params
 * @returns {Function}
 */
function value(params) {
    return target => {
        angular.module(params.module)
            .value(params.name || target.name, new target());

        return target;
    };
}

export {value};