import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'checkBal' : () => Promise<number>,
  'compound' : () => Promise<number>,
  'showTime' : () => Promise<bigint>,
  'topUp' : (arg_0: number) => Promise<undefined>,
  'widthrawl' : (arg_0: number) => Promise<undefined>,
}
