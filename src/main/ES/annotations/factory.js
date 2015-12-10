import angular from 'angular';
import {getInjectableClass} from 'util/helpers';

/**
 * Register a service factory
 *
 * @param params
 * @returns {Function}
 */
function Factory(params) {
    return target => {
        angular.module(params.module)
            .factory(params.name || target.name, getInjectableClass(target));

        return target;
    };
}

export {Factory};