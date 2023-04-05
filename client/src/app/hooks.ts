import type { RootState, AppDispatch } from './store';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
