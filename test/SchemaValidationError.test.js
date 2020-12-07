import { describe, equal, it } from '@robinblomberg/test';
import { ArraySchema } from '../lib/ArraySchema.js';
import { PrimitiveSchema } from '../lib/PrimitiveSchema.js';
import { SchemaValidationError } from '../lib/SchemaValidationError.js';
import * as Errors from '../lib/errors.js';

export const testSchemaValidationError = () => describe('SchemaValidationError', () => {
  const stringSchema = new PrimitiveSchema('string');
  const arraySchema = new ArraySchema(stringSchema);
  const error = arraySchema.validate([42, 43]);

  equal(
    error,
    new SchemaValidationError(
      Errors.TYPE_NOT_ASSIGNABLE([42, 43], arraySchema),
      [],
      new SchemaValidationError(
        Errors.TYPE_NOT_ASSIGNABLE(42, stringSchema),
        ['0'],
        null
      )
    )
  );

  describe('flatten', () => {
    it('should flatten correctly', () => {
      equal(
        error.flatten(),
        [
          {
            errorMessage: Errors.TYPE_NOT_ASSIGNABLE([42, 43], arraySchema),
            path: []
          },
          {
            errorMessage: Errors.TYPE_NOT_ASSIGNABLE(42, stringSchema),
            path: ['0']
          }
        ]
      );
    });
  });

  describe('toString', () => {
    it('should stringify correctly', () => {
      equal(
        error.toString(),
        "Type '[42, 43]' is not assignable to type 'string[]'.\n" +
        "Type '42' is not assignable to type 'string'.\n"
      );
    });
  });
});
