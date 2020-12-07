export function INCOMPATIBLE_PROPERTIES(key: string): string;
export function MISSING_PROPERTY(key: string, value: any, schema: Schema): string;
export function TYPE_NOT_ASSIGNABLE(value: any, schema: Schema): string;
export type Schema = import("./types.js").Schema;
