import {Controller, Module} from 'bootstrap';

describe('@Controller decorator', () => {
    const module = angular.module('test', []);

    @Controller
    @Module('test')
    class SomeController {
    }

    it('Controller was added', () => {
        expect(module._invokeQueue[module._invokeQueue.length - 1][1]).toBe('register');
    });

    it('Controller name correct', () => {
        var controller = module._invokeQueue[module._invokeQueue.length - 1][2];

        expect(controller[0]).toBe('SomeController');
    });
});
