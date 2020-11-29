/**
 * @typedef {import('..').Schema} Schema
 */
import { ArraySchema } from './ArraySchema.js';
import { NumberLiteralSchema } from './NumberLiteralSchema.js';
import { ObjectSchema } from './ObjectSchema.js';
import { StringLiteralSchema } from './StringLiteralSchema.js';

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

  switch (typeof value) {
    case 'number':
      return new NumberLiteralSchema(value);
    case 'string':
      return new StringLiteralSchema(value);
    default:
      throw new TypeError(`Failed to infer value: Unexpected value ${JSON.stringify(value)}`);
  }
};
