import {Decorator, Module} from 'bootstrap';

describe('@Decorator', () => {
    const module = angular.module('test', []);

    @Decorator('$http')
    @Module('test')
    class HttpDecorator {
    }

    it('$http decorator was added', () => {
        expect(module._invokeQueue[module._invokeQueue.length - 1][1]).toBe('decorator');
    });

    it('$http decorator correct', () => {
        var controller = module._invokeQueue[module._invokeQueue.length - 1][2];

        expect(controller[0]).toBe('$http');
    });
});
