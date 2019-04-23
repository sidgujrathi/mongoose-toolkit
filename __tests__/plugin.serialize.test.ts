import { Plugins } from '../lib';
import { getConnection } from './db.connection';
getConnection().then(() => {

  describe('Plugin: Output Serialization', () => {
    test('Plugin.serialize should be imported as function', () => {
      expect(typeof Plugins.serialize).toBe('function');
    });

  });

}).catch((err: any) => console.error({ err }));
