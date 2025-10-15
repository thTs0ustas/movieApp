import { type Selector } from '@reduxjs/toolkit';

export type ActionCreatorFunction<A> = {
  (...args: any[]): A;
  type: string;
};

export type SeparatePropCreators<T, State> = {
  actionProps: {
    [K in keyof T as T[K] extends ActionCreatorFunction<any>
      ? K
      : never]: T[K] extends ActionCreatorFunction<infer A>
      ? ActionCreatorFunction<A>
      : never;
  };
  stateProps: {
    [K in keyof T as T[K] extends Selector<State, any>
      ? K
      : never]: T[K] extends Selector<State, infer S>
      ? Selector<State, S>
      : never;
  };
};

export const isActionCreator = (fnc: any): fnc is ActionCreatorFunction<any> =>
  !!(fnc as ActionCreatorFunction<any>).type;

export const separatePropCreators = <
  PropCreators extends Record<
    string,
    ActionCreatorFunction<unknown> | Selector<State, unknown>
  >,
  State,
>(
  propCreators: PropCreators,
) =>
  Object.entries(propCreators).reduce(
    (acc, [key, value]) => ({
      ...acc,
      ...(isActionCreator(value)
        ? { ...acc, actionProps: { ...acc?.actionProps, [key]: value } }
        : { ...acc, stateProps: { ...acc?.stateProps, [key]: value } }),
    }),
    {
      actionProps: {},
      stateProps: {},
    } as SeparatePropCreators<PropCreators, State>,
  );
