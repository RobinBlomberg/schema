/**
 * @typedef {import('../main').PrimitiveType} PrimitiveType
 * @typedef {import('../main').Properties} Properties
 * @typedef {import('../main').Schema} Schema
 */
import { ArraySchema } from './ArraySchema.js';
import { LiteralSchema } from './LiteralSchema.js';
import { ObjectSchema } from './ObjectSchema.js';
import { PrimitiveSchema } from './PrimitiveSchema.js';

/**
 * @return {PrimitiveSchema}
 */
const _function = () => {
  return new PrimitiveSchema('function');
};

/**
 * @return {LiteralSchema<null>}
 */
const _null = () => {
  return new LiteralSchema(null);
};

/**
 * @return {LiteralSchema<undefined>}
 */
const _undefined = () => {
  return new LiteralSchema(undefined);
};

/**
 * @param {Schema | Schema[]} items
 * @return {ArraySchema}
 */
export const array = (items) => {
  return new ArraySchema(items);
};

/**
 * @return {PrimitiveSchema}
 */
export const bigint = () => {
  return new PrimitiveSchema('bigint');
};

/**
 * @return {PrimitiveSchema}
 */
export const boolean = () => {
  return new PrimitiveSchema('boolean');
};

export { _function as function };

/**
 * @param {string} value
 * @return {LiteralSchema<any>}
 */
export const literal = (value) => {
  return new LiteralSchema(value);
};

export { _null as null };

/**
 * @return {PrimitiveSchema}
 */
export const number = () => {
  return new PrimitiveSchema('number');
};

/**
 * @param {Properties} properties
 * @return {ObjectSchema}
 */
export const object = (properties) => {
  return new ObjectSchema(properties);
};

/**
 * @return {PrimitiveSchema}
 */
export const string = () => {
  return new PrimitiveSchema('string');
};

/**
 * @return {PrimitiveSchema}
 */
export const symbol = () => {
  return new PrimitiveSchema('symbol');
};

/**
 * @param {PrimitiveType} primitiveType
 * @return {PrimitiveSchema}
 */
export const type = (primitiveType) => {
  return new PrimitiveSchema(primitiveType);
};

export { _undefined as undefined };
