import * as Assert from 'assert';
import { ObjectSchema } from './ObjectSchema.js';
import { PrimitiveSchema } from './PrimitiveSchema.js';
import { SchemaValidationError } from './SchemaValidationError.js';
import * as Errors from './errors.js';

export const testObjectSchema = () => {
  const stringSchema = new PrimitiveSchema('string');
  const objectSchema = new ObjectSchema({
    name: stringSchema
  });

  Assert.deepStrictEqual(
    objectSchema.validate(42),
    new SchemaValidationError(
      Errors.TYPE_NOT_ASSIGNABLE(42, objectSchema),
      [],
      null
    )
  );

  Assert.deepStrictEqual(
    objectSchema.validate({}),
    new SchemaValidationError(
      Errors.MISSING_PROPERTY('name', {}, objectSchema),
      [],
      null
    )
  );

  Assert.strictEqual(
    objectSchema.validate({
      name: 'Frank'
    }),
    null
  );
  Assert.deepStrictEqual(
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
};
