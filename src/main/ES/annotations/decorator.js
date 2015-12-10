import angular from 'angular';
import {getInjectableClass} from 'util/helpers';

/**
 * Register a service decorator
 *
 * @param params
 * @returns {Function}
 */
function Decorator(params) {
    return target => {
        angular.module(params.module)
            .decorator(params.name || target.name, getInjectableClass(target));

        return target;
    };
}

export {Decorator};