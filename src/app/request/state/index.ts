import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as AppState from "src/app/state/app.state";
import { RequestState } from "./request.reducer";

// Extends to pass this ProductState to our RootState
// to avoid lazy loading
// para hindi agad i-load sa first loading ung ProductState
// UserState lang muna sa first loading
export interface RootState extends AppState.RootState {
  requests: RequestState;
}

//Get all the product state
const getRequestFeatureState = createFeatureSelector<RequestState>("requests");

//Get only the currentProduct ID state and return it to the component
export const getCurrentRequestId = createSelector(
  getRequestFeatureState,
  (state) => state.currentRequestId
);

//Get only the currentProduct state and return it to the component
export const getCurrentRequest = createSelector(
  getRequestFeatureState,
  getCurrentRequestId,
  (state, currentRequestId) => {
    if (currentRequestId === 0) {
      return {
        id: 0,
        client_id: 0,
        title: "",
        message: "",
        created_date: new Date().toString(),
        accept_support_id: "0",
      };
    } else {
      return currentRequestId
        ? state.requests.find((p) => p.id === currentRequestId)
        : null;
    }
  }
);

//Get the list of all Product in state and return it to the component
export const getRequests = createSelector(
  getRequestFeatureState,
  (state) => state.requests
);
export const getTotalRecords = createSelector(
  getRequestFeatureState,
  (state) => state.totalRecords
);
export const getTotalPage = createSelector(
  getRequestFeatureState,
  (state) => state.totalPage
);
  
//Get the error in state and return it to the component
export const getError = createSelector(
  getRequestFeatureState,
  (state) => state.error
);
