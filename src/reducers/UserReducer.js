import {redux} from "../Constants";

const initialUserInfo = {
  name: "",
  email: "",
  loginStatus: false
}

export function userDetailsReducer(state = initialUserInfo, action) {
  switch (action.type) {
    case redux.USER_EMAIL:
      return Object.assign({}, state, {email: action.email})
    case redux.USER_NAME:
      return Object.assign({}, state, {name: action.name})
    case redux.USER_LOGIN_STATUS:
      return Object.assign({}, state, {loginStatus: action.loginStatus})
    default:
      return state
  }
}
