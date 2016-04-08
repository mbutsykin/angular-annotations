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
        return arguments[0];
    }

    return target => {
        target.ng_name = name;
        annotate(target, name);
        return target;
    };

    function annotate(target, name) {
        angular.module(target.moduleName)
            .provider(name || target.name, target);
    }
}

export {Provider};
