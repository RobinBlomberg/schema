import { describe, equal, it } from '@robinblomberg/test';
import { PrimitiveSchema } from '../lib/PrimitiveSchema.js';
import { SchemaValidationError } from '../lib/SchemaValidationError.js';
import * as Errors from '../lib/errors.js';

export const testPrimitiveSchema = () => describe('PrimitiveSchema', () => {
  const schema = new PrimitiveSchema('function');

  it('should pass if the value is a function', () => {
    equal(
      schema.validate(() => {}),
      null
    );
  });

  it('should fail if the value is not a function', () => {
    equal(
      schema.validate(42),
      new SchemaValidationError(
        Errors.TYPE_NOT_ASSIGNABLE(42, schema),
        [],
        null
      )
    );
  });
});
