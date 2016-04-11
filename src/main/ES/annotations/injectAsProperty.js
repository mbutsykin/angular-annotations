import angular from 'angular';

/**
 * Adding class property and assign it to $injector.get('')
 *
 * @param dependencyList
 * @returns {Function}
 */
function InjectAsProperty(...dependencyList) {

	return target => {
		annotate(target, dependencyList);
		return target;
	};

	function annotate(target, dependencyList) {
		angular
			.module(target.moduleName)
			.decorator(target.ng_name, [
				'$delegate', '$injector',
				function ($delegate, $injector) {
					dependencyList.forEach(dependency => $delegate[dependency] = $injector.get(dependency));
					return $delegate;
				}
			]);
	}
}

export {InjectAsProperty};
