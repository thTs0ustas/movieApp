export const createStateProps =
  <State, StatePropsCreators extends object>(
    statePropsCreators: StatePropsCreators,
  ) =>
  (state: State) =>
    Object.entries(statePropsCreators).reduce(
      (stateProps, [key, propSelector]) => ({
        ...stateProps,
        [key]: propSelector(state),
      }),
      {},
    );
