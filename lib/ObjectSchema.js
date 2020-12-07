/**
 * @typedef {import('../main').Properties} Properties
 * @typedef {import('../main').Schema} Schema
 * @typedef {import('../main').SchemaValidationResult} SchemaValidationResult
 */
import { SchemaValidationError } from './SchemaValidationError.js';
import * as Errors from './errors.js';

/**
 * A schema that maps to the TypeScript Object type.
 *
 * @implements {Schema}
 */
export class ObjectSchema {
  /**
   * @type {Properties}
   */
  properties;

  /**
   * @param {Properties} properties
   */
  constructor(properties) {
    this.properties = properties;
  }

  /**
   * @return {string}
   */
  stringify() {
    let output = '{';
    let hasContent = false;

    for (const key in this.properties) {
      if (Object.prototype.hasOwnProperty.call(this.properties, key)) {
        hasContent = true;
        output += ' ';
        output += key;
        output += ': ';
        output += this.properties[key].stringify();
        output += ';';
      }
    }

    if (hasContent) {
      output += ' ';
    }

    output += '}';

    return output;
  }

  /**
   * @param {*} value
   * @param {string[]} [path]
   * @return {SchemaValidationResult}
   */
  validate(value, path = []) {
    if (!(value instanceof Object)) {
      return new SchemaValidationError(
        Errors.TYPE_NOT_ASSIGNABLE(value, this),
        path,
        null
      );
    }

    for (const key in this.properties) {
      if (Object.prototype.hasOwnProperty.call(this.properties, key)) {
        if (!Object.prototype.hasOwnProperty.call(value, key)) {
          return new SchemaValidationError(
            Errors.MISSING_PROPERTY(key, value, this),
            path,
            null
          );
        }

        const childPath = [...path, key];
        const propertyError = this.properties[key].validate(value[key], childPath);

        if (propertyError) {
          return new SchemaValidationError(
            Errors.TYPE_NOT_ASSIGNABLE(value, this),
            path,
            new SchemaValidationError(
              Errors.INCOMPATIBLE_PROPERTIES(key),
              childPath,
              propertyError
            )
          );
        }
      }
    }

    return null;
  }
}
