/**
 * @typedef {import('../types').SchemaValidationError} SchemaValidationErrorImpl
 * @typedef {import('../types').SchemaValidationResult} SchemaValidationResult
 * @implements {SchemaValidationErrorImpl}
 */
export class SchemaValidationError {
  /**
   * @type {SchemaValidationResult}
   */
  childResult;

  /**
   * @type {string}
   */
  errorMessage;

  /**
   * @type {string[]}
   */
  path;

  /**
   * @param {string} errorMessage
   * @param {string[]} path
   * @param {SchemaValidationResult} childResult
   */
  constructor(errorMessage, path, childResult) {
    this.childResult = childResult;
    this.errorMessage = errorMessage;
    this.path = path;
  }

  /**
   * @return {{ errorMessage: string; path: string[]; }[]}
   */
  flatten() {
    const errors = [
      {
        errorMessage: this.errorMessage,
        path: this.path
      }
    ];

    if (this.childResult) {
      errors.push(...this.childResult.flatten());
    }

    return errors;
  }

  /**
   * @return {string}
   */
  toString() {
    const errors = this.flatten();
    return errors.map((error) => error.errorMessage).join('\n') + '\n';
  }
}
