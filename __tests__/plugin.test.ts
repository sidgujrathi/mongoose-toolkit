import { PLUGINS } from '../lib';
import { getConnection } from './db.connection';
import { userModel } from './test.schema';

describe('Plugins', () => {

  beforeAll(async () => {
    await getConnection();
  });

  describe('Output Serialization', () => {

    test('Plugin.serialize should be imported as function', () => {
      expect(typeof PLUGINS.serialize).toBe('function');
    });

    test('Output after applying serialize should prevent virtuals via serialze', (done) => {
      userModel.findOne({}).then((docs: any) => {
        if (docs) {
          expect(docs.serialize().fullName).not.toBe(undefined);
        }
        done();
      });
    });

    test('JSON object should able to mutable after serialize', (done) => {
      userModel.findOne({}).then((docs: any) => {
        if (docs) {
          const serializedDoc: any = docs.serialize();
          serializedDoc.new_field = 'New Name';
          expect(serializedDoc.new_field).not.toBe(undefined);
        }
        done();
      });
    });

  });
});
