/**
 * @typedef {import('../main').Schema} Schema
 */
import { infer } from './infer.js';

/**
 * @param {string} key
 * @return {string}
 */
export const INCOMPATIBLE_PROPERTIES = (key) => {
  return `Types of property '${key}' are incompatible.`;
};

/**
 * @param {string} key
 * @param {*} value
 * @param {Schema} schema
 * @return {string}
 */
export const MISSING_PROPERTY = (key, value, schema) => {
  return `Property '${key}' is missing in type '${infer(value).stringify()}' but required in ` +
    `type '${schema.stringify()}'.`;
};

/**
 * @param {*} value
 * @param {Schema} schema
 * @return {string}
 */
export const TYPE_NOT_ASSIGNABLE = (value, schema) => {
  return `Type '${infer(value).stringify()}' is not assignable to type '${schema.stringify()}'.`;
};
