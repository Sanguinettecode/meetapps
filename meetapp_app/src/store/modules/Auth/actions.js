export function authRequest(email, password) {
  return {
    type: '@auth/SIGNIN_REQUEST',
    payload: {email, password},
  };
}

export function authSuccess(token, user) {
  return {
    type: '@auth/SIGNIN_SUCCESS',
    payload: {token, user},
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGNUP_REQUEST',
    payload: {name, email, password},
  };
}

export function signOut() {
  return {
    type: '@auth/SIGNOUT',
  };
}

export function authFailure() {
  return {
    type: '@auth/AUTH_FAILURE',
  };
}
