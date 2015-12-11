import {Value, Module} from 'bootstrap';

describe('@Value', () => {
    const module = angular.module('test', []);

    @Value
    @Module('test')
    class SomeValue {
    }

    it('Value was added', () => {
        expect(module._invokeQueue[module._invokeQueue.length - 1][1]).toBe('value');
    });

    it('Value name correct', () => {
        var controller = module._invokeQueue[module._invokeQueue.length - 1][2];

        expect(controller[0]).toBe('SomeValue');
    });
});
