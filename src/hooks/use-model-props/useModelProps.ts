import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useSelector, useDispatch, shallowEqual, Selector } from 'react-redux';

import {
  separatePropCreators,
  type ActionCreatorFunction,
} from './separate-prop-creators';
import { createStateProps } from './create-state-props';

const useModelProps = <
  State,
  const PropsCreators extends Record<
    string,
    ActionCreatorFunction<unknown> | Selector<State, unknown>
  >,
>(
  propsCreators: PropsCreators,
) => {
  const { stateProps, actionProps } = separatePropCreators<
    PropsCreators,
    State
  >(propsCreators);

  const stateSlice = useSelector(
    createStateProps(stateProps),
    shallowEqual,
  ) as {
    // prettier-ignore
    [K in Exclude<keyof PropsCreators, keyof typeof actionProps>]:
    typeof stateProps extends Record<
      K, Selector<State, infer R>
    > ? R : never;
  };

  const dispatch = useDispatch();

  const actions = useMemo(
    () => bindActionCreators(actionProps, dispatch),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return { ...stateSlice, ...actions };
};

useModelProps.withTypes =
  <State>() =>
  <
    PropsCreators extends Record<
      string,
      ActionCreatorFunction<unknown> | Selector<State, unknown>
    >,
  >(
    propsCreators: PropsCreators,
  ) =>
    useModelProps<State, PropsCreators>(propsCreators);

export { useModelProps };
