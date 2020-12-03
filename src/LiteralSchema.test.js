import * as Assert from 'assert';
import { LiteralSchema } from './LiteralSchema.js';
import { SchemaValidationError } from './SchemaValidationError.js';
import * as Errors from './errors.js';

export const testLiteralSchema = () => {
  const schema = new LiteralSchema('foo');

  Assert.strictEqual(
    schema.validate('foo'),
    null
  );
  Assert.deepStrictEqual(
    schema.validate('bar'),
    new SchemaValidationError(
      Errors.TYPE_NOT_ASSIGNABLE('bar', schema),
      [],
      null
    )
  );
};
