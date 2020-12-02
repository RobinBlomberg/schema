/**
 * A schema that maps to the TypeScript string type.
 *
 * @implements {Schema}
 */
export class StringSchema implements Schema {
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
