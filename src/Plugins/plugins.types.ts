import { Schema, SchemaOptions } from 'mongoose';

export interface ISchema extends Schema {
  options?: SchemaOptions;
}
