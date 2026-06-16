import counterReducer, {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
} from '../../features/counterSlice';

describe('counterSlice', () => {
  const initialState = { value: 0 };

  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
    });
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(1);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(-1);
  });

  it('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(5));
    expect(actual.value).toEqual(5);
  });

  it('should select count from state', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const state = { counter: { value: 42 } } as any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(selectCount(state as any)).toEqual(42);
  });
});

