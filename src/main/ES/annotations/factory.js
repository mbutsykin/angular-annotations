import angular from 'angular';
import {getInjectableClass} from 'util/helpers';

/**
 * Register a service factory
 *
 * @returns {Function}
 * @param name
 */
function Factory(name) {
    if (typeof name !== 'string') {
        annotate(name);
    }

    return target => {
        annotate(target, name);
        return target;
    };

    function annotate(target, name) {
        angular.module(target.moduleName)
            .factory(name || target.name, getInjectableClass(target));
    }
}

export {Factory};