import angular from 'angular';
import {getInjectableClass, pascalCaseToCamelCase} from 'util/helpers';

/**
 * Register a directive
 *
 * @param params
 * @returns {Function}
 */
function Directive(params) {
    return target => {
        angular.module(params.module)
            .directive(pascalCaseToCamelCase(params.selector || target.name), new target());

        return target;
    };
}

export {Directive};