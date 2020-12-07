import * as Assert from 'assert';
import { PrimitiveSchema } from './PrimitiveSchema.js';
import { SchemaValidationError } from './SchemaValidationError.js';
import * as Errors from './errors.js';

export const testPrimitiveSchema = () => {
  const schema = new PrimitiveSchema('function');

  Assert.strictEqual(
    schema.validate(() => {}),
    null
  );
  Assert.deepStrictEqual(
    schema.validate(42),
    new SchemaValidationError(
      Errors.TYPE_NOT_ASSIGNABLE(42, schema),
      [],
      null
    )
  );
};
