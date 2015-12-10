import angular from 'angular';

/**
 * Register a provider function
 */
function provider(params) {
    return target => {
        angular.module(params.module).provider(target.name, target);

        return target;
    }
}

export {provider};