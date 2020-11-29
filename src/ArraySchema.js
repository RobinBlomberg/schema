/**
 * @typedef {import('..').Schema} Schema
 * @typedef {import('..').SchemaValidationResult} SchemaValidationResult
 */
import { SchemaValidationError } from './SchemaValidationError.js';
import * as Errors from './errors.js';

/**
 * A schema that maps to the TypeScript Array type.
 */
export class ArraySchema {
  /**
   * @type {Schema | Schema[]}
   */
  items;

  /**
   * @param {Schema | Schema[]} items
   */
  constructor(items) {
    this.items = items;
  }

  /**
   * @return {string}
   */
  stringify() {
    let output = '';

    if (Array.isArray(this.items)) {
      output += '[';

      for (let i = 0; i < this.items.length; i++) {
        if (i > 0) {
          output += ', ';
        }

        output += this.items[i].stringify();
      }

      output += ']';
    } else {
      output += this.items.stringify();
      output += '[]';
    }

    return output;
  }

  /**
   * @param {*} value
   * @param {string[]} path
   * @return {SchemaValidationResult}
   */
  validate(value, path = []) {
    if (!Array.isArray(value)) {
      return new SchemaValidationError(
        Errors.TYPE_NOT_ASSIGNABLE(value, this),
        path,
        null
      );
    }

    for (let i = 0; i < value.length; i++) {
      const childSchema = Array.isArray(this.items)
        ? this.items[i]
        : this.items;
      const childError = childSchema.validate(value[i], [...path, String(i)]);

      if (childError) {
        return new SchemaValidationError(
          Errors.TYPE_NOT_ASSIGNABLE(value, this),
          path,
          childError
        );
      }
    }

    return null;
  }
}
