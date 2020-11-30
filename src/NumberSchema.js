/**
 * @typedef {import('../types').NumberSchema} NumberSchemaImpl
 * @typedef {import('../types').SchemaValidationResult} SchemaValidationResult
 */
import { SchemaValidationError } from './SchemaValidationError.js';
import * as Errors from './errors.js';

/**
 * A schema that maps to the TypeScript number type.
 *
 * @implements {NumberSchemaImpl}
 */
export class NumberSchema {
  /**
   * @return {string}
   */
  stringify() {
    return 'number';
  }

  /**
   * @param {*} value
   * @param {string[]} [path]
   * @return {SchemaValidationResult}
   */
  validate(value, path = []) {
    const type = typeof value;
    return type === 'number'
      ? null
      : new SchemaValidationError(
        Errors.TYPE_NOT_ASSIGNABLE(value, this),
        path,
        null
      );
  }
}
