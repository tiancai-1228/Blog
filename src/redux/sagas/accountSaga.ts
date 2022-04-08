import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getdate, setLogin } from "../slices/accountSlice";

// handler
function* handelTest(action: any) {
  const value = action;
  console.log("insaga");
}

function* handelLogin(action: any) {
  const { username, email, password } = action.payload.val;
  console.log("insaga", username, email, password);
}
// watcher
export function* watchHandelTest() {
  yield takeLatest(getdate, handelTest);
}

export function* watchHandelLogin() {
  yield takeLatest(setLogin, handelLogin);
}
