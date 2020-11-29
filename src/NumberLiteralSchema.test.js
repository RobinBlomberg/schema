import * as Assert from 'assert';
import { NumberLiteralSchema } from './NumberLiteralSchema.js';
import { SchemaValidationError } from './SchemaValidationError.js';
import * as Errors from './errors.js';

export const testNumberLiteralSchema = () => {
  const schema = new NumberLiteralSchema(42);

  Assert.strictEqual(
    schema.validate(42),
    null
  );
  Assert.deepStrictEqual(
    schema.validate(43),
    new SchemaValidationError(
      Errors.TYPE_NOT_ASSIGNABLE(43, schema),
      [],
      null
    )
  );
};
