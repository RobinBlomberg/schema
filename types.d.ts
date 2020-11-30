import {
  ArraySchema,
  NumberLiteralSchema,
  NumberSchema,
  ObjectSchema,
  Schema,
  StringLiteralSchema
} from './internal';

export function array(items: Schema | Schema[]): ArraySchema;

export function number(): NumberSchema;

export function numberLiteral(value: number): NumberLiteralSchema;

export function object(properties: Record<string, Schema>): ObjectSchema;

export function string(): string;

export function stringLiteral(value: string): StringLiteralSchema;

export function infer(value: any): Schema;
