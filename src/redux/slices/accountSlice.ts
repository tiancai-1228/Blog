import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountSlice {
  loginState?: "success" | "false";
  userData: {};
}

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    value: {
      loginState: undefined,
    } as AccountSlice,
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
      value: { ...state.value, loginState: _action.payload.loginState },
      error: "",
    }),
    setUserData: (state, _action: any) => ({
      ...state,
      value: { ...state.value, userData: _action.payload.userData },
      error: "",
    }),
  },
});

export const { setLogin, getdate, setloginState, setUserData } =
  accountSlice.actions;

export default accountSlice.reducer;
