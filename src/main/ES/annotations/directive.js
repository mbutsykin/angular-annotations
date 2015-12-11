import angular from 'angular';
import {getInjectableClass, pascalCaseToCamelCase} from 'util/helpers';

/**
 * Register a directive
 *
 * @returns {Function}
 * @param selector
 */
function Directive(selector) {
    return target => {
        angular.module(target.moduleName)
            .directive(pascalCaseToCamelCase(selector || target.name), new target());

        return target;
    };
}

export {Directive};