import angular from 'angular';

/**
 * Register a constant service
 *
 * @returns {Function}
 * @param name
 */
function Constant(name) {
    if (typeof name !== 'string') {
        annotate(name);
    }

    return target => {
        annotate(target, name);
        return target;
    };

    function annotate(target, name) {
        angular.module(target.moduleName)
            .constant(name || target.name, new target());
    }
}

export {Constant};