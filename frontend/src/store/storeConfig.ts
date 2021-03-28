import { AppState } from "./slices/AppState";
import { configureStore } from "@reduxjs/toolkit";

export const configStore = configureStore({ reducer: AppState.reducer });

export type RootState = ReturnType<typeof configStore.getState>;
