import angular from 'angular';
import {getInjectableClass} from 'util/helpers';

/**
 * Register work which needs to be performed on module loading
 *
 * @returns {Function}
 */
function Config() {
    return target => {
        angular.module(target.moduleName)
            .config(getInjectableClass(target));

        return target;
    };
}

export {Config};