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
 * @returns {Array}
 */
function getInjectableClass(target) {
    function proxy() {
        let deps = Array.prototype.slice.call(arguments);

        deps.unshift(null);

        return new (target.bind.apply(target, deps));
    }

    proxy.toString = function () {
        return target.name;
    };

    return (target.$inject || []).concat([proxy]);
}

export {pascalCaseToCamelCase, getInjectableClass};
