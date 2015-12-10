import {Config} from 'bootstrap';

describe('@Config decorator', () => {
    const module = angular.module('test', []);

    @Config({module: 'test'})
    class SomeConfig {
        constructor() {}
    }

    it('Config was added', () => {
        expect(module._configBlocks.length).toBe(1);
    });
});