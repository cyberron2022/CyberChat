import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from "@ngrx/store";
import * as AppState from "src/app/state/app.state";
import * as UserActions from "../state/user.action";
import { User } from "../user";

export interface RootState extends AppState.RootState {
  users: UserState;
}

export interface UserState {
  showMaskUsername: boolean;
  currentUserId: number;
  token: string;
  userType: string;
  loginError: string;
  error: string;
  users: User[];
}

const initialState: UserState = {
  showMaskUsername: true,
  currentUserId: 0,
  token: "",
  userType: "",
  loginError: "",
  error: "",
  users: [],
};

//Get all the users state
const getUserFeatureState = createFeatureSelector<UserState>("users");

//Get only the show product code and return it to the component
export const getShowMaskUsername = createSelector(
  getUserFeatureState,
  (state) => state.showMaskUsername
);
export const getCurrentUserId = createSelector(
  getUserFeatureState,
  (state) => state.currentUserId
);
export const getCurrentToken = createSelector(
  getUserFeatureState,
  (state) => state.token
);
export const getCurrentUserType = createSelector(
  getUserFeatureState,
  (state) => state.userType
);
export const getLoginError = createSelector(
  getUserFeatureState,
  (state) => state.loginError
);
export const getError = createSelector(
  getUserFeatureState,
  (state) => state.error
);

export const getCurrentUser = createSelector(getUserFeatureState, (state) =>
  state.users.find((u) => u.id === state.currentUserId)
);

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserActions.toggleMaskUsername, (state): UserState => {
    return {
      ...state,
      showMaskUsername: !state.showMaskUsername,
    };
  }),
  on(UserActions.loadUsersSuccess, (state, action): UserState => {
    return {
      ...state,
      error: "",
      users: action.users,
    };
  }),
  on(UserActions.loadUsersFailure, (state, action): UserState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(UserActions.loginUserSuccess, (state, action): UserState => {
    return {
      ...state,
      currentUserId: action.users[0].id,
      userType: action.users[0].userType,
      loginError: "",
      error: "",
      token: action.users[0].token,
    };
  }),
  on(UserActions.loginUserFailure, (state, action): UserState => {
    return {
      ...state,
      currentUserId: 0,
      loginError: action.error,
    };
  }),
  // on(UserActions.loginUser, (state, action): UserState => {
  //   let error = "";
  //   let currentUserId = 0;
  //   let resultData = state.users.filter(
  //     (u) =>
  //       u.username.toLocaleLowerCase() ===
  //         action.username.toLocaleLowerCase() &&
  //       u.password.toLocaleUpperCase() === action.password.toLocaleUpperCase()
  //   );

  //   if (resultData.length === 0) {
  //     error = "Invalid Username/Password";
  //   } else {
  //     const obj = Object.assign({}, resultData[0]);
  //     currentUserId = obj.id;
  //   }

  //   return {
  //     ...state,
  //     currentUserId: currentUserId,
  //     loginError: error,
  //   };
  // }),
  on(UserActions.logoutUser, (state): UserState => {
    return {
      ...state,
      currentUserId: 0,
      userType: "",
      token: "",
      loginError: "",
      error: "",
    };
  }),
  on(UserActions.clearError, (state): UserState => {
    return {
      ...state,
      loginError: "",
    };
  }),
  on(UserActions.updateProfileSuccess, (state, action): UserState => {
    let updatedProfile = state.users.map((item) =>
      item.id === action.users.id ? action.users : item
    );

    return {
      ...state,
      currentUserId: action.users.id,
      loginError: "",
      error: "",
      users: updatedProfile,
    };
  })
);
