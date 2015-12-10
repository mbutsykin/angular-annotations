import angular from 'angular';
import {getInjectableClass} from 'util/helpers';

/**
 * Register a service decorator
 *
 * @param params
 * @returns {Function}
 */
function decorator(params) {
    return target => {
        angular.module(params.module)
            .decorator(params.name, getInjectableClass(target));

        return target;
    };
}

export {decorator};