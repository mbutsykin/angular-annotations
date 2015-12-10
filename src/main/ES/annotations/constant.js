import angular from 'angular';

/**
 * Register a constant service
 *
 * @param params
 * @returns {Function}
 */
function constant(params) {
    return target => {
        angular.module(params.module)
            .constant(params.name || target.name, new target());

        return target;
    };
}

export {constant};