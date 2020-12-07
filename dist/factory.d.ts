export function array(items: Schema | Schema[]): ArraySchema;
export function bigint(): PrimitiveSchema;
export function boolean(): PrimitiveSchema;
export function literal(value: string): LiteralSchema<any>;
export function number(): PrimitiveSchema;
export function object(properties: {
    [x: string]: Schema;
}): ObjectSchema;
export function string(): PrimitiveSchema;
export function symbol(): PrimitiveSchema;
export function type(primitiveType: PrimitiveType): PrimitiveSchema;
export type PrimitiveType = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
export type Schema = import("./types.js").Schema;
import { ArraySchema } from "./ArraySchema.js";
import { PrimitiveSchema } from "./PrimitiveSchema.js";
/**
 * @return {PrimitiveSchema}
 */
declare function _function(): PrimitiveSchema;
import { LiteralSchema } from "./LiteralSchema.js";
/**
 * @return {LiteralSchema<null>}
 */
declare function _null(): LiteralSchema<null>;
import { ObjectSchema } from "./ObjectSchema.js";
/**
 * @return {LiteralSchema<undefined>}
 */
declare function _undefined(): LiteralSchema<undefined>;
export { _function as function, _function as function, _null as null, _null as null, _undefined as undefined };
