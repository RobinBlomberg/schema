/**
 * A schema that maps to the TypeScript number literal type.
 *
 * @implements {Schema}
 */
export class NumberLiteralSchema implements Schema {
    /**
     * @param {number} value
     */
    constructor(value: number);
    /**
     * @type {number}
     */
    value: number;
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
