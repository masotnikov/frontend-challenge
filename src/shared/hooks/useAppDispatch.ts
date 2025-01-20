import {useDispatch} from 'react-redux';
import type {AppDispatch} from '@/app/providers/StoreProviders';

export const useAppDispatch: () => AppDispatch = useDispatch;
