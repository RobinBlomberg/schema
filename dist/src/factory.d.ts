export function array(items: Schema | Schema[]): ArraySchema;
export function number(): NumberSchema;
export function numberLiteral(value: number): NumberLiteralSchema;
export function object(properties: {
    [x: string]: Schema;
}): ObjectSchema;
export function string(): StringSchema;
export function stringLiteral(value: string): StringLiteralSchema;
export type Schema = import("./types.js").Schema;
import { ArraySchema } from "./ArraySchema.js";
import { NumberSchema } from "./NumberSchema.js";
import { NumberLiteralSchema } from "./NumberLiteralSchema.js";
import { ObjectSchema } from "./ObjectSchema.js";
import { StringSchema } from "./StringSchema.js";
import { StringLiteralSchema } from "./StringLiteralSchema.js";
