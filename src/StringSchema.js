/**
 * @typedef {import('.').SchemaValidationResult} SchemaValidationResult
 */
import { SchemaValidationError } from './SchemaValidationError.js';
import * as Errors from './errors.js';

/**
 * A schema that maps to the TypeScript string type.
 */
export class StringSchema {
  /**
   * @return {string}
   */
  stringify() {
    return 'string';
  }

  /**
   * @param {*} value
   * @param {string[]} path
   * @return {SchemaValidationResult}
   */
  validate(value, path = []) {
    const type = typeof value;
    return type === 'string'
      ? null
      : new SchemaValidationError(
        Errors.TYPE_NOT_ASSIGNABLE(value, this),
        path,
        null
      );
  }
}
