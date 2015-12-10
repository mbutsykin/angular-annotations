import angular from 'angular';

/**
 * Register a provider function
 *
 * @param params
 * @returns {Function}
 */
function Provider(params) {
    return target => {
        angular.module(params.module)
            .provider(params.name || target.name, target);

        return target;
    }
}

export {Provider};