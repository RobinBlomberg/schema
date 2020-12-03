import { SchemaValidationError } from './SchemaValidationError.js';
export declare type PrimitiveType = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function';
export declare abstract class Schema {
    abstract stringify(): string;
    abstract validate(value: any, path?: string[]): SchemaValidationResult;
}
export declare type SchemaValidationResult = SchemaValidationError | null;
export declare type SchemaValidator = (value: any) => SchemaValidationResult;
