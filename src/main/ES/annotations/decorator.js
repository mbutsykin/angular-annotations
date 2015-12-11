import angular from 'angular';
import {getInjectableClass} from 'util/helpers';

/**
 * Register a service decorator
 *
 * @returns {Function}
 * @param name
 */
function Decorator(name) {
    return target => {
        angular.module(target.moduleName)
            .decorator(name || target.name, getInjectableClass(target));

        return target;
    };
}

export {Decorator};