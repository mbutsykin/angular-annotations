import angular from 'angular';

/**
 * Adding class property and assign it to $injector.get('')
 *
 * @param dependency
 * @returns {Function}
 */
function InjectAsProperty(dependency) {
	if (typeof dependency !== 'string') {
		annotate(arguments[0], arguments[1]);
		return arguments[0];
	}

	return (target, name) => {
		annotate(target, dependency, name);
		return target;
	};

	function annotate(target, dependency, dependencyAs) {
		angular
			.module(target.moduleName)
			.decorator(target.ng_name, [
				'$delegate', '$injector',
				function ($delegate, $injector) {
					$delegate[dependencyAs || dependency] = $injector.get(dependency);
					return $delegate;
				}
			]);
	}
}

export {InjectAsProperty};
