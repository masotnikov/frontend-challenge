import {TypedUseSelectorHook, useSelector} from "react-redux";
import type {RootState} from "@/app/providers/StoreProviders";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
