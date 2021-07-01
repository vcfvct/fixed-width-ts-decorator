import { fixedWidthMetadataKey, FixedWidthOptions, fixedWidthVariableKey } from './fixed-width-decorator';

export abstract class FixedWidthConvertible {
  convertFixedWidth(line: string): void {
    FixedWidthConvertible.convertFixedWidth(line, this);
  }

  static convertFixedWidth<T extends Record<string, any>>(line: string, target: T): T {
    const fields = Reflect.getMetadata(fixedWidthVariableKey, target.constructor, fixedWidthVariableKey);
    for (const field of fields) {
      const options: FixedWidthOptions = Reflect.getMetadata(fixedWidthMetadataKey, target, field);
      (target as any)[field] = line.substring(options.start, options.start + options.width).trim();
    }
    return target;
  }
}

