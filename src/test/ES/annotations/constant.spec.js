import {Constant, Module} from 'bootstrap';

describe('@Constant decorator', () => {
    const module = angular.module('test', []);
    const constantName = 'CONSTANT';

    @Constant(constantName)
    @Module('test')
    class SomeConfig {
        test = 1;
    }

    it('Constant was added', () => {
        expect(module._invokeQueue[module._invokeQueue.length - 1][1]).toBe('constant');
    });

    it('Constant name correct', () => {
        var constant = module._invokeQueue[module._invokeQueue.length - 1][2];

        expect(constant[0]).toBe(constantName);
    });
});