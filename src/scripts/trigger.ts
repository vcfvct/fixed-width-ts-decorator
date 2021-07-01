import 'reflect-metadata';
import fs from 'fs';
import { Transaction } from './Transaction';

(() => {
  const file = fs.readFileSync('data/sample.txt', { encoding: 'utf8' });
  const lines = file.split('\n').filter(l => l);
  const rs: Array<Transaction> = lines.map(line => {
    const trans = new Transaction();
    trans.convertFixedWidth(line);
    // FixedWidthConvertible.convertFixedWidth(line, trans);
    return trans;
  });

  console.log(rs);
})();
