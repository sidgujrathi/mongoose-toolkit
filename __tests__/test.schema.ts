import { Schema, Mongoose, model } from 'mongoose';

const testSchema: Schema = new Schema({
  firstname: { type: String },
  lastname: { type: String },
});

export const userModel = model('UserTest', testSchema);

test('db schema', () => {

});
