import { testArraySchema } from './src/ArraySchema.test.js';
import { testLiteralSchema } from './src/LiteralSchema.test.js';
import { testObjectSchema } from './src/ObjectSchema.test.js';
import { testPrimitiveSchema } from './src/PrimitiveSchema.test.js';
import { testSchemaValidationError } from './src/SchemaValidationError.test.js';
import { testFactory } from './src/factory.test.js';

testSchemaValidationError();
testLiteralSchema();
testPrimitiveSchema();
testObjectSchema();
testArraySchema();
testFactory();
