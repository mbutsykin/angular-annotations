import angular from 'angular';
import {getInjectableClass} from 'util/helpers';

/**
 * Register work which should be performed when the injector is done loading all modules
 *
 * @returns {Function}
 */
function Run(target) {
    if (typeof target === 'function') {
        annotate(target);
    }

    return target => {
        annotate(target);
        return target;
    };

    function annotate(target) {
        angular.module(target.moduleName)
            .run(getInjectableClass(target));
    }
}

export {Run};