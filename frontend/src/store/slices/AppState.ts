import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  isLoading: boolean;
}
const initState: InitialState = { isLoading: false };
export const AppState = createSlice({
  name: "appState",
  initialState: initState,
  reducers: {
    LoadingChanged: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { LoadingChanged } = AppState.actions;
