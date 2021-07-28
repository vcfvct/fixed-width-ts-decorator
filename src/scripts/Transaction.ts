import { FixedWidthConvertible } from '../fixed-width-convertible';
import { DataType, FixedWidth } from '../fixed-width-decorator';

export class Transaction extends FixedWidthConvertible {
  @FixedWidth({ start: 0, width: 5 })
  clientId: string;
  // clientId = '';
  @FixedWidth({ start: 5, width: 40 })
  parentName: string;
  // parentName = '';
  @FixedWidth({ start: 45, width: 40, format: { type: DataType.Float } })
  taxAmount: number;
  // receiverId = '';
  @FixedWidth({
    start: 85,
    width: 40,
    format: {
      type: DataType.Float,
      precision: 3,
    },
  })
  paymentAmount: number;
  // paymentStatus = '';
  @FixedWidth({
    start: 125,
    width: 20,
    format: { type: DataType.Integer },
  })
  paymentTimeStamp: number;
  // paymentTimeStamp = '';
  @FixedWidth({ start: 145, width: 40 })
  userId: string;
  // userId = '';
  @FixedWidth({ start: 225, width: 40 })
  paymentId: string;
  // paymentId = '';
  otherField: string;
}
