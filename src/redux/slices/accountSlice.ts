import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ValueProps {
  loginState?: "success" | "false";
}

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    value: {
      loginState: undefined,
    } as ValueProps,
  },

  reducers: {
    getdate: (state, _action: any) => ({
      ...state,
      error: "",
    }),
    setLogin: (state, _action: any) => ({
      ...state,
      error: "",
    }),

    setloginState: (state, _action: any) => ({
      ...state,
      value: { loginState: _action.payload.loginState },
      error: "",
    }),
  },
});

export const { setLogin, getdate, setloginState } = accountSlice.actions;

export default accountSlice.reducer;
