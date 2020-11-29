import * as Assert from 'assert';
import { SchemaValidationError } from './SchemaValidationError.js';
import { StringSchema } from './StringSchema.js';
import * as Errors from './errors.js';

export const testStringSchema = () => {
  const schema = new StringSchema();

  Assert.strictEqual(
    schema.validate('foo'),
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
