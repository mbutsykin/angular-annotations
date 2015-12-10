import angular from 'angular';
import {getInjectableClass} from 'util/helpers';

/**
 * Register a filter
 *
 * @param params
 * @returns {Function}
 */
function Filter(params) {
    return target => {
        angular.module(params.module)
            .filter(params.name || target.name, getInjectableClass(target));

        return target;
    };
}

export {Filter};