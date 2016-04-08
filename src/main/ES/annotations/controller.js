import angular from 'angular';

/**
 * Register a controller
 *
 * @returns {Function}
 * @param name
 */
function Controller(name) {
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
            .controller(name || target.name, target);
    }
}

export {Controller};
