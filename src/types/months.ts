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

export interface Month {
  id: number;
  month: Month;
  firstTimeFruit: Fruits[];
  lastTimeFruit: Fruits[];
  firstTimeVeg: Vegetables[];
  lastTimeVeg: Vegetables[];
  fruits: Fruits[];
  vegetables: Vegetables[];
}
