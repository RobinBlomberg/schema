import { testArraySchema } from './src/ArraySchema.test.js';
import { testNumberLiteralSchema } from './src/NumberLiteralSchema.test.js';
import { testNumberSchema } from './src/NumberSchema.test.js';
import { testObjectSchema } from './src/ObjectSchema.test.js';
import { testSchemaValidationError } from './src/SchemaValidationError.test.js';
import { testStringLiteralSchema } from './src/StringLiteralSchema.test.js';
import { testStringSchema } from './src/StringSchema.test.js';
import { testFactory } from './src/factory.test.js';

testSchemaValidationError();
testNumberLiteralSchema();
testStringLiteralSchema();
testNumberSchema();
testStringSchema();
testObjectSchema();
testArraySchema();
testFactory();
