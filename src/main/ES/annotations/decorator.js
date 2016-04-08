import angular from 'angular';
import {getInjectableClass} from '../util/helpers';

/**
 * Register a service decorator
 *
 * @returns {Function}
 * @param name
 */
function Decorator(name) {
    if (typeof name !== 'string') {
        annotate(name);
        return arguments[0];
    }

    return target => {
        target.ng_name = name;
        annotate(target, name);
        return target;
    };

    function annotate(target, name) {
        angular.module(target.moduleName)
            .decorator(name || target.name, getInjectableClass(target));
    }
}

export {Decorator};
