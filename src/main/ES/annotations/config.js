import angular from 'angular';
import {getInjectableClass} from '../util/helpers';

/**
 * Register work which needs to be performed on module loading
 *
 * @returns {Function}
 */
function Config(target) {
    if (typeof target === 'function') {
        annotate(target);
        return arguments[0];
    }

    return target => {
        annotate(target);

        return target;
    };

    function annotate(target) {
        angular.module(target.moduleName)
            .config(getInjectableClass(target));
    }
}

export {Config};
