export class ArraySchema extends Schema {
  items: Schema | Schema[];
  constructor(items: Schema | Schema[]);
}

export class NumberLiteralSchema extends Schema {
  value: number;
  constructor(value: number);
}

export class NumberSchema extends Schema {}

export class ObjectSchema extends Schema {
  properties: Record<string, Schema>;
  constructor(properties: Record<string, Schema>);
}

export class Schema {
  stringify(): string;
  validate(value: any, path?: string[]): SchemaValidationResult;
}

export class StringLiteralSchema {
  value: string;
  constructor(value: string);
}

export class StringSchema extends Schema {}

export class SchemaValidationError {
  childResult: SchemaValidationResult;
  errorMessage: string;
  path: string[];
  constructor(errorMessage: string, path: string[], childResult: SchemaValidationResult);
  flatten(): { errorMessage: string; path: string[]; }[];
  toString(): string;
}

export type SchemaValidationResult = SchemaValidationError | null;

export type SchemaValidator = (value: any) => SchemaValidationResult;

export function array(items: Schema | Schema[]): ArraySchema;

export function number(): NumberSchema;

export function numberLiteral(value: number): NumberLiteralSchema;

export function object(properties: Record<string, Schema>): ObjectSchema;

export function string(): StringSchema;

export function stringLiteral(value: string): StringLiteralSchema;

export function infer(value: any): Schema;
