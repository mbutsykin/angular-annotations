import angular from 'angular';

/**
 * Register a constant service
 *
 * @returns {Function}
 * @param name
 */
function Constant(name) {
    return target => {
        angular.module(target.moduleName)
            .constant(name || target.name, new target());

        return target;
    };
}

export {Constant};