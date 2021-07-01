import { FixedWidthConvertible } from '../fixed-width-convertible';
import { FixedWidth } from '../fixed-width-decorator';

export class Transaction extends FixedWidthConvertible{
  @FixedWidth({ start: 0, width: 5 })
  clientId: string;
  // clientId = '';
  @FixedWidth({ start: 5, width: 40 })
  parentName: string;
  // parentName = '';
  @FixedWidth({ start: 45, width: 40 })
  receiverId: string;
  // receiverId = '';
  @FixedWidth({ start: 85, width: 40 })
  paymentStatus: string;
  // paymentStatus = '';
  @FixedWidth({ start: 125, width: 20 })
  paymentTimeStamp: string;
  // paymentTimeStamp = '';
  @FixedWidth({ start: 145, width: 40 })
  userId: string;
  // userId = '';
  @FixedWidth({ start: 225, width: 40 })
  paymentId: string;
  // paymentId = '';
  otherField: string;
}
