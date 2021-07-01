import 'reflect-metadata';

export const fixedWidthMetadataKey = Symbol('fixedWidth:metadata');
export const fixedWidthVariableKey = Symbol('fixedWidth:variable');

export function FixedWidth(options: FixedWidthOptions): any {
  return function(target: any, propertyKey: string | symbol) {
    if(!Reflect.hasOwnMetadata(fixedWidthVariableKey, target.constructor, fixedWidthVariableKey)){
      Reflect.defineMetadata(fixedWidthVariableKey, [], target.constructor, fixedWidthVariableKey);
    }
    Reflect.getOwnMetadata(fixedWidthVariableKey, target.constructor, fixedWidthVariableKey).push(propertyKey);
    Reflect.defineMetadata(fixedWidthMetadataKey, options, target, propertyKey);
  };
}

export interface FixedWidthOptions {
  start: number;
  width: number;
}


