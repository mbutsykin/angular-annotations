import angular from 'angular';
import {getInjectableClass} from 'util/helpers';

/**
 * Register a filter
 *
 * @returns {Function}
 * @param name
 */
function Filter(name) {
    return target => {
        angular.module(target.moduleName)
            .filter(name || target.name, getInjectableClass(target));

        return target;
    };
}

export {Filter};