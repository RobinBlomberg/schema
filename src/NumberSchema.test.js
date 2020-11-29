import * as Assert from 'assert';
import { NumberSchema } from './NumberSchema.js';
import { SchemaValidationError } from './SchemaValidationError.js';
import * as Errors from './errors.js';

export const testNumberSchema = () => {
  const schema = new NumberSchema();

  Assert.strictEqual(
    schema.validate(42),
    null
  );
  Assert.deepStrictEqual(
    schema.validate('foo'),
    new SchemaValidationError(
      Errors.TYPE_NOT_ASSIGNABLE('foo', schema),
      [],
      null
    )
  );
};
