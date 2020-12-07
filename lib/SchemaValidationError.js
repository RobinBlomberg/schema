/**
 * @typedef {import('../main').FlatError} FlatError
 * @typedef {import('../main').SchemaValidationResult} SchemaValidationResult
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
   * @return {FlatError[]}
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
