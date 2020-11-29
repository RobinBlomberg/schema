/**
 * @typedef {import('..').SchemaValidationResult} SchemaValidationResult
 */
import { SchemaValidationError } from './SchemaValidationError.js';
import * as Errors from './errors.js';

/**
 * A schema that maps to the TypeScript string literal type.
 */
export class StringLiteralSchema {
  /**
   * @type {string}
   */
  value;

  /**
   * @param {string} value
   */
  constructor(value) {
    this.value = value;
  }

  /**
   * @return {string}
   */
  stringify() {
    return JSON.stringify(this.value);
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
