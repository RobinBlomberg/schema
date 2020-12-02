import { SchemaValidationError } from './SchemaValidationError.js';
export declare abstract class Schema {
    abstract stringify(): string;
    abstract validate(value: any, path?: string[]): SchemaValidationResult;
}
export declare type SchemaValidationResult = SchemaValidationError | null;
export declare type SchemaValidator = (value: any) => SchemaValidationResult;
