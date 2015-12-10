import angular from 'angular';
import {getInjectableClass} from 'util/helpers';

/**
 * Register a service factory
 */
function factory(params) {
    return target => {
        angular.module(params.module)
            .factory(target.name, getInjectableClass(target));

        return target;
    };
}

export {factory};