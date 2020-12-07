import * as Assert from 'assert';
import { ArraySchema } from './ArraySchema.js';
import { LiteralSchema } from './LiteralSchema.js';
import { PrimitiveSchema } from './PrimitiveSchema.js';
import { SchemaValidationError } from './SchemaValidationError.js';
import * as Errors from './errors.js';

export const testArraySchema = () => {
  const stringSchema = new PrimitiveSchema('string');
  const arraySchema = new ArraySchema(stringSchema);

  Assert.deepStrictEqual(
    arraySchema.validate(42),
    new SchemaValidationError(
      Errors.TYPE_NOT_ASSIGNABLE(42, arraySchema),
      [],
      null
    )
  );

  Assert.strictEqual(
    arraySchema.validate(['foo', 'bar']),
    null
  );
  Assert.deepStrictEqual(
    arraySchema.validate([42, 43]),
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

  const stringLiteral1Schema = new LiteralSchema('bar');
  const tupleSchema = new ArraySchema([
    new LiteralSchema('foo'),
    stringLiteral1Schema
  ]);

  Assert.strictEqual(
    tupleSchema.validate(['foo', 'bar']),
    null
  );
  Assert.deepStrictEqual(
    tupleSchema.validate(['foo', 'qux']),
    new SchemaValidationError(
      Errors.TYPE_NOT_ASSIGNABLE(['foo', 'qux'], tupleSchema),
      [],
      new SchemaValidationError(
        Errors.TYPE_NOT_ASSIGNABLE('qux', stringLiteral1Schema),
        ['1'],
        null
      )
    )
  );
};
