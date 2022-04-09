import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getdate, setLogin, setloginState } from "../slices/accountSlice";
import { accountLogin } from "../../axios/api/account";
import { addAxiosToken } from "../../axios/index";
// handler
function* handelTest(action: any) {
  const value = action;
  console.log("insaga");
}

function* handelLogin(action: any) {
  const { username, email, password } = action.payload.val;

  try {
    const data: { data: { result: { accessToken: string; status: string } } } =
      yield call(accountLogin, {
        name: username,
        email,
        password,
      });

    if (
      data.data.result.status === "登入成功。" &&
      data.data.result.accessToken
    ) {
      addAxiosToken(data.data.result.accessToken);
      document.cookie = "login=true";
      yield put(setloginState({ loginState: "success" }));
    } else {
      yield put(setloginState({ loginState: "false" }));
    }
  } catch (e) {
    console.log(e);
  }
}
// watcher
export function* watchHandelTest() {
  yield takeLatest(getdate, handelTest);
}

export function* watchHandelLogin() {
  yield takeLatest(setLogin, handelLogin);
}
