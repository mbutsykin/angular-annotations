import {Directive, Module} from 'bootstrap';

describe('@Directive', () => {
    const module = angular.module('test', []);

    @Directive('some-selector')
    @Module('test')
    class SomeDirective {
    }

    it('Directive was added', () => {
        expect(module._invokeQueue[module._invokeQueue.length - 1][1]).toBe('directive');
    });

    it('Directive name correct', () => {
        var controller = module._invokeQueue[module._invokeQueue.length - 1][2];

        expect(controller[0]).toBe('someSelector');
    });
});
