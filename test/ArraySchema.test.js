import { describe, equal, it } from '@robinblomberg/test';
import { ArraySchema } from '../lib/ArraySchema.js';
import { LiteralSchema } from '../lib/LiteralSchema.js';
import { PrimitiveSchema } from '../lib/PrimitiveSchema.js';
import { SchemaValidationError } from '../lib/SchemaValidationError.js';
import * as Errors from '../lib/errors.js';

export const testArraySchema = () => describe('ArraySchema', () => {
  describe('array', () => {
    const stringSchema = new PrimitiveSchema('string');
    const arraySchema = new ArraySchema(stringSchema);

    it('should pass if the value matches the schema', () => {
      equal(
        arraySchema.validate(['foo', 'bar']),
        null
      );
    });

    it('should fail if the value is of a different primitive type', () => {
      equal(
        arraySchema.validate(42),
        new SchemaValidationError(
          Errors.TYPE_NOT_ASSIGNABLE(42, arraySchema),
          [],
          null
        )
      );
    });

    it('should fail if an item does not match its schema', () => {
      equal(
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
    });
  });

  describe('tuple', () => {
    const literalSchema = new LiteralSchema('bar');
    const tupleSchema = new ArraySchema([
      new LiteralSchema('foo'),
      literalSchema
    ]);

    it('should pass if the types match', () => {
      equal(
        tupleSchema.validate(['foo', 'bar']),
        null
      );
    });

    it('should fail if a tuple value does not match its schema', () => {
      equal(
        tupleSchema.validate(['foo', 'qux']),
        new SchemaValidationError(
          Errors.TYPE_NOT_ASSIGNABLE(['foo', 'qux'], tupleSchema),
          [],
          new SchemaValidationError(
            Errors.TYPE_NOT_ASSIGNABLE('qux', literalSchema),
            ['1'],
            null
          )
        )
      );
    });
  });
});
