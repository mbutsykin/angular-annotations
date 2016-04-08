import angular from 'angular';

/**
 * Register a value service
 *
 * @returns {Function}
 * @param name
 */
function Value(name) {
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
            .value(name || target.name, new target());
    }
}

export {Value};
