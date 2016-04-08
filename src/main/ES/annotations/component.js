import angular from 'angular';
import {pascalCaseToCamelCase} from '../util/helpers';

/**
 * Register a component
 *
 * @returns {Function}
 * @param selector
 */
function Component(selector) {
	if (typeof selector !== 'string') {
		annotate(selector);
		return arguments[0];
	}

	return target => {
		target.ng_name = pascalCaseToCamelCase(selector || target.name);
		annotate(target, selector);
		return target;
	};

	function annotate(target, selector) {
		angular
			.module(target.moduleName)
			.component(pascalCaseToCamelCase(selector || target.name), () => new target());
	}
}

export {Component};
