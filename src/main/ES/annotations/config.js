import angular from 'angular';
import {getInjectableClass} from 'util/helpers';

/**
 * Register work which needs to be performed on module loading
 *
 * @param params
 * @returns {Function}
 */
function config(params) {
    return target => {
        angular.module(params.module)
            .config(getInjectableClass(target));

        return target;
    };
}

export {config};