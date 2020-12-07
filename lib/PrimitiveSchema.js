/**
 * @typedef {import('./types.js').PrimitiveType} PrimitiveType
 * @typedef {import('./types').Schema} Schema
 * @typedef {import('./types').SchemaValidationResult} SchemaValidationResult
 */
import { SchemaValidationError } from './SchemaValidationError.js';
import * as Errors from './errors.js';

/**
 * A schema that maps to a TypeScript primitive type.
 *
 * @implements {Schema}
 */
export class PrimitiveSchema {
  /** @type {PrimitiveType} */
  #type;

  /**
   * @param {PrimitiveType} type
   */
  constructor(type) {
    this.#type = type;
  }

  /**
   * @return {string}
   */
  stringify() {
    return this.#type;
  }

  /**
   * @param {*} value
   * @param {string[]} [path]
   * @return {SchemaValidationResult}
   */
  validate(value, path = []) {
    const type = typeof value;
    return type === this.#type
      ? null
      : new SchemaValidationError(
        Errors.TYPE_NOT_ASSIGNABLE(value, this),
        path,
        null
      );
  }
}
