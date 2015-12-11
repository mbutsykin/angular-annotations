import angular from 'angular';

/**
 * Register a controller
 *
 * @returns {Function}
 * @param name
 */
function Controller(name) {
    return target => {
        angular.module(target.moduleName)
            .controller(name || target.name, target);

        return target;
    };
}

export {Controller};