import * as Assert from 'assert';
import { ArraySchema } from './ArraySchema.js';
import { SchemaValidationError } from './SchemaValidationError.js';
import { StringSchema } from './StringSchema.js';
import * as Errors from './errors.js';

export const testSchemaValidationError = () => {
  const stringSchema = new StringSchema();
  const arraySchema = new ArraySchema(new StringSchema());
  const error = arraySchema.validate([42, 43]);

  Assert.deepStrictEqual(
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
  Assert.deepStrictEqual(
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
  Assert.strictEqual(
    error.toString(),
    "Type '[42, 43]' is not assignable to type 'string[]'.\n" +
    "Type '42' is not assignable to type 'string'.\n"
  );
};
