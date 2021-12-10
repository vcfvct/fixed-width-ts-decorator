import { FixedWidth } from '../fixed-width-decorator';
import { Transaction } from './Transaction';

export class ChildTransaction extends Transaction {
  @FixedWidth({ start: 225, width: 40 })
  paymentId: string;
}
