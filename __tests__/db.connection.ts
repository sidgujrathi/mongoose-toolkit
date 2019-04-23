import { connect, Mongoose, set } from 'mongoose';

export function getConnection(): Promise<Mongoose> {

  set('debug', true);

  return connect(
    'mongodb://localhost:27017/mongoose-toolkit',
    { autoIndex: false, useNewUrlParser: true },
  );
}

test('db connection', () => {

});
