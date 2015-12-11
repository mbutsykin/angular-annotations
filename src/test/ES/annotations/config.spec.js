import {Config, Module} from 'bootstrap';

describe('@Config', () => {
    const module = angular.module('test', []);

    @Config
    @Module('test')
    class SomeConfig {
        constructor() {}
    }

    it('Config was added', () => {
        expect(module._configBlocks.length).toBe(1);
    });
});