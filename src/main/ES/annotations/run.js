import angular from 'angular';
import {getInjectableClass} from 'util/helpers';

/**
 * Register work which should be performed when the injector is done loading all modules
 *
 * @param params
 * @returns {Function}
 */
function Run(params) {
    return target => {
        angular.module(params.module)
            .run(getInjectableClass(target));

        return target;
    };
}

export {Run};