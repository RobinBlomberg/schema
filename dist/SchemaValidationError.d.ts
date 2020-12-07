/**
 * @typedef {import('./types').SchemaValidationResult} SchemaValidationResult
 */
export class SchemaValidationError {
    /**
     * @param {string} errorMessage
     * @param {string[]} path
     * @param {SchemaValidationResult} childResult
     */
    constructor(errorMessage: string, path: string[], childResult: SchemaValidationResult);
    /**
     * @type {SchemaValidationResult}
     */
    childResult: SchemaValidationResult;
    /**
     * @type {string}
     */
    errorMessage: string;
    /**
     * @type {string[]}
     */
    path: string[];
    /**
     * @return {{ errorMessage: string; path: string[]; }[]}
     */
    flatten(): {
        errorMessage: string;
        path: string[];
    }[];
    /**
     * @return {string}
     */
    toString(): string;
}
export type SchemaValidationResult = SchemaValidationError | null;
