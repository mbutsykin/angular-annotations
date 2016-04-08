import angular from 'angular';

/**
 * Register a service constructor
 *
 * @returns {Function}
 * @param name
 */
function Service(name) {
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
            .service(name || target.name, target);
    }
}

export {Service};
