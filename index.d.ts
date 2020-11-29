import { ArraySchema } from './src/ArraySchema.js';
import { NumberLiteralSchema } from './src/NumberLiteralSchema.js';
import { NumberSchema } from './src/NumberSchema.js';
import { ObjectSchema } from './src/ObjectSchema.js';
import { SchemaValidationError } from './src/SchemaValidationError.js';
import { StringLiteralSchema } from './src/StringLiteralSchema.js';
import { StringSchema } from './src/StringSchema.js';

export function array(items: Schema | Schema[]): ArraySchema;

export function number(): NumberSchema;

export function numberLiteral(value: number): NumberLiteralSchema;

export function object(properties: Record<string, Schema>): ObjectSchema;

export function string(): string;

export function stringLiteral(value: string): StringLiteralSchema;

export function infer(value: any): Schema;

export type Schema =
  | ArraySchema
  | NumberSchema
  | NumberLiteralSchema
  | ObjectSchema
  | StringLiteralSchema
  | StringSchema;

export type SchemaValidationResult = SchemaValidationError | null;

export type SchemaValidator = (value: any) => SchemaValidationResult;
