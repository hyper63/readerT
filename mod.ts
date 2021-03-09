interface m {
  of: Function;
  map: Function;
  chain: Function;
  ap: Function;
  [x: string]: any;
}

type M = { (...args: any): any; of: Function; [x: string]: any };
// Function with one argument
type U = { ([x, string]: any): any };

export default function _ReaderT(Monad: M) {
  const typestring = `ReaderT(${Monad["@@type"]})`;

  const of = (x: any) => ReaderT(() => Monad.of(x));

  function ask(fn: U) {
    return ReaderT(Monad.of).map(fn);
  }

  function lift(m: m) {
    return ReaderT(() => m);
  }

  function ReaderT(wrapped: Function) {
    function runWith(x: any) {
      return wrapped(x);
    }

    function map(fn: U) {
      return ReaderT((e: any) => runWith(e).map(fn));
    }

    function ap(m: m) {
      return ReaderT((e: any) => runWith(e).ap(m.runWith(e)));
    }

    function chain(fn: U) {
      return ReaderT((e: any) =>
        runWith(e).chain((inner: any) => fn(inner).runWith(e))
      );
    }

    return {
      runWith,
      of,
      map,
      ap,
      chain,
      ["@@type"]: typestring,
      constructor: ReaderT,
    };
  }

  ReaderT.of = of;
  ReaderT.ask = ask;
  ReaderT.lift = lift;
  ReaderT["@@type"] = typestring;
  return ReaderT;
}
