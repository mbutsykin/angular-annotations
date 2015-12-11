import angular from 'angular';

/**
 * Register a value service
 *
 * @returns {Function}
 * @param name
 */
function Value(name) {
    return target => {
        angular.module(target.moduleName)
            .value(name || target.name, new target());

        return target;
    };
}

export {Value};