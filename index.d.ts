import { ArraySchema } from './src/ArraySchema.js';
import { NumberLiteralSchema } from './src/NumberLiteralSchema.js';
import { NumberSchema } from './src/NumberSchema.js';
import { ObjectSchema } from './src/ObjectSchema.js';
import { SchemaValidationError } from './src/SchemaValidationError.js';
import { StringLiteralSchema } from './src/StringLiteralSchema.js';
import { StringSchema } from './src/StringSchema.js';

declare function array(items: Schema | Schema[]): ArraySchema;

declare function number(): NumberSchema;

declare function numberLiteral(value: number): NumberLiteralSchema;

declare function object(properties: Record<string, Schema>): ObjectSchema;

declare function string(): string;

declare function stringLiteral(value: string): StringLiteralSchema;

declare function infer(value: any): Schema;

export type Schema =
  | ArraySchema
  | NumberSchema
  | NumberLiteralSchema
  | ObjectSchema
  | StringLiteralSchema
  | StringSchema;

export type SchemaValidationResult = SchemaValidationError | null;

export type SchemaValidator = (value: any) => SchemaValidationResult;
