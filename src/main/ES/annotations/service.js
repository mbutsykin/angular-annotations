import angular from 'angular';

/**
 * Register a service constructor
 *
 * @returns {Function}
 * @param name
 */
function Service(name) {
    return target => {
        angular.module(target.moduleName)
            .service(name || target.name, target);

        return target;
    };
}

export {Service};