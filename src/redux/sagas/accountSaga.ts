import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getdate, setLogin } from "../slices/accountSlice";
import { accountLogin } from "../../axios/api/account";
import { addAxiosToken } from "../../axios/index";
// handler
function* handelTest(action: any) {
  const value = action;
  console.log("insaga");
}

function* handelLogin(action: any) {
  const { username, email, password } = action.payload.val;
  console.log("insaga", username, email, password);
  try {
    const data: {} = yield call(accountLogin, {
      name: username,
      email,
      password,
    });

    console.log("res:", data);
  } catch (e) {
    console.log(e);
  }
  //   addAxiosToken(res.accessToken);
}
// watcher
export function* watchHandelTest() {
  yield takeLatest(getdate, handelTest);
}

export function* watchHandelLogin() {
  yield takeLatest(setLogin, handelLogin);
}
