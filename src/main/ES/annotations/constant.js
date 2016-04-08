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
        return arguments[0];
    }

    return target => {
        target.ng_name = name;
        annotate(target, name);
        return target;
    };

    function annotate(target, name) {
        angular.module(target.moduleName)
            .constant(name || target.name, new target());
    }
}

export {Constant};
