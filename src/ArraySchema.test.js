import * as Assert from 'assert';
import { ArraySchema } from './ArraySchema.js';
import { SchemaValidationError } from './SchemaValidationError.js';
import { StringLiteralSchema } from './StringLiteralSchema.js';
import { StringSchema } from './StringSchema.js';
import * as Errors from './errors.js';

export const testArraySchema = () => {
  const stringSchema = new StringSchema();
  const arraySchema = new ArraySchema(new StringSchema());

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

  const stringLiteral1Schema = new StringLiteralSchema('bar');
  const tupleSchema = new ArraySchema([
    new StringLiteralSchema('foo'),
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
