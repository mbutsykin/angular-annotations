import angular from 'angular';

/**
 * Register a provider function
 *
 * @returns {Function}
 * @param name
 */
function Provider(name) {
    if (typeof name !== 'string') {
        annotate(name);
    }

    return target => {
        annotate(target, name);
        return target;
    };

    function annotate(target, name) {
        angular.module(target.moduleName)
            .provider(name || target.name, target);
    }
}

export {Provider};