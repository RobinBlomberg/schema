/**
 * A schema that maps to the TypeScript string literal type.
 *
 * @implements {Schema}
 */
export class StringLiteralSchema implements Schema {
    /**
     * @param {string} value
     */
    constructor(value: string);
    /**
     * @type {string}
     */
    value: string;
    /**
     * @return {string}
     */
    stringify(): string;
    /**
     * @param {*} value
     * @param {string[]} [path]
     * @return {SchemaValidationResult}
     */
    validate(value: any, path?: string[] | undefined): SchemaValidationResult;
}
export type Schema = import("./types.js").Schema;
export type SchemaValidationResult = SchemaValidationError | null;
import { SchemaValidationError } from "./SchemaValidationError.js";
