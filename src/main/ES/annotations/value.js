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
            .constant(target.name, new target());

        return target;
    };
}

export {value};