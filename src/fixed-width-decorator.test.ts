import fs from 'fs';
import { FixedWidthConvertible } from './fixed-width-convertible';
import { Transaction } from './scripts/Transaction';

describe('fixed width file test', () => {
  let fileContent: string;
  let lines: string[];
  beforeAll(() => {
    fileContent = fs.readFileSync('data/sample.txt', { encoding: 'utf8' });
    lines = fileContent.split('\n').filter(l => l);
  });

  test('should convert data to object via instance method', () => {
    const rs: Array<Transaction> = lines.map(line => {
      const trans = new Transaction();
      trans.convertFixedWidth(line);
      // FixedWidthConvertible.convertFixedWidth(line, trans);
      return trans;
    });
    expect(rs.length).toBe(4);
    expect(rs[0].receiverId).toBe('vcfvct');
    expect(rs[0].clientId).toBe('20000');
  });

  test('should convert data to object via static method', () => {
    const rs: Array<Transaction> = lines.map(line => {
      const trans = new Transaction();
      FixedWidthConvertible.convertFixedWidth(line, trans);
      return trans;
    });
    expect(rs.length).toBe(4);
    expect(rs[0].receiverId).toBe('vcfvct');
    expect(rs[0].clientId).toBe('20000');
  });
});