/**
 * A schema that maps to the TypeScript Array type.
 *
 * @implements {Schema}
 */
export class ArraySchema implements Schema {
    /**
     * @param {Schema | Schema[]} items
     */
    constructor(items: Schema | Schema[]);
    /**
     * @type {Schema | Schema[]}
     */
    items: Schema | Schema[];
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
