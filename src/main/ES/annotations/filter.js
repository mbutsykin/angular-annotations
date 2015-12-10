import angular from 'angular';
import {getInjectableClass} from 'util/helpers';

/**
 * Register a filter
 */
function filter(params) {
    return target => {
        angular.module(params.module)
            .filter(params.name || target.name, getInjectableClass(target));

        return target;
    };
}

export {filter};