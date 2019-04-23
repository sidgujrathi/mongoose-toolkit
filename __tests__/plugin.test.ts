import { Plugins } from '../lib';
import { getConnection } from './db.connection';
import { userModel } from './test.schema';

describe('Plugins', () => {

  beforeAll(async () => {
    await getConnection();
  });

  describe('Output Serialization', () => {

    test('Plugin.serialize should be imported as function', () => {
      expect(typeof Plugins.serialize).toBe('function');
    });

    test('Output after applying toJSON should prevent virtuals via serialze', (done) => {
      userModel.findOne({}).then((docs) => {
        if (docs) {
          console.log(docs.toJSON());
          expect(docs.toJSON().fullName).not.toBe(undefined);
        }
        done();
      });
    });

  });
});
