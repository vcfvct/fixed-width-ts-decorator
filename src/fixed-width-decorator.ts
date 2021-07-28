import 'reflect-metadata';

export const fixedWidthMetadataKey = Symbol('fixedWidth:metadata');
export const fixedWidthVariableKey = Symbol('fixedWidth:variable');

export function FixedWidth(options: FixedWidthOptions): any {
  return function(target: any, propertyKey: string | symbol) {
    if (!Reflect.hasOwnMetadata(fixedWidthVariableKey, target.constructor, fixedWidthVariableKey)) {
      Reflect.defineMetadata(fixedWidthVariableKey, [], target.constructor, fixedWidthVariableKey);
    }
    Reflect.getOwnMetadata(fixedWidthVariableKey, target.constructor, fixedWidthVariableKey).push(propertyKey);
    Reflect.defineMetadata(fixedWidthMetadataKey, options, target, propertyKey);
  };
}

export interface FixedWidthOptions {
  start: number;
  width: number;
  format?: FloatOptions | IntOptions;
}

export interface FloatOptions {
  type: DataType.Float;
  precision?: number;
}

export interface IntOptions {
  type: DataType.Integer;
}

export enum DataType {
  Float = 'Float',
  Integer = 'Integer ',
}
