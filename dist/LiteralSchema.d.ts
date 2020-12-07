/**
 * A schema that maps to a TypeScript literal type.
 *
 * @template T
 * @implements {Schema}
 */
export class LiteralSchema<T> implements Schema {
    /**
     * @param {T} value
     */
    constructor(value: T);
    /**
     * @type {T}
     */
    value: T;
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
