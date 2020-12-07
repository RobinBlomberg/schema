/**
 * A schema that maps to a TypeScript primitive type.
 *
 * @implements {Schema}
 */
export class PrimitiveSchema implements Schema {
    /**
     * @param {PrimitiveType} type
     */
    constructor(type: PrimitiveType);
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
    #private;
}
export type PrimitiveType = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
export type Schema = import("./types.js").Schema;
export type SchemaValidationResult = SchemaValidationError | null;
import { SchemaValidationError } from "./SchemaValidationError.js";
