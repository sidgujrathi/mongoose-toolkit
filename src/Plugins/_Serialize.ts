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

  if (schema.options) {
    if (schema.options.toJSON && schema.options.toJSON.transform) {
    } else {
      schema.options.toJSON = { virtuals: true };
      schema.options.toObject = { virtuals: true };
    }
    // serialze method for documents
    schema.methods.serialize = function () {
      return serializer(this);
    };
  }
};

export default serialize;
