import angular from 'angular';
import {getInjectableClass} from 'util/helpers';

/**
 * Register a service factory
 *
 * @returns {Function}
 * @param name
 */
function Factory(name) {
    return target => {
        angular.module(target.moduleName)
            .factory(name || target.name, getInjectableClass(target));

        return target;
    };
}

export {Factory};