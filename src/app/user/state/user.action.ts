import { createAction, props } from "@ngrx/store";
import { User } from "../user";

export const toggleMaskUsername = createAction(
  "[Users Login Page] Toggle Mask Username"
);

export const loginUser = createAction(
  "[Users Login Page] Login User",
  props<{ username: string; password: string }>()
);
export const loginUserSuccess = createAction(
  "[Users Login API] Login User Success",
  props<{ users: User }>()
);
export const loginUserFailure = createAction(
  "[Users Login API] Login User Fail",
  props<{ error: string }>()
);

export const clearError = createAction("[Users Login Page] Clear Login Error");

export const logoutUser = createAction("[Users Login Page] Logout User");

export const loadUsers = createAction("[Users Login Page] Load Users");

export const loadUsersSuccess = createAction(
  "[Users Login API] Load User Success",
  props<{ users: User[] }>()
);
export const loadUsersFailure = createAction(
  "[Users Login API] Load User Fail",
  props<{ error: string }>()
);

export const updateProfile = createAction(
  "[Profile Profile Page] Update Profile",
  props<{ users: User }>()
);

export const updateProfileSuccess = createAction(
  "[Profile Update API] Update Profile Success",
  props<{ users: User }>()
);
export const updateProfileFailure = createAction(
  "[Profile Update API] UPdate Profile Fail",
  props<{ error: string }>()
);
