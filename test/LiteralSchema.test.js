import { describe, equal, it } from '@robinblomberg/test';
import { LiteralSchema } from '../lib/LiteralSchema.js';
import { SchemaValidationError } from '../lib/SchemaValidationError.js';
import * as Errors from '../lib/errors.js';

export const testLiteralSchema = () => describe('LiteralSchema', () => {
  const schema = new LiteralSchema('foo');

  it('should pass if the values are equal', () => {
    equal(
      schema.validate('foo'),
      null
    );
  });

  it('should fail if the values are not equal', () => {
    equal(
      schema.validate('bar'),
      new SchemaValidationError(
        Errors.TYPE_NOT_ASSIGNABLE('bar', schema),
        [],
        null
      )
    );
  });
});
