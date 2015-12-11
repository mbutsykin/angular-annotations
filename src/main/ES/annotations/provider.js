import angular from 'angular';

/**
 * Register a provider function
 *
 * @returns {Function}
 * @param name
 */
function Provider(name) {
    return target => {
        angular.module(target.moduleName)
            .provider(name || target.name, target);

        return target;
    }
}

export {Provider};