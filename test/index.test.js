import { test } from '@robinblomberg/test';
import { testArraySchema } from './ArraySchema.test.js';
import { testLiteralSchema } from './LiteralSchema.test.js';
import { testObjectSchema } from './ObjectSchema.test.js';
import { testPrimitiveSchema } from './PrimitiveSchema.test.js';
import { testSchemaValidationError } from './SchemaValidationError.test.js';
import { testFactory } from './factory.test.js';

test('@robinblomberg/schema', () => {
  testSchemaValidationError();
  testLiteralSchema();
  testPrimitiveSchema();
  testObjectSchema();
  testArraySchema();
  testFactory();
})();
