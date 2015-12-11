import angular from 'angular';

/**
 * Associate class with angular module
 *
 * @returns {Function}
 * @param name
 */
function Module(name) {
    return target => {
        target.moduleName = name;

        return target;
    };
}

export {Module};