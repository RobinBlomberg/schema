/**
 * @typedef {import('./types').Schema} Schema
 */
import { ArraySchema } from './ArraySchema.js';
import { LiteralSchema } from './LiteralSchema.js';
import { ObjectSchema } from './ObjectSchema.js';

/**
 * @param {*} value
 * @return {Schema}
 */
export const infer = (value) => {
  if (Array.isArray(value)) {
    const items = value.map((item) => infer(item));
    return new ArraySchema(items);
  } else if (value instanceof Object) {
    /** @type {Object.<string, Schema>} */
    const properties = {};

    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        properties[key] = infer(value[key]);
      }
    }

    return new ObjectSchema(properties);
  }

  return new LiteralSchema(value);
};
