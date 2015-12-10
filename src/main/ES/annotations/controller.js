import angular from 'angular';

/**
 * Register a controller
 *
 * @param params
 * @returns {Function}
 */
function controller(params) {
    return target => {
        angular.module(params.module)
            .controller(params.name || target.name, target);

        return target;
    };
}

export {controller};