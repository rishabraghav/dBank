export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkBal' : IDL.Func([], [IDL.Float64], ['query']),
    'compound' : IDL.Func([], [IDL.Float64], []),
    'showTime' : IDL.Func([], [IDL.Int], ['query']),
    'topUp' : IDL.Func([IDL.Float64], [], ['oneway']),
    'widthrawl' : IDL.Func([IDL.Float64], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
