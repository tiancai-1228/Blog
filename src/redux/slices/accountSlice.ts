import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountSlice {
  loginState?: "success" | "false";
  signUpState?: "success" | "false";
  userData?: { name: string; id: string; email: string };
}

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    value: {
      loginState: undefined,
      signUpState: undefined,
      userData: undefined,
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

    setSignUp: (state, _action: any) => ({
      ...state,
      error: "",
    }),

    setCheckLogin: (state, _action: any) => ({
      ...state,
      error: "",
    }),

    setloginState: (state, _action: any) => ({
      ...state,
      value: { ...state.value, loginState: _action.payload.loginState },
      error: "",
    }),
    setState: (state, _action: any) => ({
      ...state,
      value: { ...state.value, loginState: _action.payload.loginState },
      error: "",
    }),
    setUserData: (state, _action: any) => ({
      ...state,
      value: { ...state.value, userData: _action.payload.userData },
      error: "",
    }),
    setSignUpState: (state, _action: any) => ({
      ...state,
      value: { ...state.value, signUpState: _action.payload.signUpState },
      error: "",
    }),
  },
});

export const {
  setLogin,
  getdate,
  setloginState,
  setUserData,
  setCheckLogin,
  setSignUp,
  setSignUpState,
} = accountSlice.actions;

export default accountSlice.reducer;
