const _function: () => PrimitiveSchema;

const _null: () => LiteralSchema<null>;

const _undefined: () => LiteralSchema<undefined>;

/*
 * Internal types
 * -------------------------------------------------------------------------------------------------
 */

/**
 * A schema that maps to the TypeScript Array type.
 */
export class ArraySchema extends Schema {
  items: Items;
  constructor(items: Items);
  stringify(): string;
  validate(value: any, path?: string[]): SchemaValidationResult;
}

export type FlatError = {
  errorMessage: string;
  path: string[];
};

export type Items = Schema | Schema[];

/**
 * A schema that maps to the TypeScript literal type.
 */
export class LiteralSchema<T> extends Schema {
  value: T;
  constructor(value: T);
  stringify(): string;
  validate(value: any, path?: string[]): SchemaValidationResult;
}

/**
 * A schema that maps to the TypeScript Object type.
 */
export class ObjectSchema extends Schema {
  properties: Properties;
  constructor(properties: Properties);
  stringify(): string;
  validate(value: any, path?: string[]): SchemaValidationResult;
}

/**
 * A schema that maps to a TypeScript primitive type.
 */
export class PrimitiveSchema extends Schema {
  constructor(type: PrimitiveType);
  stringify(): string;
  validate(value: any, path?: string[]): SchemaValidationResult;
}

export type PrimitiveType =
  | 'string'
  | 'number'
  | 'bigint'
  | 'boolean'
  | 'symbol'
  | 'undefined'
  | 'object'
  | 'function';

export type Properties = {
  [K: string]: Schema;
};

export abstract class Schema {
  abstract stringify(): string;
  abstract validate(value: any, path?: string[]): SchemaValidationResult;
}

export class SchemaValidationError {
  childResult: SchemaValidationResult;
  errorMessage: string;
  path: string[];
  constructor(errorMessage: string, path: string[], childResult: SchemaValidationResult);
  flatten(): FlatError[];
  toString(): string;
}

export type SchemaValidationResult = SchemaValidationError | null;

export type SchemaValidator = (value: any) => SchemaValidationResult;

/*
 * External types
 * -------------------------------------------------------------------------------------------------
 */

export const array: (items: Schema | Schema[]) => ArraySchema;

export const bigint: () => PrimitiveSchema;

export const boolean: () => PrimitiveSchema;

export { _function as function };

/**
 * @param {string} value
 * @return {LiteralSchema<any>}
 */
export const literal: (value) => LiteralSchema<any>;

export { _null as null };

export const number: () => PrimitiveSchema;

export const object: (properties: Properties) => ObjectSchema;

export const string: () => PrimitiveSchema;

export const symbol: () => PrimitiveSchema;

export const type: (primitiveType: PrimitiveType) => PrimitiveSchema;

export { _undefined as undefined };

export const infer: (value: any) => Schema;
