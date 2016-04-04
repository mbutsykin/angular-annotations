import angular from 'angular';
import {pascalCaseToCamelCase} from '../util/helpers';

/**
 * Register a directive
 *
 * @returns {Function}
 * @param selector
 */
function Directive(selector) {
    if (typeof selector !== 'string') {
        annotate(selector);
        return arguments[0];
    }

    return target => {
        target.name = name;
        annotate(target, selector);
        return target;
    };

    function annotate(target, selector) {
        angular.module(target.moduleName)
            .directive(pascalCaseToCamelCase(selector || target.name), () => new target());
    }
}

export {Directive};
