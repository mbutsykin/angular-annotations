import {Module} from 'bootstrap';

describe('@Module', () => {
    const module = angular.module('test', []);

    @Module('test')
    class SomeClass {
    }

    it('Module was associated', () => {
        expect(SomeClass.moduleName).toBe('test');
    });
});
