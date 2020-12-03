import { SchemaValidationError } from './SchemaValidationError.js';

export type PrimitiveType =
  | 'string'
  | 'number'
  | 'bigint'
  | 'boolean'
  | 'symbol'
  | 'undefined'
  | 'object'
  | 'function';

export abstract class Schema {
  abstract stringify(): string;
  abstract validate(value: any, path?: string[]): SchemaValidationResult;
}

export type SchemaValidationResult = SchemaValidationError | null;

export type SchemaValidator = (value: any) => SchemaValidationResult;
