import { DataType, fixedWidthMetadataKey, FixedWidthOptions, fixedWidthVariableKey } from './fixed-width-decorator';

export abstract class FixedWidthConvertible {
  convertFixedWidth(line: string): void {
    FixedWidthConvertible.convertFixedWidth(line, this);
  }

  static convertFixedWidth<T extends Record<string, any>>(line: string, target: T): T {
    const fields = this.getAllFields(target.constructor);
    for (const field of fields) {
      const options: FixedWidthOptions = Reflect.getMetadata(fixedWidthMetadataKey, target, field);
      const value = line.substring(options.start, options.start + options.width).trim();
      (target as any)[field] = value;
      if (options.format) {
        if (options.format.type === DataType.Integer) {
          (target as any)[field] = parseInt(value);
        } else if (options.format.type === DataType.Float) {
          (target as any)[field] = Number(parseFloat(value).toFixed(options.format.precision || 2));
        }
      }
    }
    return target;
  }

  /**
   * @param clz the class/constructor
   * @returns the fields decorated with @FixedWidth all the way up the prototype chain.
   */
  static getAllFields(clz: Record<string, any>): string[] {
    if(!clz) return [];
    const fields: string[] | undefined = Reflect.getMetadata(fixedWidthVariableKey, clz);
    // get `__proto__` and (recursively) all parent classes
    const rs = new Set([...(fields || []), ...this.getAllFields(Object.getPrototypeOf(clz))]);
    return Array.from(rs);
  }
}

