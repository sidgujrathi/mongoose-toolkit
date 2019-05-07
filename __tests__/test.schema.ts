import { Schema, Mongoose, model } from 'mongoose';
import { PLUGINS } from '../lib';
const testSchema = new Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
  },
  {
    collection: 'users',
  });

testSchema.virtual('fullName').get(function (this: any) {
  return `${this.firstname} ${this.lastname}`;
});

testSchema.plugin(PLUGINS.serialize);

export const userModel = model('UserTest', testSchema);

test('db schema', () => {

});
