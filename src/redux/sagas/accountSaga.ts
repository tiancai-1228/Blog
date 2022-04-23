import { call, put, takeLatest } from "@redux-saga/core/effects";
import {
  getdate,
  setLogin,
  setloginState,
  setUserData,
  setCheckLogin,
} from "../slices/accountSlice";
import { accountLogin, checkLogin } from "../../axios/api/account";
import { addAxiosToken } from "../../axios/index";
// handler
function* handelTest(action: any) {
  const value = action;
  console.log("insaga");
}

function* handelLogin(action: any) {
  const { username, email, password } = action.payload.val;

  try {
    const data: {
      data: {
        result: {
          accessToken: string;
          status: string;
          pk: string;
          user: string;
          email: string;
        };
      };
    } = yield call(accountLogin, {
      name: username,
      email,
      password,
    });
    const userData = {
      id: data.data.result.pk,
      name: data.data.result.user,
      email: data.data.result.email,
    };
    if (data.data.result.status === "success" && data.data.result.accessToken) {
      addAxiosToken(data.data.result.accessToken);
      yield put(setUserData({ userData }));
      yield put(setloginState({ loginState: "success" }));
    } else {
      yield put(setUserData({ userData }));
      yield put(setloginState({ loginState: "false" }));
    }
  } catch (e) {
    console.log(e);
  }
}

function* isLogin(action: any) {
  const { token } = action.payload;
  addAxiosToken(token);
  const data: {
    data: {
      result: {
        accessToken: string;
        status: string;
        pk: string;
        user: string;
        email: string;
      };
    };
  } = yield call(checkLogin, {});
  const userData = {
    id: data.data.result.pk,
    name: data.data.result.user,
    email: data.data.result.email,
  };
  if (data.data.result.status === "success") {
    yield put(setUserData({ userData }));
  }
}

// watcher
export function* watchHandelTest() {
  yield takeLatest(getdate, handelTest);
}

export function* watchHandelLogin() {
  yield takeLatest(setLogin, handelLogin);
}

export function* watchHandelCheck() {
  yield takeLatest(setCheckLogin, isLogin);
}
