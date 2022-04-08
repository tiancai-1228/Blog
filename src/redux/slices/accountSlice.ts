import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ValueProps {}

export const accountSlice = createSlice({
  name: "account",
  initialState: { value: {} as ValueProps },

  reducers: {
    getdate: (state, _action: any) => ({
      ...state,
      error: "",
    }),
    setLogin: (state, _action: any) => ({
      ...state,
      error: "",
    }),

    loginSuccess: (state, _action: any) => ({
      ...state,
      error: "",
    }),
  },
});

export const { setLogin, getdate } = accountSlice.actions;

export default accountSlice.reducer;
