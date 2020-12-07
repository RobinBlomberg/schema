/**
 * @typedef {import('../main').Schema} Schema
 * @typedef {import('../main').SchemaValidationResult} SchemaValidationResult
 */
import { SchemaValidationError } from './SchemaValidationError.js';
import * as Errors from './errors.js';

/**
 * A schema that maps to a TypeScript literal type.
 *
 * @template T
 * @implements {Schema}
 */
export class LiteralSchema {
  /**
   * @type {T}
   */
  value;

  /**
   * @param {T} value
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
   * @param {string[]} [path]
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
