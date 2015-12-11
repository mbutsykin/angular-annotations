import {Provider, Module} from 'bootstrap';

describe('@Provider', () => {
    const module = angular.module('test', []);

    @Provider
    @Module('test')
    class SomeProvider {
    }

    it('Provider was added', () => {
        expect(module._invokeQueue[module._invokeQueue.length - 1][1]).toBe('provider');
    });

    it('Provider name correct', () => {
        var controller = module._invokeQueue[module._invokeQueue.length - 1][2];

        expect(controller[0]).toBe('SomeProvider');
    });
});
