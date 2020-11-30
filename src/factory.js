/**
 * @typedef {import('../types').Schema} Schema
 */
import { ArraySchema } from './ArraySchema.js';
import { NumberLiteralSchema } from './NumberLiteralSchema.js';
import { NumberSchema } from './NumberSchema.js';
import { ObjectSchema } from './ObjectSchema.js';
import { StringLiteralSchema } from './StringLiteralSchema.js';
import { StringSchema } from './StringSchema.js';

/**
 * @param {Schema | Schema[]} items
 * @return {ArraySchema}
 */
export const array = (items) => {
  return new ArraySchema(items);
};

/**
 * @return {NumberSchema}
 */
export const number = () => {
  return new NumberSchema();
};

/**
 * @param {number} value
 * @return {NumberLiteralSchema}
 */
export const numberLiteral = (value) => {
  return new NumberLiteralSchema(value);
};

/**
 * @param {Object.<string, Schema>} properties
 * @return {ObjectSchema}
 */
export const object = (properties) => {
  return new ObjectSchema(properties);
};

/**
 * @return {StringSchema}
 */
export const string = () => {
  return new StringSchema();
};

/**
 * @param {string} value
 * @return {StringLiteralSchema}
 */
export const stringLiteral = (value) => {
  return new StringLiteralSchema(value);
};
