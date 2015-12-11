import {Factory, Module} from 'bootstrap';

describe('@Factory', () => {
    const module = angular.module('test', []);

    @Factory
    @Module('test')
    class SomeFactory {
    }

    it('Factory was added', () => {
        expect(module._invokeQueue[module._invokeQueue.length - 1][1]).toBe('factory');
    });

    it('Factory name correct', () => {
        var controller = module._invokeQueue[module._invokeQueue.length - 1][2];

        expect(controller[0]).toBe('SomeFactory');
    });
});
