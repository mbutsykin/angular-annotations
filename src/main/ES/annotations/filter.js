import angular from 'angular';
import {getInjectableClass} from '../util/helpers';

/**
 * Register a filter
 *
 * @returns {Function}
 * @param name
 */
function Filter(name) {
    if (typeof name !== 'string') {
        annotate(name);
    }

    return target => {
        annotate(target, name);
        return target;
    };

    function annotate(target, name) {
        angular.module(target.moduleName)
            .filter(name || target.name, getInjectableClass(target));
    }
}

export {Filter};