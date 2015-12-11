import {Filter, Module} from 'bootstrap';

describe('@Filter', () => {
    const module = angular.module('test', []);

    @Filter
    @Module('test')
    class SomeFilter {
    }

    it('Filter was added', () => {
        expect(module._invokeQueue[module._invokeQueue.length - 1][1]).toBe('register');
    });

    it('Filter name correct', () => {
        var controller = module._invokeQueue[module._invokeQueue.length - 1][2];

        expect(controller[0]).toBe('SomeFilter');
    });
});
