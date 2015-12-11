import {Service, Module} from 'bootstrap';

describe('@Service', () => {
    const module = angular.module('test', []);

    @Service
    @Module('test')
    class SomeService {
    }

    it('Service was added', () => {
        expect(module._invokeQueue[module._invokeQueue.length - 1][1]).toBe('service');
    });

    it('Service name correct', () => {
        var controller = module._invokeQueue[module._invokeQueue.length - 1][2];

        expect(controller[0]).toBe('SomeService');
    });
});
