import * as Assert from 'assert';
import { SchemaValidationError } from './SchemaValidationError.js';
import { StringLiteralSchema } from './StringLiteralSchema.js';
import * as Errors from './errors.js';

export const testStringLiteralSchema = () => {
  const schema = new StringLiteralSchema('foo');

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
