import { ArraySchema } from './ArraySchema.js';
import { NumberLiteralSchema } from './NumberLiteralSchema.js';
import { ObjectSchema } from './ObjectSchema.js';
import { SchemaValidationError } from './SchemaValidationError.js';
import { StringLiteralSchema } from './StringLiteralSchema.js';
import { StringSchema } from './StringSchema.js';

export type Schema =
  | ArraySchema
  | NumberLiteralSchema
  | ObjectSchema
  | StringLiteralSchema
  | StringSchema;

export type SchemaValidationResult = SchemaValidationError | null;

export type SchemaValidator = (value: any) => SchemaValidationResult;
