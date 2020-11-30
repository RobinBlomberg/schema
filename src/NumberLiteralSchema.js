/**
 * @typedef {import('../internal').NumberLiteralSchema} NumberLiteralSchemaImpl
 * @typedef {import('../internal').SchemaValidationResult} SchemaValidationResult
 */
import { SchemaValidationError } from './SchemaValidationError.js';
import * as Errors from './errors.js';

/**
 * A schema that maps to the TypeScript number literal type.
 *
 * @implements {NumberLiteralSchemaImpl}
 */
export class NumberLiteralSchema {
  /**
   * @type {number}
   */
  value;

  /**
   * @param {number} value
   */
  constructor(value) {
    this.value = value;
  }

  /**
   * @return {string}
   */
  stringify() {
    return String(this.value);
  }

  /**
   * @param {*} value
   * @param {string[]} path
   * @return {SchemaValidationResult}
   */
  validate(value, path = []) {
    return value === this.value
      ? null
      : new SchemaValidationError(
        Errors.TYPE_NOT_ASSIGNABLE(value, this),
        path,
        null
      );
  }
}
