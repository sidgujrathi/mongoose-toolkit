import { ISchema } from './plugins.types';
import { serializer } from '../helpers/serialize';

/**
 *
 * @param schema
 * This function extends inbuild capability of toJSON function provided by mongoose
 * it will serialize BSON to JSON preventing all virtuals intact.
 */

const serialize = function (schema: ISchema) {

  // This plugin is actually called *after* any schema's
  // custom toJSON has been defined, so we need to ensure not to
  // overwrite it. Hence, we remember it here and call it later

  let transform: {
    (doc: any, ret: any, options: any): any;
    (arg0: any, arg1: any, arg2: any): void;
  } | null = null;
  if (schema.options) {
    if (schema.options.toJSON && schema.options.toJSON.transform) {
      transform = schema.options.toJSON.transform;
    }

    // Extend toJSON options
    schema.options.toJSON = Object.assign(schema.options.toJSON || {}, {
      transform(doc: any, ret: any, options: any) {
        // serialize document
        serializer(ret);
        // Call custom transform if present
        if (transform) {
          return transform(doc, ret, options);
        }
      },
    });
  }
};

export default serialize;
