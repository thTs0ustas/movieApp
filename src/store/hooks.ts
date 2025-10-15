import { useModelProps } from '@/hooks/use-model-props';

import type { RootState } from './rootReducer';

export const useAppModelProps = useModelProps.withTypes<RootState>();
