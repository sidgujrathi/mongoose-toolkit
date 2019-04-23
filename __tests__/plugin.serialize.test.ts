import { Plugins } from '../lib';

describe('Plugin: Output Serialization', () => {
    test('Plugin.serialize should be imported as function', () => {
        expect(typeof Plugins.serialize).toBe('function');
    });

    test('Plugin.serialize should return object', () => {
        expect(typeof Plugins.serialize()).toBe("object");
    });
});
