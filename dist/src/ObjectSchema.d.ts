/**
 * A schema that maps to the TypeScript Object type.
 *
 * @implements {Schema}
 */
export class ObjectSchema implements Schema {
    /**
     * @param {Object.<string, Schema>} properties
     */
    constructor(properties: {
        [x: string]: Schema;
    });
    /**
     * @type {Object.<string, Schema>}
     */
    properties: {
        [x: string]: Schema;
    };
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
