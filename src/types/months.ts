import { Fruits } from 'types/fruits';
import { Vegetables } from 'types/vegetables';

export type Months =
  | 'january'
  | 'february'
  | 'march'
  | 'april'
  | 'may'
  | 'june'
  | 'july'
  | 'august'
  | 'september'
  | 'october'
  | 'november'
  | 'december';

export interface MonthProp {
  id: number;
  month: string;
  fruits: Fruits[];
  vegetables: Vegetables[];
  firstTimeFruit?: Fruits[];
  lastTimeFruit?: Fruits[];
  lastTimeVeg?: Vegetables[];
  firstTimeVeg?: Vegetables[];
}
