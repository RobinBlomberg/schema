import { describe, equal, it } from '@robinblomberg/test';
import { ObjectSchema } from '../lib/ObjectSchema.js';
import { PrimitiveSchema } from '../lib/PrimitiveSchema.js';
import { SchemaValidationError } from '../lib/SchemaValidationError.js';
import * as Errors from '../lib/errors.js';

export const testObjectSchema = () => describe('ObjectSchema', () => {
  const stringSchema = new PrimitiveSchema('string');
  const objectSchema = new ObjectSchema({
    name: stringSchema
  });

  it('should pass if the value matches the schema', () => {
    equal(
      objectSchema.validate({
        name: 'Frank'
      }),
      null
    );
  });

  it('should fail if the value is of a different type', () => {
    equal(
      objectSchema.validate(42),
      new SchemaValidationError(
        Errors.TYPE_NOT_ASSIGNABLE(42, objectSchema),
        [],
        null
      )
    );
  });

  it('should fail if the value is missing a property', () => {
    equal(
      objectSchema.validate({}),
      new SchemaValidationError(
        Errors.MISSING_PROPERTY('name', {}, objectSchema),
        [],
        null
      )
    );
  });

  it('should fail if a property does not match its schema', () => {
    equal(
      objectSchema.validate({
        name: 42
      }),
      new SchemaValidationError(
        Errors.TYPE_NOT_ASSIGNABLE(
          {
            name: 42
          },
          objectSchema
        ),
        [],
        new SchemaValidationError(
          Errors.INCOMPATIBLE_PROPERTIES('name'),
          ['name'],
          new SchemaValidationError(
            Errors.TYPE_NOT_ASSIGNABLE(42, stringSchema),
            ['name'],
            null
          )
        )
      )
    );
  });
});
