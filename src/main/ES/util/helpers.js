/**
 * Dashed-string to camelCase
 *
 * @param {String} str
 * @returns {String}
 */
function pascalCaseToCamelCase(str) {
    return str.replace(/-(.)/g, function (a, b) {
        return b.toUpperCase();
    });
}

/**
 * Get instantiated, ready to inject class
 *
 * @param target
 * @returns {Array.<T>}
 */
function getInjectableClass(target) {
    return target.$inject.concat([function () {
        let deps = Array.prototype.slice.call(arguments);

        deps.unshift(null);

        return new (target.bind.apply(target, deps));
    }]);
}

export {pascalCaseToCamelCase, getInjectableClass};
