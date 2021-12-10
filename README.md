# Fixed width file processing/parsing with TS Decorators
This lib provide decorator for fixed width file so that the domain class and spec can stay together. No separate schema creation is needed so that it is more readable, maintainable and extensible.

## Usage
`npm i fixed-width-ts-decorator`

## Example
This lib uses [reflect-metadata](https://github.com/rbuckton/reflect-metadata) for Meta programming.

Inheritance is supported that fields decorated in parent classes will also be included/processed.

### Model definition

```typescript
// class inheritance is Optional here.
export class Transaction extends FixedWidthConvertible {
  @FixedWidth({ start: 0, width: 5 })
  clientId: string;

  @FixedWidth({ start: 5, width: 40 })
  parentName: string;

  @FixedWidth({ start: 45, width: 40, format: { type: DataType.Float } })
  taxAmount: number;

  @FixedWidth({
    start: 85,
    width: 40,
    format: {
      type: DataType.Float,
      precision: 3,
    },
  })
  paymentAmount: number;

  @FixedWidth({
    start: 125,
    width: 20,
    format: { type: DataType.Integer },
  })
  paymentTimeStamp: number;

  @FixedWidth({ start: 145, width: 40 })
  userId: string;

  @FixedWidth({ start: 225, width: 40 })
  paymentId: string;
  // other non-decorated fields
  otherField: string;
}

```

### Parse the file to Objects

```typescript
(() => {
	// Or you can read file line by line
  const file = fs.readFileSync('data/sample.txt', { encoding: 'utf8' });
  const lines = file.split('\n').filter(l => l);
  const rs: Array<Transaction> = lines.map(line => {
    const trans = new Transaction();
		/**
	   * Option 1: if your domain class extends the abstract `FixedWidthConvertible` class,
		 * then you can use the instance.convertFixedWidth method.
		 */
    trans.convertFixedWidth(line);
		/**
		 * Option 2: if your domain class already extends some other classes
		 * then use the static function on the `FixedWidthConvertible` class and pass in the instance as argument like below.
     */
		// FixedWidthConvertible.convertFixedWidth(line, trans);
    return trans;
  });

  console.log(rs);
})()
```
## Format Options
* support parse to Integer or Float(with precision) other than the default String type.
