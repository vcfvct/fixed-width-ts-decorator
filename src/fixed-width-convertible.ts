import { DataType, fixedWidthMetadataKey, FixedWidthOptions, fixedWidthVariableKey } from './fixed-width-decorator';

export abstract class FixedWidthConvertible {
  convertFixedWidth(line: string): void {
    FixedWidthConvertible.convertFixedWidth(line, this);
  }

  static convertFixedWidth<T extends Record<string, any>>(line: string, target: T): T {
    const fields = Reflect.getMetadata(fixedWidthVariableKey, target.constructor, fixedWidthVariableKey);
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
}

