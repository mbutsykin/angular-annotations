import {Run, Module} from 'bootstrap';

describe('@Run', () => {
    const module = angular.module('test', []);

    @Run
    @Module('test')
    class SomeRun {
        constructor() {}
    }

    it('Run was added', () => {
        expect(module._runBlocks.length).toBe(1);
    });
});